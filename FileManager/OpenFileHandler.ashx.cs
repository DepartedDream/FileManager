using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Web.SessionState;
using MyException;

namespace FileManager
{
    public class OpenFileHandler : IHttpHandler, IRequiresSessionState
    {
        public bool IsReusable{get { return false; }}

        public void ProcessRequest(HttpContext context)
        {
            try 
            {
                string filePath = context.Request.QueryString["file_path"];
                string fileType = context.Request.QueryString["file_type"];
                context.Session["current_path"] = filePath;
                if (fileType == "directory")
                {
                    context.Session["parent_path"] = new DirectoryInfo(filePath).Parent.FullName;
                }
                else if (fileType == "file")
                {
                    context.Session["parent_path"] = new FileInfo(filePath).Directory.FullName;
                }
                else if (fileType == "drive")
                {
                    context.Session["parent_path"] = "";
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