
///Función finalizar compra

function finalizarCompra(){
  comprafinalizada=prompt("El total a pagar de su compra es : $"+totalApagar+" Para finalizar la compra escriba OK").toLowerCase()
  if (comprafinalizada==="ok"){
    alert("Muchas gracias por su compra!!!")
    carrito.length=0;
    ventas()
 }
 else{
  carrito.length=0;
   ventas()
 }
}

///Función pago con descuento.

function pagoConDescuento (){
  const pagoConDebito=total*descuento;
  totalApagar=total-pagoConDebito;
  console.log("Precio con descuento del 20% = $"+totalApagar);
  finalizarCompra();
}

///Función pago con credito.

function pagoConCredito (){
  const cantidadDeCuotas=prompt("Elija la cantidad de cuotas en las que desea realizar la compra")
           console.log("Cantidad de cuotas elegidas = "+Number(cantidadDeCuotas))
           total=carrito.reduce((acumulado,producto)=>acumulado+producto.precio,0);
          const totalDelRecargo=Number(cantidadDeCuotas)*credito;
          console.log("El total del recargo con tarjeta de credito es de = %"+totalDelRecargo)
          const totalConCredito=total*totalDelRecargo;
          const totalMasRecargo=totalConCredito/100;
          console.log("El valor en $ del total del recargo es de = $"+totalMasRecargo);
          totalApagar=total+totalMasRecargo;
          console.log("El total en $ a pagar más el recargo es de = $"+totalApagar);
          totalXcuota=totalApagar/cantidadDeCuotas;
          console.log("El valor en $ de cada cuota es de = $"+totalXcuota)
          finalizarCompra();      
          }


// Funcion constructora

class Producto {

  constructor(nombre, categoria, precio) {
 
   this.nombre = nombre;
 
   this.categoria = categoria;
 
   this.precio = precio;
 
  }
 
} 
 
///Objetos creados con función constructora.

///Objetos de Hogar.

 const Sillon=new Producto("Sillon","Hogar",200000);
 const Colchon=new Producto("Colchon","Hogar",100000);
 const Mesa=new Producto("Mesa","Hogar",100000);
 const Estanteria=new Producto("Estanteria","Hogar",80000);
 const Escritorio=new Producto("Escritorio","Hogar",50000);

///Objetos de Electrodomesticos.

 const Heladera=new Producto("Heladera","Electrodomesticos",1200000);
 const Cocina=new Producto("Cocina","Electrodomesticos",400000);
 const Microondas=new Producto("Microondas","Electrodomesticos",300000);
 const AireAcondicionado=new Producto("AireAcondicionado","Electrodomesticos",1500000);
 const Lavarropas=new Producto("Lavarropas","Electrodomesticos",800000);

 //Arrays de Productos para el Hogar

const productoshogar=[Sillon,Colchon,Mesa,Estanteria,Escritorio];

//Array de productos Electrodomesticos

const productoselectrodomesticos=[Heladera,Cocina,Microondas,AireAcondicionado,Lavarropas];

//carrito

 const carrito=[]
 //variables y constantes



 let articuloSelecionado;

 let tipodeproducto="";

 let formadepago;

 let totalApagar;

 let total;

 let descuento=0.20;

 let credito=7;

 let comprafinalizada;

