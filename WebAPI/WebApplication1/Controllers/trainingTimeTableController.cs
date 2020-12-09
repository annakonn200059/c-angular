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
    public class trainingTimeTableController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select idTrainingTimeTable, trainingTime, trainingDay, id_trainingTimeTable_team, 
                    id_trainingTimeTable_place from
                    dbo.trainingTimeTable
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
        public string Post(trainingTimeTable trTT)
        {
            try
            {
                string query = @"
                insert into dbo.trainingTimeTable values 
                ('" + trTT.trainingTime + @"',
                  '" + trTT.trainingDay + @"',
                  " + trTT.id_trainingTimeTable_team + @",
                   " + trTT.id_trainingTimeTable_place + @"
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
        public string Put(trainingTimeTable trTT)
        {
            try
            {
                string query = @"
                update dbo.trainingTimeTable set 
                trainingTime='" + trTT.trainingTime + @"',
                trainingDay='" + trTT.trainingDay + @"',
                id_trainingTimeTable_team=" + trTT.id_trainingTimeTable_team + @",
                id_trainingTimeTable_place=" + trTT.id_trainingTimeTable_place + @"
                where idTrainingTimeTable=" + trTT.idTrainingTimeTable + @"
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
                delete from dbo.trainingTimeTable
                where idTrainingTimeTable=" + id + @" 
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


        [Route("api/trainingTimeTable/GetAllTeamNames")]
        [HttpGet]
        public HttpResponseMessage GetAllTrainersNames()
        {
            string query = @"
                 select teamName from dbo.team
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


        [Route("api/trainingTimeTable/GetAllPlaceNames")]
        [HttpGet]
        public HttpResponseMessage GetAllSeasonNames()
        {
            string query = @"
                select roomNumber from dbo.place
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
