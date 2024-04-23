// //carrito

 const carrito=[];
 ///Función agregar al carrito.

 const agregarAlCarrito=(producto)=>{
  const itemEncontrado=carrito.find(item=>item.nombre===producto.nombre);
  if(itemEncontrado){
   itemEncontrado.cantidad++;
  }
  else{
    carrito.push({...producto,cantidad:1});
  }
}
  //Función actualizar carrito.
const actualizarCarrito=()=>{
  if (carrito.length=0){
    carritoVacio.classList.remove("d-none");
    carritoProductos.classList.add("d-none");
  }
  else{
   carritoVacio.classList.add("d-none");
   carritoProductos.classList.remove("d-none");
   const div=document.createElement("div");
   div.classList.add("carrito-producto");
   div.innerHTML=`
   <h3>${producto.nombre}</h3>
   <span>${producto.precio}</span>
   
   `

  }
}

//


//Funcion constructora de objetos.

class Producto {

  constructor(nombre, categoria, precio, img, cantidad) {
 
   this.nombre = nombre;
 
   this.categoria = categoria;
 
   this.precio = precio;

   this.img= img;

 
  }
 
} ;
 
///Objetos creados con función constructora.

///Objetos de Hogar.

 const Sillon=new Producto("Sillon","Hogar",200000,"assets/imagen-heladera.jpeg");
 const Colchon=new Producto("Colchon","Hogar",100000,"assets/imagen-heladera.jpeg");
 const Mesa=new Producto("Mesa","Hogar",100000,"assets/imagen-heladera.jpeg");
 const Estanteria=new Producto("Estanteria","Hogar",80000,"assets/imagen-heladera.jpeg");
 const Escritorio=new Producto("Escritorio","Hogar",50000,"assets/imagen-heladera.jpeg");

///Objetos de Electrodomesticos.

 const Heladera=new Producto("Heladera","Electrodomesticos",1200000,"assets/imagen-heladera.jpeg");
 const Cocina=new Producto("Cocina","Electrodomesticos",400000,"assets/imagen-heladera.jpeg");
 const Microondas=new Producto("Microondas","Electrodomesticos",300000,"assets/imagen-heladera.jpeg");
 const AireAcondicionado=new Producto("AireAcondicionado","Electrodomesticos",1500000,"assets/imagen-heladera.jpeg");
 const Lavarropas=new Producto("Lavarropas","Electrodomesticos",800000,"assets/imagen-heladera.jpeg");

 //Arrays de Productos para el Hogar

const productoshogar=[Sillon,Colchon,Mesa,Estanteria,Escritorio];

//Array de productos Electrodomesticos

const productoselectrodomesticos=[Heladera,Cocina,Microondas,AireAcondicionado,Lavarropas];

///Constantes para agregar contenido.

const contenedorProductoshogar=document.querySelector("#productos-hogar");
const contenedorProductoselectrocomesticos=document.querySelector("#productos-electrodomesticos");
const carritoVacio=document.querySelector("#carrito-vacio");
const carritoProductos=document.querySelector("#carrito-productos");
const carritoTotal=document.querySelector("#carrito-total");

///Funcion para crear contenido y agregarlo a las constantes-contenedores del tipo hogar.

productoshogar.forEach((producto)=>{
  const div=document.createElement("div");
  div.classList.add("container", "card" ,"col-6", "col-md-3", "col-sm-5", "col-lg-2", "row", "m-4", "text-center");
  div.innerHTML=`
  <div class="container-fluid text-center overflow-hidden py-4">
  <img class="img-product" src="${producto.img}"  alt="antiparras">
</div>
  <div class="card-body container-fluid","my-2" ,"mx-0">
    <h5 class="card-title text-center">${producto.nombre}</h5>
    <p class="card-text text-center">${producto.categoria}</p>
</div>`;
contenedorProductoshogar.append(div);

const btn=document.createElement("button");
btn.classList.add("btn-container" ,"btn-3","my-2" ,"mx-0");
btn.innerHTML=`<span>Agregar al carrito</span>`;

div.append(btn);

btn.addEventListener("click",() =>{
  agregarAlCarrito(producto);
 console.log(carrito);
})
})

