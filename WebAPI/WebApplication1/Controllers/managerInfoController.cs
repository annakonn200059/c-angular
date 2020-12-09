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
    public class managerInfoController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    SELECT dbo.worker.FIO AS Name, dbo.issueManW.phoneNumber AS number, 
                    dbo.managementWorkers.job, dbo.worker.workingExperience
                     FROM dbo.managementWorkers INNER JOIN dbo.worker
                    ON worker.idWorker = managementWorkers.id_managementWorkers_worker
                    join dbo.issueManW
                    on managementWorkers.idManagementWorkers=issueManW.idIssueMan_managementWorkers
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
        public string Post(managerInfo exp)
        {
            try
            {
                string query = @"
                insert into ManagerInfoWithoutSalary values ('" + exp.Name + @"', 
                '" + exp.number + @"','" + exp.job + @"'," + exp.workingExperience + @")
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

                return "Your request was successfully submitted! We will contact you later";
            }
            catch (Exception)
            {
                return "Failed to Add!";
            }
        }

       

        
    }
}
