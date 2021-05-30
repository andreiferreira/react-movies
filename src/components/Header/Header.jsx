import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

function Header(){
    return(
        <header>
            <Link className={styles.logo} to='/'>Filmaria</Link>
            <Link className={styles.saves} to='/favoritos'>Salvos</Link>
        </header>
    );
}

export default Header;