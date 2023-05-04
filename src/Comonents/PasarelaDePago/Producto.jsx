import React from 'react'

function Producto() {
  return (
    <div class=" py-12 md:py-24">
    <div class="mx-auto max-w-lg space-y-8 px-4 lg:px-8">

      <div>
        <p class="text-2xl font-medium tracking-tight text-white-900">
          $99.99
        </p>

        <p class="mt-1 text-sm text-slate-400">Total a pagar</p>
      </div>

      <div>
        <div class="flow-root">
          <ul class="-my-4 divide-y divide-gray-100">
            <li class="flex items-center gap-4 py-4">
              <img
                src="https://i.pinimg.com/564x/32/9a/d8/329ad85f4ab2047cae13d582274f9270.jpg"
                alt=""
                class="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 class="text-sm text-white ">Next js desde cero</h3>

                <dl class="mt-0.5 space-y-px text-[10px] text-slate-500">
                  <div>
                    <dt class="inline mr-1">Creador:</dt>
                    <dd class="inline">Thony</dd>
                  </div>

                  <div>
                    <dt class="inline mr-1">categoria:</dt>
                    <dd class="inline">Next js</dd>
                  </div>
                </dl>
              </div>
            </li>

            <li class="flex items-center gap-4 py-4">
              <img
                src="https://i.pinimg.com/564x/f5/b9/91/f5b9918f76b778e799b6aa54c270061e.jpg"
                alt=""
                class="h-16 w-16 rounded object-cover"
              />

<div>
                <h3 class="text-sm text-white ">React js desde cero</h3>

                <dl class="mt-0.5 space-y-px text-[10px] text-slate-500">
                  <div>
                    <dt class="inline mr-1">Creador:</dt>
                    <dd class="inline">Juan</dd>
                  </div>

                  <div>
                    <dt class="inline mr-1">categoria:</dt>
                    <dd class="inline">React js</dd>
                  </div>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>  )
}

export default Producto
