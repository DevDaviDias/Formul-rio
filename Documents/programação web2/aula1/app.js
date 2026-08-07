
function validarCampos(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    if(nome === "" || senha ===""){
       mensagem.textContent = "Por favor preencha todos os campos!";
       mensagem.style.color = "red";  
    }

    mensagem.textContent = "Concluido com sucesso!";
    mensagem.style.color = "green";

}