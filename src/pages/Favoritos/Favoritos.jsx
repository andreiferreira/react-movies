import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Favoritos(){
    
    const [filmesFavoritos, setFilmesFavoritos] = useState([]);

    useEffect(() => {
        const listaFilmes = localStorage.getItem('filmes');
        setFilmesFavoritos(JSON.parse(listaFilmes));
        console.log(listaFilmes || []) ; 
    }, [])

    function handleDelete(id){
        let listaFiltrada = filmesFavoritos.filter(item => {
            return(item.id !== id);
        })

        setFilmesFavoritos(listaFiltrada);
        localStorage.setItem('filmes', JSON.stringify(listaFiltrada));
    }



    return(
        <div>
            <ul>
                {filmesFavoritos.map(item => {
                    return(
                        <li key={item.id}>
                            <span>{item.nome}</span>
                            <div>
                                <Link to={`/filmes/${item.id}`}> Ver Detalhes</Link>
                                <button onClick={() => {handleDelete(item.id)}}>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favoritos;