
 //productos Arrays

 // Productos Hogar
 const productoshogar=[
    {
        nombre:"sillon",
        categoria:"hogar",
        precio:200000,
    },
    {
        nombre:"colchon",
        categoria:"hogar",
        precio:100000,
    },
   {
        nombre:"mesa",
        categoria:"hogar",
        precio:100000,
    },
    {
        nombre:"estanteria",
        categoria:"hogar",
        precio:80000,
    },
    {
        nombre:"escritorio",
        categoria:"hogar",
        precio:50000,
    },

 ]

 //Productos electrodomesticos

 const productoselectrodomesticos=[

   {
        nombre:"heladera",
        categoria:"electrodomesticos",
        precio:1200000
    },
   {
        nombre:"cocina",
        categoria:"electrodomesticos",
        precio:400000
    },
    {
        nombre:"microondas",
        categoria:"electrodomesticos",
        precio:300000
    },
    {
        nombre:"aireacondicionado",
        categoria:"electrodomesticos",
        precio:1500000
    },
    {
        nombre:"lavarropas",
        categoria:"electrodomesticos",
        precio:800000
    },
 ]
do{
  const tipodeproducto=prompt("¿que tipo de productos desea ver?. Para ver los productos de la linea HOGAR escriba h, para ver los productos de la linea ELECTRODOMESTICOS escriba E").toLowerCase()

//   if(tipodeproducto==="" || Number(tipodeproducto) || tipodeproducto!="h" || tipodeproducto!="e"){
//     alert("porfavor eliga el tipo de producto que desea ver")
//   }
  if (tipodeproducto==="h") {
    productoshogar.forEach((productohogar)=>{
    console.log(productohogar)}
    )
  }
  if (tipodeproducto==="e") {
    productoselectrodomesticos.forEach((productoelectrodomestico)=>{
    console.log(productoelectrodomestico)}
    )
  }
}
while(tipodeproducto==="" || Number(tipodeproducto) || tipodeproducto!=="h" || tipodeproducto!=="e")
 /// carrito

 ///


