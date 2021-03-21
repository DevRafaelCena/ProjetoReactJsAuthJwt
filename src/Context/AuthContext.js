import React,{createContext,useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom'

import api from './api'
import history from '../history'

const Context = createContext()
function AuthProvider({children}) {

    const [authenticated,setAuthenticated] = useState(false)
    //loading informando que esta procurando a autenticação
        var [loading,setLoading] =  useState(true);

    useEffect(()=>{ //carregar sempre o token apos autenticar
        const token = localStorage.getItem('token')

        if(token){
            api.defaults.headers.Authozation = "Bearer " + JSON.parse(token)
            setAuthenticated(true)
        }

        setLoading(false)

    },[])


    async function handleLogin(){
        let busca = '' 
        await api.post('/authentication',{username:"adqqm", password:"123"}).then((response)=>{
            console.log(response.data)
            busca= response.data           
        }).catch((error)=> {
            console.log(error.response)
        })      

        if(busca.token){
            localStorage.setItem('token',JSON.stringify(busca.token))
            api.defaults.headers.authorization = "Bearer " + busca.token
            setAuthenticated(true)
             history.push('/Dashboard')

        }else{
            setAuthenticated(false)
           console.log("Login não efetuado")
        }

        
     //return <Redirect to="/dashboard"/>
        

        //console.log("Login: "+ authenticated) 
    }

    async function handleLogout(){
        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authozation = undefined        
        history.push('/login')     
    }

    return(
        <Context.Provider value={{loading,authenticated,handleLogin,handleLogout}}>
            {children}
        </Context.Provider>
    )

}

export {Context,AuthProvider}