import React from 'react'
import { ToastContainer,toast } from 'react-toastify';
export const error = (errorMsg) => toast.error(errorMsg, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
});
export const success = (Msg) => toast.success(Msg, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
});

export const Toast = () => {
     
  return (
    <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
                limit={1}
            />

  )
}



// export const error = (errorMsg) => toast.error(errorMsg, {
//     position: "top-center",
//     autoClose: 2000,
//     hideProgressBar: true,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
// });
// export const success = (Msg) => toast.success(Msg, {
//     position: "top-center",
//     autoClose: 2000,
//     hideProgressBar: true,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
// });
