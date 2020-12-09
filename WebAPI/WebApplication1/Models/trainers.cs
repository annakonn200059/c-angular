using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class trainers
    {
        public int idTrainer { get; set; }
        public string priority { get; set; }
        public int id_trainers_worker { get; set; }
        public int id_trainers_team { get; set; }
    }
}