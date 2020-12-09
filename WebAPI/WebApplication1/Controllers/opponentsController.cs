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
    public class opponentsController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select idOpponents, oppositeTeamName, trainerName from dbo.opponents
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
        public string Post(opponents op)
        {
            try
            {
                string query = @"
                insert into dbo.opponents values 
                ('" + op.oppositeTeamName + @"',
                  '" + op.trainerName + @"'
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
        public string Put(opponents op)
        {
            try
            {
                string query = @"
                update dbo.opponents set 
                oppositeTeamName='" + op.oppositeTeamName + @"',
                trainerName='" + op.trainerName + @"'
                where idOpponents=" + op.idOpponents + @"
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

       
    }
}
