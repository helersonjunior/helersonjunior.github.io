
function receba() {
    var inputUsuario = document.getElementById("usuario")
    var senha = document.getElementById("senha")
    var res = document.getElementById("res")
   
    usuario = inputUsuario.value.toLowerCase()
    console.log(usuario)
    if (usuario.length == 0 && senha.value.length == 0) {
        res.setAttribute('style', 'visibility: visible')
        res.innerHTML = `<p> ? </p>`
        
        
    }
    

    else if (usuario == "junior" && senha.value == "123") {

        location.assign("home.html");


    }
    else if (usuario.value != "junior" || senha.value != "123") {

     
        inputUsuario.setAttribute('style', 'border-bottom: 1px solid red')
        
        senha.setAttribute('style', 'border-bottom: 1px solid red')
        res.setAttribute('style', 'visibility: visible')
        res.innerHTML = `<p>Usuario ou senha Senha incorretos</p>`


}
}
    const senha = document.getElementById('senha')
    const btn = document.getElementById('botao')

   
btn.onclick = () => {

        

        if (senha.type === 'password') {
            senha.type = 'text'
            btn.src = './img/ocultar.png'
        }
        else {
            senha.type = 'password'
            btn.src = './img/mostrar.png'
        }
    }
   
