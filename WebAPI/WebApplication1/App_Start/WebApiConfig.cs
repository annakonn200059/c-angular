using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Net.Http.Headers;
using System.Web.Http.Cors;
using System.Web.Http.Routing;
using System.Net.Http;

namespace WebApplication1
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Конфигурация и службы веб-API

            // Маршруты веб-API
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }


                /* new { id = @"\d+" }*/
            );

            /*config.Routes.MapHttpRoute(
               name: "DefaultApiWithAction",
               routeTemplate: "Api/{controller}/{action}"
           );

            config.Routes.MapHttpRoute("DefaultApiGet", 
                "Api/{controller}", 
                new { action = "Get" },
                new { httpMethod = new HttpMethodConstraint(HttpMethod.Get) });

            config.Routes.MapHttpRoute("DefaultApiPost", "Api/{controller}",
                new { action = "Post" }, 
                new { httpMethod = new HttpMethodConstraint(HttpMethod.Post) });
            */




            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));
        }
    }
}
