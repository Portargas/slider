function insertarTexto (){
    var titulo = document.getElementById("titulo").value;
    var nova = document.getElementById("nova").value;
    var article = "<article id='contenido'>";
    var finartic = "</article>";
    document.getElementById("txt").innerHTML += article; 
    
    document.getElementById("contenido").innerHTML += "<h4>" + titulo + "</h4> <br/>";
    document.getElementById("contenido").innerHTML += "<p>"+nova+"</p>";
    
    document.getElementById("txt").innerHTML += finartic;
    //document.getElementById("txt").innerHTML += "<p>"+nova+"</p>" + finartic;
}
//background-color: black;

function cambiar(elemento){
    switch(elemento.style.backgroundColor) {
        case 'black':
        elemento.style.borderColor = 'plum';
        break;
        case 'plum':
        elemento.style.borderColor = 'black';
        break;
    }
}

