using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class player
    {
        public int idPlayer { get; set; }
        public int playerNumber { get; set; }
        public int playerScore { get; set; }
        public string position { get; set; }
        public int id_player_worker { get; set; }
        public int id_player_team { get; set; }
    }
}