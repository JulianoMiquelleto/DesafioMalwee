using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Malwee.Domain.ViewModel
{
    public class ClientesGastoMesReport
    {
        public IList<MesesAno> ClienteMes{ get; set; }
    }
}

public class MesesAno
{
    public int NumMes { get; set; }
    public string Nome { get; set; }

    public IList<ClienteGasto> Clientes { get; set; }
}

public class ClienteGasto
{
    public string Nome { get; set; }
    public decimal ValorTotal { get; set; }
    public string Mes { get; set; }
}
