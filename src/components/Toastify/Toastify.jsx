import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
    const notify = () => {
        toast("Bienvenido Christian !", {
            position: toast.POSITION.TOP_CENTER
          });   
    };


  return (
    <div className="mt-20">
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </div>
  );
};

export default Toastify;
