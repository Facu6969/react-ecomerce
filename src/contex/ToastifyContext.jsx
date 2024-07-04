import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import React, { createContext, useContext } from 'react';

const ToastifyContext = createContext();

export const useToast = () => useContext(ToastifyContext);

const ToastProvider = ({ children }) => {
    const showToast = ({ 
      text, 
      duration = 3000, 
      close = true, 
      gravity = "top", 
      position = "right", 
      backgroundColor = "linear-gradient(to right, #00b09b, #96c93d)" 
    }) => {
      Toastify({
        text,
        duration,
        close,
        gravity,
        position,
        backgroundColor,
        stopOnFocus: true,
      }).showToast();
    };
  
    return (
      <ToastifyContext.Provider value={{ showToast }}>
        {children}
      </ToastifyContext.Provider>
    );
  };
  
  export default ToastProvider;
