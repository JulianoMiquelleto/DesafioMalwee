using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Malwee.Domain.ViewModel;
using Malwee.Services.Contracts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Malwee.Api.Controllers
{
   
    [ApiController]
    [Route("[controller]")]
    public class ClienteController : Controller
    {
        private readonly IClienteService clienteService;
        public ClienteController(IClienteService pClienteService)
        {
            clienteService = pClienteService;
        }

        [HttpGet]
        public ActionResult<ClienteResponse> getAll()
        {
            try
            {
                var clientes = clienteService.getAll();
                return Ok(clientes);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
