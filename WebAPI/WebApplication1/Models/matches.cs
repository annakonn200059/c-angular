using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class matches
    {
        public int idMatches { get; set; }
        public string matchScore { get; set; }
        public string matchType { get; set; }
        public string matchDate { get; set; }
        public int id_matches_team { get; set; }
        public int id_matches_opponents { get; set; }
    }
}