using System;
using System.Threading.Tasks;
using Blog.DataAccess;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BlogDataController : ControllerBase
    {
        //private ICosmosDbService dbinstance;
        public BlogDataController(/*CosmosDbService dbinstance*/)
        {
            // this.dbinstance = dbinstance;
        }

        //[HttpGet]
        //public async Task<IActionResult> GetData()
        //{
        //    return new JsonResult(await dbinstance.GetItemAsync("6558980a-2d92-481a-b55a-74bd0ce9488e"));
        //}
    }
}
