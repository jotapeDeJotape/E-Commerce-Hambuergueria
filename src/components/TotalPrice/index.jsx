import React from "react";
import { StyledTitle} from "../../styles/modules/headings";
import { StyledButton } from "../../styles/modules/button";
import styles from './index.module.css'
import '../../styles/modules/globalStyle.css'



function TotalPrice(){
    return(
        <>
            <div className={styles.divTotal}>
                <StyledTitle fontSize='four'>Total</StyledTitle>
                <StyledTitle fontSize='Caption'>R$ 14,00</StyledTitle>
            </div>
            <button className={styles.buttonRemove}>Remover Todos</button>
        </>
    )
}


export default TotalPrice