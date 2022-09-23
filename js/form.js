console.log("USUARIOS: NAHUEL  CONTRASEÑA: 1234567")
console.log("OTRO USUARIO : Agustin  Contraseña:123789")
 
function entrar() {
     usu = document.getElementById("usuarioPrin").value;
     pass = document.getElementById("passPrin").value;

    

    if (usu == 'Nahuel' && pass == '1234567' || usu == 'Agustin' && pass == '123789') {
        setTimeout(function(){
            window.location.href = "views/index.html"
        }, 5000);
            
            toastr["success"]("Espere 5 segundos y será redireccionado", "Acceso concedido");

            localStorage.setItem("Usuario", usu);

        }else{
                toastr["error"]("Nombre de usuario y/o contraseña incorrecto/a.", "Error")
    };
}

