import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './favoritos.module.scss'
function Favoritos(){
    
    const [filmesFavoritos, setFilmesFavoritos] = useState([]);

    useEffect(() => {
        const listaFilmes = localStorage.getItem('filmes');
        setFilmesFavoritos(JSON.parse(listaFilmes));
        console.log(listaFilmes || []) ; 
    }, [])

    function handleDelete(id){
        let listaFiltrada = filmesFavoritos.filter(item => {
            toast.success("Filme retirado dos favoritos com sucesso!")
            return(item.id !== id);
            
        })

        setFilmesFavoritos(listaFiltrada);
        localStorage.setItem('filmes', JSON.stringify(listaFiltrada));
    }



    return(
        <div className={styles.conteudo}>
            <h3 className={styles.titulo}>Meus favoritos</h3>
            {filmesFavoritos.length === 0 && <span>Você nao possui nenhum filme salvo :( </span>}
            <ul className={styles.filmes}>
                {filmesFavoritos.map(item => {
                    return(

                        <li className={styles.filme} key={item.id}>
                            <span className={styles.nome}>{item.nome}</span>
                            <img src={item.foto} className={styles.cover}></img>
                            <div className={styles.divbotoes}>
                                <button className={styles.botao}><Link to={`/filme/${item.id}`}> Ver Detalhes</Link></button>
                                <button className={styles.botao} onClick={() => {handleDelete(item.id)}}>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favoritos;