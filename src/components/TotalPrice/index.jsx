import React from "react";
import { StyledTitle} from "../../styles/modules/headings";
import { StyledButton } from "../../styles/modules/button";
import styles from './index.module.css'
import '../../styles/modules/globalStyle.css'
import toast, {Toaster} from 'react-hot-toast'



function TotalPrice({carrinho,setCarrinho}){

    function removeAll(){
        if(carrinho.length > 0){
            setCarrinho([])
            toast.success('Todos os Produtos foram removidos')
        }else{
            toast.error('Não a nada para remover')
        }
    }
    function soma(){
        const resultado = carrinho.reduce((acc,valorFinal) => {
            return acc + valorFinal.price
        },0)
        return resultado.toFixed(2)
    }

    return(
        <>
            <div className={styles.divTotal}>
                <StyledTitle fontSize='four'>Total</StyledTitle>
                <StyledTitle fontSize='Caption'>R$ {soma()}</StyledTitle>
            </div>
            <button onClick={removeAll} className={styles.buttonRemove}>Remover Todos</button>
        </>
    )
}


export default TotalPrice