import {types} from '../types/types'
import {firebase, googleAuthProvider} from '../firebase/firebase-config'


export const startLoginEmailPassword = (email,password)=>{
    return (dispatch)=>{

        setTimeout(() => {
            dispatch(login(123,'Pedro'));
        }, 3500);
    }
}

export const startRegisterWhitEmailPasswordName=(email,password,name)=>{
    return(dispach)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then(async({user}) =>{
           await user.updateProfile({displayName:name});
            console.log(user)
            // dispach(
            //     login(user.uid,user.displayName)
            // )
        });
    }
}


export const startGoogleLogin=()=>{
    return (dispach)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) =>{
            dispach(
                login(user.uid,user.displayName)
            )
        });
    }
}

export const login = (uid,displayName)=>{
    return{
        type:types.login,
        payload:{
            uid,
            displayName
        }
    }
}