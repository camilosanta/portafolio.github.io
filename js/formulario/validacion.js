var nombre = document.querySelector("#usario");
var correo = document.querySelector(".correo");
var asunto = document.querySelector(".asunto");
var boton = document.querySelector('.formulario__boton')
var nombrespam = document.querySelector(".nombre1");
var correospam = document.querySelector(".correo1");
var asuntospam = document.querySelector(".asunto1");
var Mensaje = document.querySelector(".mensaje")
var mensajespam =document.querySelector(".mensaje1")
var n1 = false;
var n2 = false;
var n3 = false;
var n4 = false;


boton.addEventListener("click",function(event){

 
    event.preventDefault();

    if(nombre.value == 0){
        nombrespam.textContent="El nombre es obligatorio";
    }else{
        console.log("erro no encontrado")
        nombrespam.textContent="";
        n1 = true;
    }

    if(correo.value == 0){
        correospam.textContent="El correo es obligatorio";
    }else{
        console.log("erro no encontrado")
        nombrespam.textContent="";
        n2 = true;
    }
    if(asunto.value == 0){
        asuntospam.textContent="El asunto es obligatorio";
    }else{
        console.log("erro no encontrado")
        nombrespam.textContent="";
        n3 = true;
    }
    if(Mensaje.value == 0){
        mensajespam.textContent="El asunto es obligatorio";
    }else{
        console.log("erro no encontrado")
       mensajespam.textContent="";
        n4 = true;
    }

    if(n1 == true && n2 == true && n3 == true && n4 == true){
  

        nombre.value="";
        asunto.value="";
        correo.value="";
        Mensaje.value="";
        alert("Mensaje enviado")
    }


})


var error = false;

correo.addEventListener("input",function(){
 //--------------------------------------------------------------------------------------------------------------- 
    
 

 if(this.value.length > 0){
    //expreciones
    var exprecion =/[com]/; //exprecion mayusculas
    var exprecion3 =/[\@\·]/; //caracteres especiales ecprecion
    //verifica si la exprecion se encuentra en textoingresado
    var cumple = exprecion.test(correo.value);
    var cumple3 = exprecion3.test(correo.value);

//---------------------------------------------------------------------------------------------------------------
    //cuando una esprecion se testea de vuelve true si cumple si no false
    
    if(cumple == true || cumple3 == true){
        if(cumple == true){
            correospam.textContent="";
            error = true;
        }
        if(cumple == true){
            correospam.textContent="";
            error = true;
        }
    }else{
        correospam.textContent="es importante el uso de  .com y el @ ";
        error = false;
    }
    return //corta el if
}
});