///Inicio de función

 function ventas(){

///Inicia con una pregunta al usuario

do{
  tipodeproducto=prompt("¿que tipo de productos desea ver?. Para ver los productos de la linea HOGAR escriba h, para ver los productos de la linea ELECTRODOMESTICOS escriba E").toLowerCase()

///El cual elige entre dos tipos de arrays para interactuar

  if (tipodeproducto==="h") {
    productoshogar.forEach((productohogar)=>{
    console.log(productohogar)}
    )
    
  

///El usuario podra elegir uno o varios productos y pushearlos al array carrito para luego realizar una compra.

   do{
      articuloSelecionado=prompt("Elija algunos de los articulos para agregar al carrito debe utilizar los numeros del 0 al 4. Siendo el primer producto el 0. Para finalizar escriba SALIR").toLocaleLowerCase()
      if(articuloSelecionado!="salir"){
              if(Number(articuloSelecionado) >= 0 && articuloSelecionado < productoshogar.length){
                let articuloagregado = productoshogar[articuloSelecionado];
                console.log("Has agregado un articulo a tu carrito de compras :"+articuloagregado.nombre);
                carrito.push(articuloagregado)
                carrito.forEach((productodecarrito)=>{
                console.log(productodecarrito)
                })
              }
      }
      if(articuloSelecionado==="salir"){
           total=carrito.reduce((acumulado,producto)=>acumulado+producto.precio,0);
          console.log("El total a pagar es $"+total)
      }
    }
    ///En este "while" acontinuación no pude lograr que evite que el usuario deje el prompt vacio. A pesar de que se lo estoy pidiendo. Tengo la sospecha que el problema es el if de arriba que combierte la variable articuloagregado a number, que imagino que se interpreta como un numero vacio, entonces el while no lo llega a analizar antes que el if, ya que javascript funciona en cascada. No lo eh podido arreglar. ya que si modifico el if, no puedo pushear el articulo al array. Si encuentra alguna solución me seria de mucha ayuda.

          while(articuloSelecionado===""||Number(articuloSelecionado)<=5)
  
///En esta sección inicia el proceso de metodo de pago. El cual podra elegir entre credito y debito. Hal finalizar el proceso de pago, se reiniciara la función y el array carrito se vaciará.

          do{
          formadepago=prompt("¿De que manera desea pagar?. Si desea pagar con debito se le realizara un descuento del 20% del total, en cambio si desea pagar con tarjeta de credito tendra un recargo de 7% por cuota hasta un maximo de 12 cuotas. Escriba D para DEBITO y C para CREDITO").toLowerCase()
          if(formadepago==="d"){
            pagoConDescuento();
          }
          if(formadepago==="c"){
           pagoConCredito();
        }
      
         
      }
      while(formadepago!=="d"||formadepago!=="c"||formadepago!==""||Number(formadepago))
    }

///A partir de aqui el proceso es el mismo, solo que ahora se utiliza el segundo Array.

if (tipodeproducto==="e") {
  productoselectrodomesticos.forEach((productoelectrodomestico)=>{
  console.log(productoelectrodomestico)}
  )

  
  
  do{
    articuloSelecionado=prompt("Elija algunos de los articulos para agregar al carrito debe utilizar los numeros del 0 al 4. Siendo el primer producto el 0. Para finalizar escriba SALIR").toLocaleLowerCase()
    if(articuloSelecionado!="salir"){
            if(Number(articuloSelecionado) >= 0 && articuloSelecionado < productoselectrodomesticos.length){
              let articuloagregado = productoselectrodomesticos[articuloSelecionado];
              console.log("Has agregado un articulo a tu carrito de compras :"+articuloagregado.nombre);
              carrito.push(articuloagregado)
              carrito.forEach((productodecarrito)=>{
              console.log(productodecarrito)
              })
            }
    }
    if(articuloSelecionado==="salir"){
         total=carrito.reduce((acumulado,producto)=>acumulado+producto.precio,0);
        console.log("El total a pagar es $"+total)
    }
  }

  while(articuloSelecionado===""|| Number(articuloSelecionado))


        do{
        formadepago=prompt("¿De que manera desea pagar?. Si desea pagar con debito se le realizara un descuento del 20% del total, en cambio si desea pagar con tarjeta de credito tendra un recargo de 7% por cuota hasta un maximo de 12 cuotas. Escriba D para DEBITO y C para CREDITO").toLowerCase()
        if(formadepago==="d"){
          pagoConDescuento();
        }
        if(formadepago==="c"){
          pagoConCredito();
        }
      } 
      while(formadepago!=="d"||formadepago!=="c" ||formadepago!==""||Number(formadepago))  
    }
  }while(tipodeproducto!=="h"||tipodeproducto!=="e"||Number(tipodeproducto) || tipodeproducto!=="")
} 

     
      
    
 
ventas()