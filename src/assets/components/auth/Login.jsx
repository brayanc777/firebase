import React from 'react'
import { useState } from 'react'
import { initDataBase } from '../../config/firebaseConfig'
import axios from 'axios'
import { collection } from 'firebase/firestore'
import { getDocs } from 'firebase/firestore'

const Login = () => {
    const [getEmail, setEmail] = useState("");
    const [getUser, setUser] = useState("");
    const [getPassword, setPassword] = useState("");


    async function consultarUsuarios() {
        let colectionUsuarios = collection(initDataBase, "usuarios");
        let resultado = await getDocs(colectionUsuarios)
        let infoUsuarios = resultado.docs
        console.log(colectionUsuarios)
        console.log(infoUsuarios.map((doc)=>({...doc.data()})))
    }
    consultarUsuarios()
    function buscarUsuario() {

        function iniciarSesion() {
            console.log(getEmail, getUser, getPassword)
        }

        return (
            <form>
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Correo" type="text" name='' id='' />
                <input onChange={(e) => setUser(e.target.value)} placeholder="User" type="text" name='' id='' />
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" type="text" name='' id='' />
                <input onClick={iniciarSesion} type="button" value={"Iniciar Sesion"} name='' id='' />
            </form>
        );
    };
}


export default Login