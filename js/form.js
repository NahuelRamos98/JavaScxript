console.log("USUARIOS: NAHUEL  CONTRASEÑA: 1234567")
console.log("OTRO USUARIO : Agustin  Contraseña:123789")

function entrar() {
     usu = document.getElementById("usuarioPrin").value;
     pass = document.getElementById("passPrin").value;

    if (usu == 'Nahuel' && pass == '1234567' || usu == 'Agustin' && pass == '123789') {
        window.location.href = "views/index.html"
        localStorage.setItem("Usuario", usu);
    }else{
        alert("Nombre de usuario y contraseña equivocado")
    }
}