///Funcion para crear contenido y agregarlo a las constantes-contenedores del tipo electrodomestico.

productoselectrodomesticos.forEach((producto)=>{
  const div=document.createElement("div");
  div.classList.add("container", "card" ,"col-6", "col-md-3", "col-sm-5", "col-lg-2", "row", "m-4", "text-center");
  div.innerHTML=`
  <div class="container-fluid text-center overflow-hidden py-4 d-flex justify-content-center aling-items-center">
  <img class="img-product" src="${producto.img}"  alt="antiparras">
</div>
  <div class="card-body container-fluid","my-2" ,"mx-0">
    <h5 class="card-title text-center">${producto.nombre}</h5>
    <p class="card-text text-center">${producto.categoria}</p>
    <span>$${producto.precio}</span>
</div>`;
contenedorProductoselectrocomesticos.append(div);

const btn=document.createElement("button");
btn.classList.add("btn-container" ,"btn-3","my-2" ,"mx-0");
btn.innerHTML=`<span>Agregar al carrito</span>`;

btn.addEventListener("click",() =>{
  agregarAlCarrito(producto);
console.log(carrito);

})

div.append(btn);
}
);



///Función de agregar al carrito.
















// ///Función finalizar compra

// function finalizarCompra(){
//   comprafinalizada=prompt("El total a pagar de su compra es : $"+totalApagar+" Para finalizar la compra escriba OK").toLowerCase()
//   if (comprafinalizada==="ok"){
//     alert("Muchas gracias por su compra!!!")
//     carrito.length=0;
//     ventas()
//  }
//  else{
//   carrito.length=0;
//    ventas()
//  }
// }

// ///Función pago con descuento.

// function pagoConDescuento (){
//   const pagoConDebito=total*descuento;
//   totalApagar=total-pagoConDebito;
//   console.log("Precio con descuento del 20% = $"+totalApagar);
//   finalizarCompra();
// }

// ///Función pago con credito.

// function pagoConCredito (){
//   const cantidadDeCuotas=prompt("Elija la cantidad de cuotas en las que desea realizar la compra")
//            console.log("Cantidad de cuotas elegidas = "+Number(cantidadDeCuotas))
//            total=carrito.reduce((acumulado,producto)=>acumulado+producto.precio,0);
//           const totalDelRecargo=Number(cantidadDeCuotas)*credito;
//           console.log("El total del recargo con tarjeta de credito es de = %"+totalDelRecargo)
//           const totalConCredito=total*totalDelRecargo;
//           const totalMasRecargo=totalConCredito/100;
//           console.log("El valor en $ del total del recargo es de = $"+totalMasRecargo);
//           totalApagar=total+totalMasRecargo;
//           console.log("El total en $ a pagar más el recargo es de = $"+totalApagar);
//           totalXcuota=totalApagar/cantidadDeCuotas;
//           console.log("El valor en $ de cada cuota es de = $"+totalXcuota)
//           finalizarCompra();      
//           }


// // Funcion constructora



//  //variables y constantes



//  let articuloSelecionado;

//  let tipodeproducto="";

//  let formadepago;

//  let totalApagar;

//  let total;

//  let descuento=0.20;

//  let credito=7;

//  let comprafinalizada;

// ///Inicio de función

//  function ventas(){

// ///Inicia con una pregunta al usuario

// do{
//   tipodeproducto=prompt("¿que tipo de productos desea ver?. Para ver los productos de la linea HOGAR escriba h, para ver los productos de la linea ELECTRODOMESTICOS escriba E").toLowerCase()

// ///El cual elige entre dos tipos de arrays para interactuar

//   if (tipodeproducto==="h") {
//     productoshogar.forEach((productohogar)=>{
//     console.log(productohogar)}
//     )
    
  

// ///El usuario podra elegir uno o varios productos y pushearlos al array carrito para luego realizar una compra.

