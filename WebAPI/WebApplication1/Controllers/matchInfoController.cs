using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class matchInfoController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                   SELECT dbo.matches.matchScore, dbo.team.teamName AS team, dbo.opponents.oppositeTeamName AS opponent
                    FROM dbo.matches INNER JOIN dbo.team
                    ON id_matches_team = idTeam
                    INNER JOIN dbo.opponents
                    ON id_matches_opponents = idOpponents
                     ";
            DataTable table = new DataTable();

            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["hockeyClubDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        //insert data
        
    }
}
