using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class trainingTimeTable
    {
        public int idTrainingTimeTable { get; set; }
        public string trainingTime { get; set; }
        public string trainingDay { get; set; }
        public int id_trainingTimeTable_team { get; set; }
        public int id_trainingTimeTable_place { get; set; }
    }
}