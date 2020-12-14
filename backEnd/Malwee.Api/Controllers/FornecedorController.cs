using System;
using System.Threading.Tasks;
using Malwee.Domain.ViewModel;
using Malwee.Services.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace Malwee.Api.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class FornecedorController : Controller
    {

        private readonly IFornecedorService fornService;
        public FornecedorController(IFornecedorService pFornService)
        {
            fornService = pFornService;
        }

        [HttpGet("{userName}")]
        public  async Task<ActionResult<FornecedorResponse>> getByUser(string userName)
        {
            try
            {
                var forn = fornService.getByUser(userName.Trim());
                return Ok(forn);
            }
            catch (Exception ex)
            {
                return BadRequest(new ClientErrorData());
            }
        }
    }
}
