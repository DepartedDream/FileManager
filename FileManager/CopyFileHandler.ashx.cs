using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Web.SessionState;
using MyException;

namespace FileManager
{
    public class CopyFileHandler : IHttpHandler, IRequiresSessionState
    {
        public bool IsReusable { get { return false; } }

        public void ProcessRequest(HttpContext context)
        {
            try
            {
                context.Session["copy_file_type"] = context.Request.QueryString["copy_file_type"].ToString();
                context.Session["copy_file_path"] = context.Request.QueryString["copy_file_path"].ToString();
                context.Session["copy_file_name"] = context.Request.QueryString["copy_file_name"].ToString();
                context.Response.Redirect("Main.aspx");
            }
            catch (Exception e)
            {
                MyExceptionHandler.SaveException(e);
            }
        }

    }
}