using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.IO.IsolatedStorage;
using System.Linq;
using System.Threading.Tasks;

namespace HQWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BuscaController
    {
        [HttpGet]

        public List<string> Test([FromQuery]string hq)
        {

            var list = new List<string>();

            if (hq != null)
                foreach (var file in FileUtil.GetFiles($"C:\\Users\\lucca\\Documents\\FrontHQWeb\\Assets\\{hq}", "*.png"))
                {
                    using (Image newImage = Image.FromFile(file) )
                    using (MemoryStream stream = new MemoryStream() )
                    {
                        newImage.Save(stream, newImage.RawFormat);
                        byte[] imgbytes = stream.ToArray();
                        list.Add($"data:image/png;base64,{Convert.ToBase64String(imgbytes)}");
                    } 
                }

            return list;
        }


    }

    public static class FileUtil
    {
        public static IEnumerable<string> GetFiles(string root, string searchPattern)
        {
            var pending = new Stack<string>();
            pending.Push(root);
            while (pending.Count != 0)
            {
                var path = pending.Pop();
                string[] next = null;
                try
                {
                    next = Directory.GetFiles(path, searchPattern);
                }
                catch { } //aqui você pode colocar log, aviso ou fazer algo útil se tiver problemas
                if (next != null && next.Length != 0) foreach (var file in next) yield return file;
                try
                {
                    next = Directory.GetDirectories(path);
                    foreach (var subdir in next) pending.Push(subdir);
                }
                catch { } //aqui você pode colocar log, aviso ou fazer algo útil se tiver problemas
            }
        }
    }
}

    
