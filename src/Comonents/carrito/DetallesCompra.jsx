"use client"

import { getCursosId } from "@/store/reducer/addPagos/agregarPago";
import Link from "next/link";
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { UseLocalStorage } from "./UseLocalStorage";
// revirt
function DetallesCompra() {
   let dispacth = useDispatch()
  const [producto, setProducto] = useState(
    JSON.parse(window.localStorage.getItem("producto") || [] )
  )

  let [pCheckauyt, sePckeckaut] = UseLocalStorage("pCheckaut", [])

  let sumaPrice = producto.reduce((total, producto) => total + producto.precio, 0 );
  console.log(sumaPrice);
  let idp = producto.map(p => p.id)
  
  useEffect(() => {

  }, [producto])

  return (
    
          <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-gray-100">

              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>USD {sumaPrice} </dd>
              </div>
            </dl>

            <div className="flex justify-end">
             
            </div>

            <div className="flex justify-end  " >
             <Link href="/checkaut" onClick={() => sePckeckaut(producto) } className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600" >
             Checkout
             </Link>
            </div>
          </div>
        </div>
    
  )
}

export default DetallesCompra