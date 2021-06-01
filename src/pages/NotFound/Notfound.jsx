import React from 'react';
import { Link } from 'react-router-dom';
import styles from './notfound.module.scss'

function NotFound(){
    return(
        <div>
            <h1>PAGINA NÃO ENCONTRADA :( </h1>
            <Link to="/" className={styles.botao}>Veja todos os filmes</Link>
        </div>
    );
}

export default NotFound;