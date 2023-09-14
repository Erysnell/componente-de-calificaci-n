const panel1 = document.querySelector(".panel1");
const submit = document.querySelector(".submit");
const boton1 = document.getElementById("b1");
const boton2 = document.getElementById("b2");
const boton3 = document.getElementById("b3");
const boton4 = document.getElementById("b4");
const boton5 = document.getElementById("b5");
var calificacion = 0;
boton1.addEventListener('click',()=>{
  calificacion = 1;
})
boton2.addEventListener('click',()=>{
  calificacion = 2;
})
boton3.addEventListener('click',()=>{
  calificacion = 3;
})
boton4.addEventListener('click',()=>{
  calificacion = 4;
})
boton5.addEventListener('click',()=>{
  calificacion = 5;
})

const contenido2 = ` <div class="contenido2">
<img src="images/illustration-thank-you.svg" alt="" class="img-gracias">
<div ><p class="selected">You selected <!-- Add rating here --> ${calificacion} out of 5</p> </div>

<div>  <h1 class="thank">Thank you!</h1></div>

<div><p class="we">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p></div>
</div>`;




submit.addEventListener('click',()=>{
  if(calificacion > 0){
    panel1.innerHTML = contenido2;
  }

})