// import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
// import { auth } from "../firebase/firebaseConfig";
// import { useState } from "react";
// import  toast  from "react-hot-toast";



// function useRegister() {
//     const [user,setUser] = useState(null);
//     const [error, setError] = useState(null);



//     const SigupWithPassword = (email,password, name , photo ) => {
//         console.log(email, password, name, photo);
//         createUserWithEmailAndPassword(auth, email, password )
//         .then(async(userCredential) => {
//             await updateProfile(auth.currentUser, {
//                 displayName: name,
//                 photoURL: photo,
//             })
//             const user = userCredential.user;
//             dispatch({type:"SIGN_IN", payload:user})
//             console.log(user);
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(error.message)
//             setError(error);

//         });

//     } 

//     return {SignupWithGoogle ,SigupWithPassword, user , error} 
// }

// export {useRegister}
