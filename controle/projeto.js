function VerificarEntrada(){
    nomeConvidado = document.getElementById('texto').value;
    listaConvidados = ['Kim', 'Marcos', 'Simone','Nátalli','Nicolli'];
    if(listaConvidados.includes(nomeConvidado)){
        document.getElementById('PermissãoDeEntrada').innerText = 'Você pode entrar!'
    }else{
        document.getElementById('PermissãoDeEntrada').innerText = 'Você NÃO pode entrar!'
    }
}