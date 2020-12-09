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
    public class seasonTimeTableController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select idSeasonTimeTable, id_seasonTimeTable_matches, id_seasonTimeTable_seasons, theBestPlayer from
                    dbo.seasonTimeTable
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
        public string Post(seasonTimeTable sT)
        {
            try
            {
                string query = @"
                insert into dbo.seasonTimeTable values 
                (" + sT.id_seasonTimeTable_matches + @",
                  " + sT.id_seasonTimeTable_seasons + @",
                  '" + sT.theBestPlayer + @"'
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
        public string Put(seasonTimeTable sT)
        {
            try
            {
                string query = @"
                update dbo.seasonTimeTable set 
                id_seasonTimeTable_matches=" + sT.id_seasonTimeTable_matches + @",
                id_seasonTimeTable_seasons=" + sT.id_seasonTimeTable_seasons + @",
                theBestPlayer='" + sT.theBestPlayer + @"'
                where idSeasonTimeTable=" + sT.idSeasonTimeTable + @"
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
        public string Delete(int id)
        {
            try
            {
                string query = @"
                delete from dbo.seasonTimeTable
                where idSeasonTimeTable=" + id + @" 
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
        

        [Route("api/seasonTimeTable/GetAllMatchesID")]
        [HttpGet]
        public HttpResponseMessage GetAllMatchesID()
        {
            string query = @"
                  select idMatches from dbo.matches
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


        [Route("api/seasonTimeTable/GetAllSeasonNames")]
        [HttpGet]
        public HttpResponseMessage GetAllSeasonNames()
        {
            string query = @"
                select seasonYear from dbo.seasons
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
