import { useState } from "react"
import { Formik, Form, Field, ErrorMessage,  } from "formik"
export default function Contraseña ()  {

    const [steps, setStep] = useState({
        stepsItems: ["Contraseña", "Nueva contraseña", "Confirma la nueva contraseña"],
        currentStep: 1
    })
    
 
    let [loading, setLoading] = useState(false)

    

    return (
        <div className=" px-4 md:px-0  ">
            <ul aria-label="Steps" className="items-center text-gray-600 font-medium md:flex gap-11">
                {steps.stepsItems.map((item, idx) => (
                    <li aria-current={steps.currentStep == idx + 1 ? "step" : false} className="flex-1 last:flex-none flex gap-x-2 md:items-center">
                        <div className="flex items-center flex-col gap-x-2">
                            <div className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${steps.currentStep > idx + 1 ? "bg-verde border-verde" : "" || steps.currentStep == idx + 1 ? "border-verde" : ""}`}>
                                <span className={` ${steps.currentStep > idx + 1 ? "hidden" : "" || steps.currentStep == idx + 1 ? "text-verde" : ""}`}>
                                    {idx + 1}
                                </span>
                                {
                                    steps.currentStep > idx + 1 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    ) : ""
                                }
                            </div>
                            <hr className={`h-12 border md:hidden ${idx + 1 == steps.stepsItems.length ? "hidden" : "" || steps.currentStep > idx + 1 ? "border-verde" : ""}`} />
                        </div>
                        <div className="h-8 flex items-center md:h-auto">
                            <h3 className={`text-sm ${steps.currentStep == idx + 1 ? "text-verde" : ""}`}>
                                {item}
                            </h3>
                        </div>
                        
                    </li>
                ))}
            </ul>
            
            <Formik 
            initialValues={{
                contraseña: "",
               
            }}
            
            validate={(valores) => {
                let errors = {}
             // validate password antigua
             if(valores.contraseña.length < 8) {
                errors.contraseña = "la contaseña debe contener almenos 8 caracteres"
             } else if(!valores.contraseña.match(/[a-zA-Z]/)){
                errors.contraseña = "la contaseña debe contener almenos una letra"
             } else if(!valores.contraseña.match((/[0-9]/))){
                errors.contraseña = "la contaseña debe contener almenos un numero"
             }

            //  // validate new pasword
            //  if(valores.nuevaContraseña.length < 8) {
            //     errors.nuevaContraseña = "la contaseña debe contener almenos 8 caracteres"
            //  } else if(!valores.nuevaContraseña.match(/[a-zA-Z]/)){
            //     errors.nuevaContraseña = "la contaseña debe contener almenos una letra"
            //  } else if(!valores.nuevaContraseña.match((/[0-9]/))){
            //     errors.nuevaContraseña = "la contaseña debe contener almenos un numero"
            //  }
                // validate new pasword confirmar
            //  if( valores.confirmarNuevaContraseña.length && valores.confirmarNuevaContraseña.length < 8) {
            //     errors.confirmarNuevaContraseña = "la contaseña debe contener almenos 8 caracteres"
            //  } else if(!valores.confirmarNuevaContraseña.match(/[a-zA-Z]/)){
            //     errors.confirmarNuevaContraseña = "la contaseña debe contener almenos una letra"
            //  } else if(!valores.confirmarNuevaContraseña.match((/[0-9]/))){
            //     errors.confirmarNuevaContraseña = "la contaseña debe contener almenos un numero"
            //  }
             return errors
            }}

            

            onSubmit={(valores, {resetForm}) => {
              
              setLoading(true)
              setTimeout(() => {
                setLoading(false)
                resetForm()
                setStep({
                    ...steps,
                    currentStep: steps.currentStep + 1
                })
              }, 5000)
            }}

            >
                {({errors}) => (
                    <Form>
                       {steps.currentStep === 1 ?  <div  className="mt-4 flex flex-col">
                <Field  type="password"  name="contraseña"   className="w-60 text-base mt-2 px-2 py-1 text-gray-100   outline-none bg-gray-500 focus:border-indigo-600 shadow-sm rounded-lg" />
               { <ErrorMessage name="contraseña" component={() => (
                 <span className=" text-white text-base ml-3">{errors.contraseña}</span>
               )} />   }
                 <button type="submit" className='w-28 relative mt-3 text-base  rounded-full   border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-black bg-blue-400  focus:bg-bg-blue-400'>
            {loading === true ?  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg> 
     : "confirmar" }
        </button>
              </div>: null}
             {steps.currentStep === 2 ?  <div   className="mt-4 flex flex-col">
                <Field  type="password" name="contraseña"  className="w-60 text-base mt-2 px-2 py-1 text-gray-100   outline-none bg-gray-500 focus:border-indigo-600 shadow-sm rounded-lg" />
                { <ErrorMessage name="contraseña" component={() => (
                 <span className=" text-red-700 text-base ml-3">{errors.contraseña}</span>
               )} />   }
                 <button type="submit" className='w-28 relative mt-3 text-base  rounded-full   border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-black bg-blue-400  focus:bg-bg-blue-400'>
            {loading === true ?  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg> 
     : "confirmar"}
        </button>
              </div>: null}
              { steps.currentStep === 3 ? <div   className="mt-4 flex flex-col">
                <Field  type="password" name="contraseña"  className="w-60 text-base mt-2 px-2 py-1 text-gray-100   outline-none bg-gray-500 focus:border-indigo-600 shadow-sm rounded-lg" />
                { <ErrorMessage name="contraseña" component={() => (
                 <span className=" text-red-700 text-base ml-3">{errors.contraseña}</span>
               )} />   }
                 <button type="submit" className='w-28 relative mt-3 text-base  rounded-full   border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-black bg-blue-400  focus:bg-bg-blue-400'>
            {loading === true ?  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg> 
     : "confirmar"}
        </button>
              </div>: null}
                    </Form>
                )}
            </Formik>
        
        </div>
    )
}