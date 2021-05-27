using System;
using System.IO;
using System.Web;

namespace MyException
{
    public class MyExceptionHandler
    {
        //李德益修改3
        public static string SaveException(Exception exception)
        {
            FileInfo fileInfo = new FileInfo(AppDomain.CurrentDomain.BaseDirectory + "\\Log.txt");
            StreamWriter streamWriter = fileInfo.AppendText();
            Exception innerException=GetInnerException(exception);
            streamWriter.WriteLine(DateTime.Now.ToString());
            streamWriter.WriteLine(innerException.Message);
            streamWriter.WriteLine(innerException.StackTrace);
            streamWriter.WriteLine();
            streamWriter.Close();
            streamWriter.Dispose();
            return exception.Message;
        }

        private static Exception GetInnerException(Exception exception) 
        {
            if (exception.InnerException != null)
            {
                return GetInnerException(exception.InnerException);
            }
            else
            {
                return exception;
            }
        }

    }
}