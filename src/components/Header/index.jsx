import React from "react";
import { StyledTitle} from "../../styles/modules/headings";
import { StyledButton } from "../../styles/modules/button";
import styles from './index.module.css'
import '../../styles/modules/globalStyle.css'

 function Header(){
    return(
        <header className={styles.mainHeader}>
            <StyledTitle fontSize='one'>Burguer <small>Kenzie</small> </StyledTitle>
            <span className={styles.mainSpan}>
                <input type="text" placeholder="Digitar Pesquisa"/>
                <StyledButton Button='inputButton'>Pesquisar</StyledButton>
                </span>
        </header>
    )
}

export default Header