using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Web.SessionState;
using MyException;

namespace FileManager
{
    public class PasteFileHandler : IHttpHandler, IRequiresSessionState
    {
        public bool IsReusable
        {
            get { return false; }
        }

        public void ProcessRequest(HttpContext context)
        {
            try
            {
                string copyFilePath = context.Session["copy_file_path"].ToString();
                string copyFileType = context.Session["copy_file_type"].ToString();
                string currentFilePath = context.Session["current_path"].ToString();
                if (copyFileType == "file")
                {
                    FileInfo fileInfo = new FileInfo(copyFilePath);
                    string a = $"{currentFilePath}\\{fileInfo.Name}";
                    fileInfo.MoveTo($"{currentFilePath}\\{fileInfo.Name}");
                }
                else if (copyFileType == "directory")
                {
                    DirectoryInfo directoryInfo = new DirectoryInfo(copyFilePath);
                    directoryInfo.MoveTo(currentFilePath);
                }
                context.Response.Redirect("Main.aspx");
            }
            catch (Exception e)
            {
                MyExceptionHandler.SaveException(e);
            }
        }

    }
}