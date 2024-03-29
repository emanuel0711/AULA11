let textoDoUsuario = ("eu gosto de lasanha");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("lasanha")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a função serve para desmentir a frase la em cima

//vai sair tudo true