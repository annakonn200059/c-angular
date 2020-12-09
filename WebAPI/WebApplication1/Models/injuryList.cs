using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class injuryList
    {
        public int injuries_idInjuries { get; set; }
        public int player_idPlayer { get; set; }
          [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public string injuryDate { get; set; }
    }
}