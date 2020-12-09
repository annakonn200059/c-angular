using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace WebApplication1.Controllers
{
    public class matchesController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select idMatches, matchScore, matchType, matchDate, id_matches_team, id_matches_opponents from
                    dbo.matches
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
        public string Post(matches match)
        {
            try
            {
                string query = @"
                insert into dbo.matches values 
                ('" + match.matchScore + @"',
                  '" + match.matchType + @"',
                  '" + match.matchDate + @"',
                  " + match.id_matches_team + @",
                  " + match.id_matches_opponents + @"
                )
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

                return "Added Successfully!";
            }
            catch (Exception)
            {
                return "Failed to Add!";
            }
        }

        //updates data
        public string Put(matches match)
        {
            try
            {
                string query = @"
                update dbo.matches set 
                matchScore='" + match.matchScore + @"',
                matchType='" + match.matchType + @"',
                matchDate='" + match.matchDate + @"'
                where idMatches=" + match.idMatches + @"
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

                return "Updated Successfully!";
            }
            catch (Exception)
            {
                return "Failed to Update!";
            }
        }

        //delete
        /*public string Delete(int id)
        {
            try
            {
                string query = @"
                delete from dbo.managementWorkers
                where idManagementWorkers=" + id + @" 
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

                return "Deleted Successfully!";
            }
            catch (Exception)
            {
                return "Failed to Delete!";
            }
        }
        */

        [Route("api/matches/GetAllTeamNames")]
        [HttpGet]
        public HttpResponseMessage GetAllTeamNames()
        {
            string query = @"
                select idTeam from dbo.team
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


        [Route("api/matches/GetAllOpponentsNames")]
        [HttpGet]
        public HttpResponseMessage GetAllOpponentsNames()
        {
            string query = @"
                select idOpponents from dbo.opponents
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

    }
}
