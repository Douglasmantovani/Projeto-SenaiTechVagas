const validaCep = /^[0-9]{8}$/g;

export default function buscarCep(valor) {
  if (validaCep.test(valor)) {
    const URL = `https://viacep.com.br/ws/${valor}/json/`;
    fetch(URL)
      .then((resposta) => resposta.json())
      .then((data) => {
        document.getElementById("rua").value = data.logradouro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("uf").value = data.uf;
      })
      .catch((erro) => console.error(erro));
  } else {
    alert("O CEP é inválido");
  }
}
