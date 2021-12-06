using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HQWeb.Models
{
    public class Provisorio
    {
        public Sinopse Theflash()
        {
            Sinopse sinopse = new Sinopse();

            sinopse.title = "The flash";
            sinopse.name = "Flash";
            sinopse.description = "The fastest is man a life";
            sinopse.status = "CONCLUIDO";
            sinopse.publisher = "DC";

            return sinopse;
        }

        public Sinopse Batman()
        {
            Sinopse sinopse = new Sinopse();

            sinopse.title = "The Batman";
            sinopse.name = "Batman";
            sinopse.description = "Batman the dark knight";
            sinopse.status = "CONCLUIDO";
            sinopse.publisher = "DC";

            return sinopse;
        }

        public Sinopse Injustice()
        {
            Sinopse sinopse = new Sinopse();

            sinopse.title = "Injustice gods among us";
            sinopse.name = "Injustice";
            sinopse.description = "Gods among us";
            sinopse.status = "CONCLUIDO";
            sinopse.publisher = "DC";

            return sinopse;
        }
    }
}
