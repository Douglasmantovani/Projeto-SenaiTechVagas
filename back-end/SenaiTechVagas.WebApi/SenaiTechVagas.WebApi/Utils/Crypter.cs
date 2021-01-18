using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SenaiTechVagas.WebApi.Utils
{
    public static class Crypter
    {
        public static string Criptografador(string text)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(text);
            System.Security.Cryptography.SHA256 MinhaHasher = System.Security.Cryptography.SHA256.Create();
            byte[] hash = MinhaHasher.ComputeHash(bytes);
            string NomeHash = string.Empty;
            foreach (byte x in hash)
            {
                NomeHash += string.Format("{0:x2}", x);
            }
            return NomeHash;
        }
    }
}
