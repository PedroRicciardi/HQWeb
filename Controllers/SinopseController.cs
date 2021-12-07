using HQWeb.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HQWeb.Controllers
{
    [Route("[controller]")]  
    public class SinopseController : Controller
    {
        [Route("{name}")]
        [HttpGet]
        public ActionResult<Sinopse> GetSinopse(string name) 
        {
            Provisorio provisorio = new Provisorio();

            switch (name)
            {
                case "flash":
                    return provisorio.Theflash();

                case "batman":
                    return provisorio.Batman();

                case "injustice":
                    return provisorio.Injustice();

                default:
                    return BadRequest();
            }
        }   

    }
}
