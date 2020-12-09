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
    public class expensesController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select idExpenses,food,equipment,rent,treatmentCost,id_expenses_team,id_expenses_seasons from
                    dbo.expenses
                     ";
            DataTable table = new DataTable();

            using(var con= new SqlConnection(ConfigurationManager.
                ConnectionStrings["hockeyClubDB"].ConnectionString))
              using(var cmd= new SqlCommand(query,con))
              using (var da= new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        //insert data
        public string Post(expenses exp)
        {
            try
            {
                string query = @"
                insert into dbo.expenses values (" + exp.food + @", 
                " + exp.equipment + @"," + exp.rent + @"," + exp.treatmentCost + @",
                " + exp.id_expenses_team + @"," + exp.id_expenses_seasons + @")
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
        public string Put(expenses exp)
        {
            try
            {
                string query = @"
                update dbo.expenses set food=
                '" + exp.food + @"'
                where idExpenses="+exp.idExpenses+@"
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
                delete from dbo.expenses 
                where idExpenses=" + id + @"
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

        [Route("api/expenses/GetAllTeamNames")]
        [HttpGet]
        public HttpResponseMessage GetAllTeamNames()
        {
            string query = @"
                select idTeam from dbo.team";

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

        [Route("api/expenses/GetAllSeasonNames")]
        [HttpGet]
        public HttpResponseMessage GetAllSeasonNames()
        {
            string query = @"
                select idSeasons from dbo.seasons";

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
