import { Formik, Form, Field, ErrorMessage } from "formik"
import { useState } from "react"



function Create() {
  const [steps, setStep] = useState({
    stpesCount: [1, 2, 3, 4],
    currentStep: 1
})

function curent () {
   setStep({
    ...steps,
    currentStep: steps.currentStep + 1
   })
}

  return (
    <div className='w-full mt-20'>
       <div className="max-w-lg mx-auto px-4 sm:px-0">
            <ul aria-label="Steps" className="flex items-center">
                {steps.stpesCount.map((item, idx) => (
                    <li aria-current={steps.currentStep == idx + 1 ? "step" : false} className="flex-1 last:flex-none flex items-center">
                        <div className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${steps.currentStep > idx + 1 ? "bg-indigo-600 border-indigo-600" : "" || steps.currentStep == idx + 1 ? "border-indigo-600" : ""}`}>
                            <span className={`w-2.5 h-2.5 rounded-full bg-indigo-600 ${steps.currentStep != idx + 1 ? "hidden" : ""}`}></span>
                            {
                                steps.currentStep > idx + 1 ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                ) : ""
                            }
                        </div>
                        <hr className={`w-full border ${idx + 1 == steps.stpesCount.length ? "hidden" : "" || steps.currentStep > idx + 1 ? "border-indigo-600" : ""}`} />
                    </li>
                ))}
            </ul>
        </div>
     <div className="flex justify-center "> 
      <Formik>
        {() => (
          <Form className="columns-4 gap-5 flex flex-col mt-3">

            {/* nombre y titulo */}
           {steps.currentStep === 1 ?  <div className="columns-4 gap-5 flex flex-col mt-3">
            <div>
              <Field type="text" name="titulo" className="h-10 mt-1 rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder="Tu nombre de instructor" />
            </div>
            <div>
              <Field type="text" name="titulo" className="h-10 mt-1 rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder="Titulo del curso" />
            </div>
            <button  onClick={curent}  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                        Siguiente
                     </button>
            </div> : null}

             {/* descripcion  y precio */}

            {steps.currentStep === 2 ?  <div className="columns-4 gap-5 flex flex-col mt-3">
            <div>
              <Field as ="textarea" name="description" className="h-15 mt-1 rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder="agraga una descripcion" />
            </div>
            <div>
              <Field type="number" name="price" className="h-10 mt-1 rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder="Dale un precio a tu curso" />
            </div>
            <button onClick={curent}  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                        Siguiente
                     </button>
            </div> : null}

             {/* video  */}
            {steps.currentStep === 3 ?  <div className="columns-4 gap-5 flex flex-col mt-3">
            <div>
              <Field type="file" name="video" className="h-10 mt-1 rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder="sube un video" />
            </div>
            <div>
              <Field type="text" name="url" className="h-10 mt-1 rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder="O puedes copiar la url del video" />
            </div>
            <button onClick={curent}  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                        Siguiente
                     </button>
            </div> : null}

             {/* cactegoria y subcategoria */}
            {steps.currentStep === 4 ?  <div className="columns-4 gap-5 flex flex-col mt-3">
            <div>
              <label htmlFor="">Categorias</label>
              <Field as="select" name="categorias" className="h-10 mt-1 rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder="Tu nombre de instructor" >
                    <option value="">
                      option
                    </option>
                   </Field>
            </div>
            <div>
              <label htmlFor="">SubCategoria</label>
              <Field as="select" name="subcategorias" className="h-10 mt-1 rounded-lg placeholder-slate-400 text-sm px-3 py-2 focus:outline-none focus:border-verde bg-transparent
                   shadow-lg  focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 " placeholder="Titulo del curso" >
                    <option>
                      opcion 1
                    </option>
                   </Field>
            </div>
            <button  type="submit"  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                        Siguiente
                     </button>
            </div> : null}

            

          </Form>
        )}
      </Formik>
     </div>
    </div>
  )
}

export default Create