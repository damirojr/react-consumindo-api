import React from "react";
import { useEffect, useState } from "react";
import server from "../services/server";

export default function Post(){

    const [dados, setDados] = useState({
        nome: "",
        marca: "",
        km: ""
    })

    function submit(e){
        server
            .post('/add')
            .then((response) => {
                setDados(response.data)
                console.log(response, "dados do post")
            })
            .catch((err) => {
                console.error("erro:")
            })


    }
    
    function handle(e){
        const valor = (e.target.value);
        setDados(valor);
        console.log(valor, "valor Handle")
    }
    return (
        <div className="formulario">
            <form onSubmit={(e) =>{
                debugger;
                submit(e)
                console.log(e.target.value)}}>
                <input onChange={handle} value={dados.nome} placeholder="nome" type="text"></input>
                <input onChange={handle} value={dados.marca} placeholder="marca" type="text"></input>
                <input onChange={handle} value={dados.km} placeholder="km" type="number"></input>
                <button>Submit</button>
            </form>
        </div>
        )
    }