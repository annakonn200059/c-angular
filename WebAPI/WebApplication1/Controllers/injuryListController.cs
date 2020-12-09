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
    public class injuryListController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select injuries_idInjuries, player_idPlayer, injuryDate from
                    dbo.injuryList
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
        public string Post(injuryList inL)
        {
            try
            {
                string query = @"
                insert into dbo.injuryList values 
                (" + inL.injuries_idInjuries + @",
                 " + inL.player_idPlayer + @",
                 " + inL.injuryDate + @"
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
        public string Put(injuryList inL)
        {
            try
            {
                string query = @"
                update dbo.injuryList set 
                injuries_idInjuries=" + inL.injuries_idInjuries + @",
                player_idPlayer=" + inL.player_idPlayer + @",
                injuryDate='" + inL.injuryDate + @"'
                where injuries_idInjuries=" + inL.injuries_idInjuries + @" AND player_idPlayer=" + inL.player_idPlayer + @"
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
        /*public string Delete(int id1, int id2)
        {
            try
            {
                string query = @"
                delete from dbo.goals
                where id_goals_player=" + id1 + @" AND id_goals_matches=" + id2 + @"
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
        }*/

        [Route("api/injuryList/GetAllInjuriesNames")]
        [HttpGet]
        public HttpResponseMessage GetAllInjuriesNames()
        {
            string query = @"
                SELECT idInjuries FROM dbo.injuries order by idInjuries
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

        [Route("api/injuryList/GetAllPlayersID")]
        [HttpGet]
        public HttpResponseMessage GetAllPlayersID()
        {
            string query = @"
                select idPlayer from dbo.player order by idPlayer
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
