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
    public class playerController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select idPlayer, playerNumber, playerScore, position, id_player_worker, id_player_team from
                    dbo.player
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
        public string Post(player play)
        {
            try
            {
                string query = @"
                insert into dbo.player values 
                (" + play.playerNumber + @",
                  " + play.playerScore + @",
                  '" + play.position + @"',
                  " + play.id_player_worker + @",
                  " + play.id_player_team + @"
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
        public string Put(player play)
        {
            try
            {
                string query = @"
                update dbo.player set 
                playerNumber=" + play.playerNumber + @",
                playerScore=" + play.playerScore + @",
                position='" + play.position + @"',
                id_player_team=" + play.id_player_team + @"
                where idPlayer=" + play.idPlayer + @"
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

        [Route("api/player/GetAllPlayerNames")]
        [HttpGet]
        public HttpResponseMessage GetAllPlayerNames()
        {
            string query = @"
                 SELECT idWorker FROM dbo.worker 
                 inner join dbo.player
                 on idWorker=id_player_worker
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


        [Route("api/player/GetAllTeamNames")]
        [HttpGet]
        public HttpResponseMessage GetAllOpponentsNames()
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
    }
}
