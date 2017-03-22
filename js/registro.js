function validar(elemento){
        
        var nom = document.getElementById("nombre").value;
        var email = document.getElementById("in-correo").value;
        var contra =  document.getElementById("pass").value;
        var patronCorreo = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
        
        //tambien vale: var patronTelf = new RegExp("#patron");
        
        for(i=0;i<document.formulario.pais.length; i++){
            
            //seleccion del input tipo radio.
            if(document.formulario.pais[i].checked){
                var pais=document.formulario.pais[i].value;
            }
        }
        //validacion de los datos del formulario.
        if(nom.trim() == ""){
            alert("Obligatorio introducir un Nombre");
            return false;
        }
        
        if(contra==""){
            alert("Introduce una contraseña");
            return;
        }
        
        if(!(email.match(patronCorreo))){
            alert("O correo non ten o formato requerido");
            return false;
        }
        
        return  true;
    }