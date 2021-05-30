import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import styles from './home.module.scss';


function Home() {
    
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
         async function loadApi(){
            const response = await api.get('r-api/?api=filmes');
            setFilmes(response.data);
        }

        loadApi();

    }, [])

    return(
        <div>
            <div className={styles.container}>
                {filmes.map(filme => {
                    return(
                        <article key={filme.id}>
                            <h3>{filme.nome}</h3>
                            <img className={styles.cover} src={filme.foto} alt={filme.nome}></img>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;