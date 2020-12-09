using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class expenses
    {
        public int idExpenses { get; set; }
        public float food { get; set; }
        public float equipment { get; set; }
        public float rent { get; set; }
        public float treatmentCost { get; set; }
        public int id_expenses_team { get; set; }
        public int id_expenses_seasons { get; set; }

        internal static float GetFloat(int v)
        {
            throw new NotImplementedException();
        }
    }
}