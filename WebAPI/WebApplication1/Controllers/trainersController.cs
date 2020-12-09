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
    public class trainersController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select idTrainers, priority, id_trainers_worker, id_trainers_team from
                    dbo.trainers
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
        public string Post(trainers tr)
        {
            try
            {
                string query = @"
                insert into dbo.trainers values 
                ('" + tr.priority + @"',
                  " + tr.id_trainers_worker + @",
                  " + tr.id_trainers_team+ @"
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
        public string Put(trainers tr)
        {
            try
            {
                string query = @"
                update dbo.trainers set 
                priority='" + tr.priority + @"',
                id_trainers_team=" + tr.id_trainers_team + @"
                where idTrainers=" + tr.idTrainer + @"
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
                delete from dbo.trainers
                where idTrainers=" + id + @" 
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


        [Route("api/trainers/GetAllTrainersNames")]
        [HttpGet]
        public HttpResponseMessage GetAllTrainersNames()
        {
            string query = @"
                 SELECT FIO FROM dbo.worker 
                 inner join dbo.trainers
                 on idWorker=id_trainers_worker
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


        [Route("api/trainers/GetAllTeamNames")]
        [HttpGet]
        public HttpResponseMessage GetAllSeasonNames()
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
    }
}
