using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using MyException;

namespace FileManager
{
    /// <summary>
    /// JumpPathHandler 的摘要说明
    /// </summary>
    public class JumpPathHandler : IHttpHandler
    {
        public bool IsReusable { get { return false; } }

        public void ProcessRequest(HttpContext context)
        {
            try 
            {
                string filePath = context.Request.QueryString["file_path"];
                context.Session["current_path"] = filePath;
                if (DriveInfo.GetDrives().ToList().Find((DriveInfo driveInfo) => driveInfo.Name == filePath) != null)
                {
                    context.Session["parent_path"] = "";
                }
                else if (Directory.Exists(filePath))
                {
                    context.Session["parent_path"] = new DirectoryInfo(filePath).Parent.FullName;
                }
                else if (File.Exists(filePath))
                {
                    context.Session["parent_path"] = new FileInfo(filePath).FullName;
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