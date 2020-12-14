using System;
using System.Threading.Tasks;
using Malwee.Domain.ViewModel;
using Malwee.Services;
using Malwee.Services.Contracts;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Malwee.Api.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class OrdemController : Controller
    {
        private readonly IOrdemService orderService;
        public OrdemController(IOrdemService pOrderService)
        {
            orderService = pOrderService;
        }

        [HttpPost]
        [Route("pesquisaOrdens")]
        public async Task<ActionResult<OrdemLista>> pesquisaOrdens([FromBody] OrdemPesquisa ordem)
        {
            try
            {
                return Ok(orderService.getOrdensPesquisa(ordem));
            }
            catch (Exception ex)
            {
                return BadRequest(new ClientErrorData());
            }
        }

        [HttpPost]
        public async Task<ActionResult<string>> insert([FromBody] OrdemInsert ordem)
        {
            try
            {
                orderService.insert(ordem);
                return Ok("Cadastrado");
            }
            catch (Exception ex)
            {
                return BadRequest(new ClientErrorData());
            }
        }

        [HttpGet]
        [Route("GastoMes")]
        public async Task<ActionResult<ClientesGastoMesReport>> pesquisaGastosMes()
        {
            try
            {
                return Ok(orderService.getGastoMes());
            }
            catch (Exception ex)
            {
                return BadRequest(new ClientErrorData());
            }
        }

        [HttpGet]
        [Route("FornecedorGastoMedio")]
        public async Task<ActionResult<FornecedorPrecoServicoReport>> fornecedorPrecoMedio()
        {
            try
            {
                return Ok(orderService.fornecedorPrecoMedio());
            }
            catch (Exception ex)
            {
                return BadRequest(new ClientErrorData());
            }
        }

        [HttpGet]
        [Route("FornecedorSemAtendimento")]
        public async Task<ActionResult<FornecedorSemAtendimentoReport>> fornecedorSemAtendimento()
        {
            try
            {
                return Ok(orderService.fornecedorSemAtendimento());
            }
            catch (Exception ex)
            {
                return BadRequest(new ClientErrorData());
            }
        }

    }
}
