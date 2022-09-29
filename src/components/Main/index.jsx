import React from "react";
import { StyledTitle} from "../../styles/modules/headings";
import { StyledButton } from "../../styles/modules/button";
import styles from './index.module.css'
import '../../styles/modules/globalStyle.css'
import Burguer from '../../assets/hamburguer.svg'
import TotalPrice from "../TotalPrice";


function Main(){
    return(
        <main className={styles.mainSec}>
           <div className={styles.mainDivList}>
                <ul className={styles.mainList}>
                    <li className={styles.listItems}>
                        <figure className={styles.FigureMain}>
                            <img src={Burguer} alt="imagemDoProduto" />
                        </figure>
                        <StyledTitle fontSize='three'>Hamburguer</StyledTitle>
                        <StyledTitle fontSize='Caption'>Sanduíches</StyledTitle>
                        <StyledTitle fontSize='Body'>R$ 14,00</StyledTitle>
                        <StyledButton Button='Button'>Adicionar</StyledButton>
                    </li>
                    <li className={styles.listItems}>
                        <figure className={styles.FigureMain}>
                            <img src={Burguer} alt="imagemDoProduto" />
                        </figure>
                        <StyledTitle fontSize='three'>Hamburguer</StyledTitle>
                        <StyledTitle fontSize='Caption'>Sanduíches</StyledTitle>
                        <StyledTitle fontSize='Body'>R$ 14,00</StyledTitle>
                        <StyledButton Button='Button'>Adicionar</StyledButton>
                    </li>
                    <li className={styles.listItems}>
                        <figure className={styles.FigureMain}>
                            <img src={Burguer} alt="imagemDoProduto" />
                        </figure>
                        <StyledTitle fontSize='three'>Hamburguer</StyledTitle>
                        <StyledTitle fontSize='Caption'>Sanduíches</StyledTitle>
                        <StyledTitle fontSize='Body'>R$ 14,00</StyledTitle>
                        <StyledButton Button='Button'>Adicionar</StyledButton>
                    </li>
                    <li className={styles.listItems}>
                        <figure className={styles.FigureMain}>
                            <img src={Burguer} alt="imagemDoProduto" />
                        </figure>
                        <StyledTitle fontSize='three'>Hamburguer</StyledTitle>
                        <StyledTitle fontSize='Caption'>Sanduíches</StyledTitle>
                        <StyledTitle fontSize='Body'>R$ 14,00</StyledTitle>
                        <StyledButton Button='Button'>Adicionar</StyledButton>
                    </li>
                    <li className={styles.listItems}>
                        <figure className={styles.FigureMain}>
                            <img src={Burguer} alt="imagemDoProduto" />
                        </figure>
                        <StyledTitle fontSize='three'>Hamburguer</StyledTitle>
                        <StyledTitle fontSize='Caption'>Sanduíches</StyledTitle>
                        <StyledTitle fontSize='Body'>R$ 14,00</StyledTitle>
                        <StyledButton Button='Button'>Adicionar</StyledButton>
                    </li>
                    <li className={styles.listItems}>
                        <figure className={styles.FigureMain}>
                            <img src={Burguer} alt="imagemDoProduto" />
                        </figure>
                        <StyledTitle fontSize='three'>Hamburguer</StyledTitle>
                        <StyledTitle fontSize='Caption'>Sanduíches</StyledTitle>
                        <StyledTitle fontSize='Body'>R$ 14,00</StyledTitle>
                        <StyledButton Button='Button'>Adicionar</StyledButton>
                    </li>
                    
                </ul>
            </div>
            <div className={styles.mainCarr}>
                    <div className={styles.startCarr}>
                        <StyledTitle fontSize='three'>Carrinho de Compras</StyledTitle>
                    </div>
                    <ul className={styles.carrList}>
                        <li className={styles.carrItem}>
                                <figure className={styles.figureCarr}>
                                    <img src={Burguer} alt="imagemDoProduto" />
                                </figure>
                                <div className={styles.carrText}>
                                    <StyledTitle fontSize='three'>Hamburguer</StyledTitle>
                                    <button>Remover</button>
                                    <StyledTitle fontSize='Caption'>Sanduíches</StyledTitle>
                                </div>  
                        </li>        
                    </ul>
                    <TotalPrice />
                </div>
                
        </main>
    )
}

export default Main