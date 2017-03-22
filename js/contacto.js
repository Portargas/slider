function validar(elemento){
        
        var nom = document.getElementById("nombre").value;
        var asunt = document.getElementById("asunto").value;
        var email = document.getElementById("in-correo").value;
        var patronCorreo = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
        
        //validacion de los datos del formulario.
        if(nom.trim() == ""){
            alert("Obligatorio introducir un Nombre");
            return false;
        }
        
        if(asunt.trim() == ""){
            alert("Obligatorio introducir el asunto");
            return false;
        }
        
        if(!(email.match(patronCorreo))){
            alert("O correo no tiene el formato requerido");
            return false;
        }
        
        return  true;
    }