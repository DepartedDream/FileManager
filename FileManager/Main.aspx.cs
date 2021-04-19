using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.IO;
using MyException;

namespace FileManager
{
    public partial class Main : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                InitialPath();
                ShowFile();
                ShowPasteFile();
                ShowCurrentFile();
            }
            catch(Exception exception) 
            {
                MyExceptionHandler.SaveException(exception);
            }
        }

        private void InitialPath() 
        {
            if (Session["current_path"]==null) 
            {
                Session["current_path"] = "";
                Session["parent_path"] = "";
            }
        }

        private void ShowFile()
        {
            string currentPath = Session["current_path"].ToString();
            if (File.Exists(Uri.UnescapeDataString(currentPath)))
            {
                FileInfo fileInfo = new FileInfo(currentPath);
                StreamReader streamReader = fileInfo.OpenText();
                string fileContent = "";
                while (streamReader.Peek() != -1)
                {
                    fileContent += streamReader.ReadLine();
                }
                streamReader.Dispose();
                file_content.InnerText = fileContent;
            }
            else if (Directory.Exists(Uri.UnescapeDataString(currentPath)))
            {
                string delButtonHtml = "<div class=\"del_btn\"></div>";
                string copyButtonHtml = "<div class=\"copy_btn\"></div>";
                foreach (string dirName in Directory.GetDirectories(currentPath))
                {
                    DirectoryInfo directoryInfo = new DirectoryInfo(dirName);
                    if (((directoryInfo.Attributes & FileAttributes.Hidden) != FileAttributes.Hidden) & ((directoryInfo.Attributes & FileAttributes.System) != FileAttributes.System))
                    {
                        string fileNameHtml = $"<div class=\"file_name\">{directoryInfo.Name}</div>";
                        file_list.InnerHtml += $"<div class=\"file\" file_type=\"directory\" file_path={Uri.EscapeUriString(directoryInfo.FullName)}>{fileNameHtml}{copyButtonHtml}{delButtonHtml}</div>";
                    }
                }
                foreach (string fileName in Directory.GetFiles(currentPath))
                {
                    FileInfo fileInfo = new FileInfo(fileName);
                    if (((fileInfo.Attributes & FileAttributes.Hidden) != FileAttributes.Hidden)&((fileInfo.Attributes & FileAttributes.System) != FileAttributes.System)) 
                    {
                        string fileNameHtml = $"<div class=\"file_name\">{fileInfo.Name}</div>";
                        file_list.InnerHtml += $"<div class=\"file\" file_type=\"file\" file_path={Uri.EscapeUriString(fileInfo.FullName)}>{fileNameHtml}{copyButtonHtml}{delButtonHtml}</div>";
                    }
                }
            }
            else if (currentPath == "")
            {
                foreach (DriveInfo driveInfo in DriveInfo.GetDrives())
                {
                    string fileNameHtml = $"<div class=\"file_name\">{driveInfo.Name}</div>";
                    file_list.InnerHtml += $"<div class=\"file\" file_type=\"drive\" file_path={Uri.EscapeUriString(driveInfo.Name)}>{fileNameHtml}</div>";
                }
            }
        }

        private void ShowPasteFile() 
        {
            if(Session["copy_file_path"] != null) 
            {
                string copyFileEncryptPath = Uri.EscapeDataString(Session["copy_file_path"].ToString());
                string copyFileType = Session["copy_file_type"].ToString();
                string copyFileName =  Session["copy_file_name"].ToString();
                string copyFileNameHtml = $"<div id=\"copy_file_name\">{copyFileName}</div>";
                string pasteBtnHtml = "<div class=\"paste_btn\"></div>";
                copy_file.Attributes["copy_file_type"] = copyFileType;
                copy_file.Attributes["copy_file_path"] = copyFileEncryptPath;
                copy_file.InnerHtml = $"{copyFileNameHtml}{pasteBtnHtml}";
            }
        }

        private void ShowCurrentFile() 
        {
            string currentPath= Uri.UnescapeDataString(Session["current_path"].ToString());
            current_path.InnerText = currentPath;
            if (currentPath=="")
            {
                current_path.Attributes["current_file_type"] = "drive";
            }
            else if (Directory.Exists(currentPath))
            {
                current_path.Attributes["current_file_type"] = "directory";
            }
            else if (File.Exists(currentPath))
            {
                current_path.Attributes["current_file_type"] = "file";
            }
        }

    }
}