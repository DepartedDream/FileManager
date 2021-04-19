using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Web.SessionState;
using MyException;

namespace FileManager
{
    public class BackFileHandler : IHttpHandler,IRequiresSessionState
    {
        public bool IsReusable { get { return false; } }

        public void ProcessRequest(HttpContext context)
        {
            try 
            {
                string parentFilePath = context.Session["parent_path"].ToString();
                string ancestorFilePath;
                if (parentFilePath == "")
                {
                    ancestorFilePath = "";
                }
                else if (DriveInfo.GetDrives().ToList().Find((DriveInfo driveInfo) => driveInfo.Name == parentFilePath) != null)
                {
                    ancestorFilePath = "";
                }
                else
                {
                    ancestorFilePath = new DirectoryInfo(parentFilePath).Parent.FullName;
                }
                context.Session["current_path"] = parentFilePath;
                context.Session["parent_path"] = ancestorFilePath;
                context.Response.Redirect("Main.aspx");
            }
            catch (Exception e) 
            {
                MyExceptionHandler.SaveException(e);
            }
        }

    }
}