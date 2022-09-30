import React from "react";
import { StyledTitle} from "../../styles/modules/headings";
import { StyledButton } from "../../styles/modules/button";
import styles from './index.module.css'
import '../../styles/modules/globalStyle.css'

 function Header({HandleFilter,setFilter,filter}){
    return(
        <header className={styles.mainHeader}>
            <StyledTitle fontSize='one'>Burguer <small>Kenzie</small> </StyledTitle>
                <form className={styles.mainSpan} onSubmit={(event) => {
                    event.preventDefault()
                    HandleFilter(event.target.filterInput.value)
                }}>
                    <input name="filterInput" type="text" placeholder="Digitar Pesquisa"/>
                    <StyledButton type="submit" Button='inputButton'>Pesquisar</StyledButton>
                </form>
        </header>
    )
}

export default Header