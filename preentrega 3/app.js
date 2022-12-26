let carrito = []

let cardTitle1 = document.querySelector("#libro1");
let boton1 = document.querySelector("#btn1");

let cardTitle2 = document.querySelector("#libro2");
let boton2 = document.querySelector("#btn2");

let cardTitle3 = document.querySelector("#libro3");
let boton3 = document.querySelector("#btn3");


let cardTitle4 = document.querySelector("#libro4");
let boton4 = document.querySelector("#btn4");

let cardTitle5 = document.querySelector("#libro5");
let boton5 = document.querySelector("#btn5");

let cardTitle6 = document.querySelector("#libro6");
let boton6 = document.querySelector("#btn6");

let cardTitle7 = document.querySelector("#libro7");
let boton7 = document.querySelector("#btn7");

let cardTitle8 = document.querySelector("#libro8");
let boton8 = document.querySelector("#btn8");

let cardTitle9 = document.querySelector("#libro9");
let boton9 = document.querySelector("#btn9");

let cardTitle10 = document.querySelector("#libro10");
let boton10 = document.querySelector("#btn10");

let cardTitle11 = document.querySelector("#libro11");
let boton11 = document.querySelector("#btn11");

let cardTitle12 = document.querySelector("#libro12");
let boton12 = document.querySelector("#btn12");

boton1.addEventListener("click", function(){
    carrito.push(cardTitle1.textContent)
    console.log(carrito)
})

boton2.addEventListener("click", function(){
    carrito.push(cardTitle2.textContent)
    console.log(carrito)
})

boton3.addEventListener("click", function(){
    carrito.push(cardTitle3.textContent)
    console.log(carrito)
})

boton4.addEventListener("click", function(){
    carrito.push(cardTitle4.textContent)
    console.log(carrito)
})

boton5.addEventListener("click", function(){
    carrito.push(cardTitle5.textContent)
    console.log(carrito)
})

boton5.addEventListener("click", function(){
    carrito.push(cardTitle5.textContent)
    console.log(carrito)
})

boton6.addEventListener("click", function(){
    carrito.push(cardTitle6.textContent)
    console.log(carrito)
})

boton7.addEventListener("click", function(){
    carrito.push(cardTitle7.textContent)
    console.log(carrito)
})

boton8.addEventListener("click", function(){
    carrito.push(cardTitle8.textContent)
    console.log(carrito)
})

boton9.addEventListener("click", function(){
    carrito.push(cardTitle9.textContent)
    console.log(carrito)
})

boton10.addEventListener("click", function(){
    carrito.push(cardTitle10.textContent)
    console.log(carrito)
})

boton11.addEventListener("click", function(){
    carrito.push(cardTitle11.textContent)
    console.log(carrito)
})

boton12.addEventListener("click", function(){
    carrito.push(cardTitle12.textContent)
    console.log(carrito)
})



let email = document.querySelector("#correo");
email.addEventListener("input", (e)=>{
    if(e.target.value === ""){
        console.log("El email no puede tener espacios en blanco")
    }
})

let formulario = document.querySelector("#formulario");
const correo = document.querySelector("#correo");
const sugerencias = document.querySelector("#sugerencias");


formulario.addEventListener("submit", enviarSugerencias);
function enviarSugerencias(e){
    e.preventDefault();
    console.log("Sus sugerencias han sido enviadas, le responderemos lo mas pronto posible al correo ", correo.value)
}