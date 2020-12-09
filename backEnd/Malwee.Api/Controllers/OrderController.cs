using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Malwee.Api.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Malwee.Api.Controllers
{
   [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class OrderController : Controller
    {
        public async Task<ActionResult<OrderResponse>> orderRegister([FromBody] OrderResponse servico)
        {
            try
            {
                return Ok(new OrderResponse());
            }
            catch (Exception ex)
            {
                return BadRequest(new ClientErrorData());
            }
        }

       

    }
}
