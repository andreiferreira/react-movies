import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import api from '../../services/api';
import styles from './filme.module.scss';

function Filme(){

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        async function getFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length === 0){
                history.replace('/');
                return; 
            }
            setFilme(response.data);
            setLoading(false); 
        }

        getFilme();

        return() => {
            console.log('componente desmontado');
        }

    }, [id, history])

    function salvar(){
        const minhaLista = localStorage.getItem('filmes');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme){
            alert('Você já salvou este filme');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        alert('Filme salvo com sucesso!')
    }

    if(loading){
        return(
            <h1>Carregando</h1>
        );
    }

    return(
        <div>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.foto}></img>

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div>
                <button onClick={salvar}>SALVAR</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} trailer`}>
                    TRAILER
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Filme;