import React from "react";
import { useEffect, useState } from "react";
import server from "../services/server";

export default function Home(){

    const [carros, setCarros] = useState([]);

    useEffect(() => {
        server
            .get("/")
            .then((response) => {
                setCarros(response.data)
            })
            .catch((err) => {
                console.error("erro:" + err);
            });
    }, []);

    return (
        <section className="card">
        <h1>Consumindo API</h1>

            {carros.map((carro, key) => 
                
                <div className="card-car" key={key}> 
                    <p>{carro.nome}</p>
                    <p>{carro.marca}</p>
                    <p>{carro.km}</p>
                </div>            
        )}
        </section>)
}
