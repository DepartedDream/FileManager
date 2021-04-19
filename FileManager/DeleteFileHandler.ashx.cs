using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Web.SessionState;
using MyException;

namespace FileManager
{
    public class DeleteFileHandler : IHttpHandler, IRequiresSessionState
    {
        public bool IsReusable { get { return false; } }

        public void ProcessRequest(HttpContext context)
        {
            try 
            {
                string fileType = context.Request.QueryString["file_type"].ToString();
                string filePath = context.Request.QueryString["file_path"].ToString();
                if (fileType == "file")
                {
                    FileInfo fileInfo = new FileInfo(filePath);
                    fileInfo.Delete();
                }
                else if (fileType == "directory")
                {
                    DirectoryInfo directoryInfo = new DirectoryInfo(filePath);
                    directoryInfo.Delete();
                }
                context.Response.Redirect("Main.aspx");
            }
            catch(Exception e) 
            {
                MyExceptionHandler.SaveException(e);
            }
        }

    }
}