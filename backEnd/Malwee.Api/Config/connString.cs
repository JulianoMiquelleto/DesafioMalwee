namespace Simplify.Config
{

    public class ConnectionString : IConnString
    {
        public string Conn { get; set; }
    }
    public interface IConnString
    {
        string Conn { get; set; }

    }
}