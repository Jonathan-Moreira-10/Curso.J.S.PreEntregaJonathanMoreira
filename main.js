
 //productos
    let heladera = 1200000;
    let cocina = 600000;
    let descuento = 20;
    let productoelegido
    let cantidaddecuotas
    let interes=cantidaddecuotas*7
    let cuota
    let totalapagarcredito
    let totalapagarcuotas
    let debito
    let totalapagardebito
    let pago;
    

function ventadeelectrodomosticos(){

    //inicio
    let nombre;
    do{
        nombre=prompt("bienvenido al emporio de los electrodomesticos!!. ¿Como se llama?").toLowerCase()
        if(nombre===""|| Number(nombre)){
            alert("porfavor escriba su nombre")
        }
    }
    while(nombre===""|| Number(nombre))
    console.log(nombre)

console.log("heladera = $"+heladera);
console.log("cocina = $"+cocina);

///carrito

let carrito;
do{
    carrito=prompt("Escriba el nombre del articulo que desea comprar").toLowerCase()
   if
    (carrito===""|| Number(carrito)|| carrito!=="heladera"  && carrito!=="cocina"){
        alert("Porfavor escriba el nombre del producto")
    }
   
}

while(carrito===""|| Number(carrito)|| carrito!=="heladera" && carrito!=="cocina")

if(carrito==="heladera"){


console.log("Producto elegido = "+carrito)
     productoelegido = prompt("¿desea pagar con credito o debito?. Recuerde que con Debito tentdra un 20% de descuento, en caso de que elija credito, tenemos hasta 12 cuotas, pero estas tienen interes. Utilize D para debito y C para credito").toLowerCase()
    
//pago con credito
if(productoelegido==="c"){
   cantidaddecuotas=Number(prompt("¿en cuantas cuotas desea realizar la compra?"))
   console.log("Cantidad de cuotas elegidas = "+cantidaddecuotas)
     interes=cantidaddecuotas*7
    console.log("El interes total es de = "+interes+"%")
    cuota=heladera*interes/100
    console.log("Interes total en monto pesos = $"+cuota)
    totalapagarcredito=heladera+cuota
    console.log("Total más intereses = $"+totalapagarcredito)
    totalapagarcuotas=parseInt(totalapagarcredito/cantidaddecuotas)
    console.log("Total a pagar en x cuotas = $"+totalapagarcuotas)

    pago = prompt("el total a pagar de tu compra por cuota es =$" +totalapagarcuotas +" .Para finalizar la compra escriba ok para continuar").toLowerCase()

    if(pago==="ok"){
      alert("La transacción se a realizado con exito")
          ventadeelectrodomosticos()
      }
      else(pago!=="ok") ; {
          alert("Porfavor inicie el proceso de selección nuevamente")
      }
} 

///pago con debito heladera

    if(productoelegido==="d"){

      debito=heladera*descuento/100

      totalapagardebito=heladera-debito

      console.log("Descuento por compra con tarjeta de debito = $"+debito)

      console.log("Total a pagar = $"+totalapagardebito)

       pago = prompt("el total a pagar de tu compra es =$" +totalapagardebito +" .Para finalizar la compra escriba ok para continuar").toLowerCase()

      if(pago==="ok"){
        alert("La transacción se a realizado con exito")
            ventadeelectrodomosticos()
        }
        else(pago!=="ok") ; {
            alert("Porfavor inicie el proceso de selección nuevamente")
        }
      }
    
    
    }
    ///compra de cocina
    if(carrito==="cocina"){


        console.log("Producto elegido = "+carrito)
             productoelegido = prompt("¿desea pagar con credito o debito?. Recuerde que con Debito tentdra un 20% de descuento, en caso de que elija credito, tenemos hasta 12 cuotas, pero estas tienen interes. Utilize D para debito y C para credito").toLowerCase()
            
        //pago con credito
        if(productoelegido==="c"){
           cantidaddecuotas=Number(prompt("¿en cuantas cuotas desea realizar la compra?"))
           console.log("Cantidad de cuotas elegidas = "+cantidaddecuotas)
             interes=cantidaddecuotas*7
            console.log("El interes total es de = "+interes+"%")
            cuota=heladera*interes/100
            console.log("Interes total en monto pesos = $"+cuota)
            totalapagarcredito=cocina+cuota
            console.log("Total más intereses = $"+totalapagarcredito)
            totalapagarcuotas=parseInt(totalapagarcredito/cantidaddecuotas)
            console.log("Total a pagar en x cuotas = $"+totalapagarcuotas)
        
            pago = prompt("el total a pagar de tu compra por cuota es =$" +totalapagarcuotas +" .Para finalizar la compra escriba ok para continuar").toLowerCase()
        
            if(pago==="ok"){
              alert("La transacción se a realizado con exito")
                  ventadeelectrodomosticos()
              }
              else(pago!=="ok") ; {
                  alert("Porfavor inicie el proceso de selección nuevamente")
              }
        } 
        
        ///pago con debito cocina
        
            if(productoelegido==="d"){
        
              debito=cocina*descuento/100
        
              totalapagardebito=cocina-debito
        
              console.log("Descuento por compra con tarjeta de debito = $"+debito)
        
              console.log("Total a pagar = $"+totalapagardebito)
        
               pago = prompt("el total a pagar de tu compra es =$" +totalapagardebito +" .Para finalizar la compra escriba ok para continuar").toLowerCase()
        
              if(pago==="ok"){
                alert("La transacción se a realizado con exito")
                    ventadeelectrodomosticos()
                }
                else(pago!=="ok") ; {
                    alert("Porfavor inicie el proceso de selección nuevamente")
                }
              }
            
            
            }
    
}
ventadeelectrodomosticos()