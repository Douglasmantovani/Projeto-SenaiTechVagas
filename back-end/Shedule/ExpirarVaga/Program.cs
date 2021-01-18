using System;
using System.Net.Http;

namespace ExpirarVaga
{
    class Program
    {
        static void Main(string[] args)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("http://localhost:5000/api/");
            HttpResponseMessage responseMessage = client.GetAsync("Empresa/ExpirarVagas").Result;
            Console.Clear();
        }
    }
}