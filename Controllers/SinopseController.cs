using HQWeb.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HQWeb.Controllers
{
    public class SinopseController : Controller
    {
        [Route("{name}")]
        public IEnumerable<Sinopse> GetSinopse(int customerId) 
        { 
            // enviar dados para service.
        }
    }
}
