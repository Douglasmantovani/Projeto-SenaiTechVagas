
export const usuarioAutenticado = () => localStorage.getItem("token") !== null;
 
// pega o token do localStorage e vai descriptografar
// retorna todos o objeto do token (jwt.io)
//define a constante parseJWT que retorna o payload do usurio convertido em JSON
export const parseJwt = () => {
    
    var token = localStorage.getItem("token");
    
    if(token){
 
        //codificação para transferência de conteúdo - tipo de criptografia do jwt
        //a chave [1] faz com que seja armazenado na variável apenas o payload, que é o que interessa agora
        //linha do split, basicamente tá pegando todo o token e cortando em partes separadas pelo ponto, aí separa o token em 3: header, payload e signature
        var base64Url = token.split('.')[1];
        
 
        // EXPERESSÕES REGULARES - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
        //replace substitui uma sequência de caracteres por outra
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

         
        //A função window.atob(base64) ou WindowBase64.atob()
        //decodifica uma string de dados que foi codificada através da codificação base-64
        //decodifica a base64 para string, através do método atob
        //e converte a string para JSON
        return JSON.parse(window.atob(base64));
    }
}

