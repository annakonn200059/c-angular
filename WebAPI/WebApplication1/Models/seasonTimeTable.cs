using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class seasonTimeTable
    {
        public int idSeasonTimeTable { get; set; }
        public int id_seasonTimeTable_matches { get; set; }
        public int id_seasonTimeTable_seasons { get; set; }
        public string theBestPlayer { get; set; }
    }
}