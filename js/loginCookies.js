function escribirCookie(){
        var nom = document.getElementById("nombre").value;
        var contra =  document.getElementById("pass").value;
        
        if(nom==""){
            alert("Introduce un nome");
            return;
        }
        
        if(contra==""){
            alert("Introduce una contraseña");
            return;
        }
    }