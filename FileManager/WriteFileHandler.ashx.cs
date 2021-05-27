using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using MyException;
using System.Web.SessionState;

namespace FileManager
{
    public class WriteFileHandler : IHttpHandler,IRequiresSessionState
    {
        public bool IsReusable { get { return false; } }
        //刘庆科修改1
        public void ProcessRequest(HttpContext context)
        {
            try 
            {
                string fileContent = context.Request.QueryString["file_content"];
                string filePath = context.Session["current_path"].ToString();
                FileInfo fileInfo = new FileInfo(filePath);
                StreamWriter streamWriter = fileInfo.CreateText();
                streamWriter.Write(fileContent);
                streamWriter.Dispose();
                context.Response.Redirect("Main.aspx");
            }
            catch (Exception e)
            {
                MyExceptionHandler.SaveException(e);
            }
        }

    }
}