//    do{
//       articuloSelecionado=prompt("Elija algunos de los articulos para agregar al carrito debe utilizar los numeros del 0 al 4. Siendo el primer producto el 0. Para finalizar escriba SALIR").toLocaleLowerCase()
//       if(articuloSelecionado!="salir"){
//               if(Number(articuloSelecionado) >= 0 && articuloSelecionado < productoshogar.length){
//                 let articuloagregado = productoshogar[articuloSelecionado];
//                 console.log("Has agregado un articulo a tu carrito de compras :"+articuloagregado.nombre);
//                 carrito.push(articuloagregado)
//                 carrito.forEach((productodecarrito)=>{
//                 console.log(productodecarrito)
//                 })
//               }
//       }
//       if(articuloSelecionado==="salir"){
//            total=carrito.reduce((acumulado,producto)=>acumulado+producto.precio,0);
//           console.log("El total a pagar es $"+total)
//       }
//     }
//     ///En este "while" acontinuación no pude lograr que evite que el usuario deje el prompt vacio. A pesar de que se lo estoy pidiendo. Tengo la sospecha que el problema es el if de arriba que combierte la variable articuloagregado a number, que imagino que se interpreta como un numero vacio, entonces el while no lo llega a analizar antes que el if, ya que javascript funciona en cascada. No lo eh podido arreglar. ya que si modifico el if, no puedo pushear el articulo al array. Si encuentra alguna solución me seria de mucha ayuda.

//           while(articuloSelecionado===""||Number(articuloSelecionado)<=5)
  
// ///En esta sección inicia el proceso de metodo de pago. El cual podra elegir entre credito y debito. Hal finalizar el proceso de pago, se reiniciara la función y el array carrito se vaciará.

//           do{
//           formadepago=prompt("¿De que manera desea pagar?. Si desea pagar con debito se le realizara un descuento del 20% del total, en cambio si desea pagar con tarjeta de credito tendra un recargo de 7% por cuota hasta un maximo de 12 cuotas. Escriba D para DEBITO y C para CREDITO").toLowerCase()
//           if(formadepago==="d"){
//             pagoConDescuento();
//           }
//           if(formadepago==="c"){
//            pagoConCredito();
//         }
      
         
//       }
//       while(formadepago!=="d"||formadepago!=="c"||formadepago!==""||Number(formadepago))
//     }

// ///A partir de aqui el proceso es el mismo, solo que ahora se utiliza el segundo Array.

// if (tipodeproducto==="e") {
//   productoselectrodomesticos.forEach((productoelectrodomestico)=>{
//   console.log(productoelectrodomestico)}
//   )

  
  
//   do{
//     articuloSelecionado=prompt("Elija algunos de los articulos para agregar al carrito debe utilizar los numeros del 0 al 4. Siendo el primer producto el 0. Para finalizar escriba SALIR").toLocaleLowerCase()
//     if(articuloSelecionado!="salir"){
//             if(Number(articuloSelecionado) >= 0 && articuloSelecionado < productoselectrodomesticos.length){
//               let articuloagregado = productoselectrodomesticos[articuloSelecionado];
//               console.log("Has agregado un articulo a tu carrito de compras :"+articuloagregado.nombre);
//               carrito.push(articuloagregado)
//               carrito.forEach((productodecarrito)=>{
//               console.log(productodecarrito)
//               })
//             }
//     }
//     if(articuloSelecionado==="salir"){
//          total=carrito.reduce((acumulado,producto)=>acumulado+producto.precio,0);
//         console.log("El total a pagar es $"+total)
//     }
//   }

//   while(articuloSelecionado===""|| Number(articuloSelecionado))


//         do{
//         formadepago=prompt("¿De que manera desea pagar?. Si desea pagar con debito se le realizara un descuento del 20% del total, en cambio si desea pagar con tarjeta de credito tendra un recargo de 7% por cuota hasta un maximo de 12 cuotas. Escriba D para DEBITO y C para CREDITO").toLowerCase()
//         if(formadepago==="d"){
//           pagoConDescuento();
//         }
//         if(formadepago==="c"){
//           pagoConCredito();
//         }
//       } 
//       while(formadepago!=="d"||formadepago!=="c" ||formadepago!==""||Number(formadepago))  
//     }
//   }while(tipodeproducto!=="h"||tipodeproducto!=="e"||Number(tipodeproducto) || tipodeproducto!=="")
// } 

     
      
    
 
// ventas()