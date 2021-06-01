import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify'
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
            toast.warning("Este filme já foi favoritado!")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme favoritado com sucesso!')
    }

    if(loading){
        return(
            <h1>Carregando</h1>
        );
    }

    return(
        <div className={styles.conteudo}>
            <h1 className={styles.titulo}>{filme.nome}</h1>
            <img className={styles.cover} src={filme.foto} alt={filme.foto}></img>

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className={styles.botoes}>
                <button className={styles.botao} onClick={salvar}>SALVAR</button>
                <button className={styles.botao}>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} trailer`}>
                    TRAILER
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Filme;