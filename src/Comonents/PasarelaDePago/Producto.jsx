import { useState } from "react";



function Producto() {
  if (typeof localStorage !== 'undefined') {
  var [producto, setProducto] = useState(
    JSON.parse(localStorage.getItem("producto") || [] )
  )
}
if (typeof localStorage !== 'undefined') {
  var [pCheckauyt, sePckeckaut] = useState(
    JSON.parse(localStorage.getItem("pCheckaut") || [] ))
}
if (typeof producto !== 'undefined') {
 var compra = producto.length  > 0 ? producto : pCheckauyt
}
 let compra =  pCheckauyt
 console.log(compra);
 if(typeof compra !== "undefined"){
 var sumaPrice = compra.reduce((total, producto) => total + producto.precio, 0 );
  console.log(sumaPrice);
 }
  return (
    <div className=" py-12 md:py-24">
    <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">

      <div>
        <p class="text-2xl font-medium tracking-tight text-white-900">
          {sumaPrice}
        </p>

        <p className="mt-1 text-sm text-slate-400">Total a pagar</p>
      </div>

      <div>
        <div className="flow-root">
          <ul className="-my-4 divide-y divide-gray-100">
           {compra&&compra.length ? compra.map( p => (
             <li className="flex items-center gap-4 py-4">
             <img
               src="https://i.pinimg.com/564x/32/9a/d8/329ad85f4ab2047cae13d582274f9270.jpg"
               alt=""
               className="h-16 w-16 rounded object-cover"
             />

             <div>
               <h3 class="text-sm text-white "> {p.titulo} </h3>

               <dl className="mt-0.5 space-y-px text-[10px] text-slate-500">
                 <div>
                   <dt className="inline mr-1">Creador:</dt>
                   <dd className="inline"> {p.instructor} </dd>
                 </div>

                 <div>
                   <dt class="inline mr-1">Precio</dt>
                   <dd class="inline"> {p.price} </dd>
                 </div>
               </dl>
             </div>
           </li>
           )): null}
          </ul>
        </div>
      </div>
    </div>
  </div>  )
}

export default Producto
