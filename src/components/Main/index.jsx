import React from "react";
import { StyledTitle} from "../../styles/modules/headings";
import { StyledButton } from "../../styles/modules/button";
import styles from './index.module.css'
import '../../styles/modules/globalStyle.css'
import Burguer from '../../assets/hamburguer.svg'
import TotalPrice from "../TotalPrice";
import toast, {Toaster} from 'react-hot-toast'


function Main({produtos,setProdutos,setCarrinho,carrinho,HandleClick,filtred,setFiltred}){

   function DeleteClick(item){
        const resultado = carrinho.filter(itemCarr => {
            return itemCarr !== item
        })
        toast.success('Produto deletado!','red')
        setCarrinho(resultado)
   }

    return(
        <main className={styles.mainSec}>
           <div className={styles.mainDivList}>
                {filtred.length === 0 ? (console.log('Não há itens filtrados')) : (
                    <StyledTitle fontSize='two'>Resultado para : {filtred[0].category}</StyledTitle>
                )}
                <ul className={styles.mainList}>
                    {filtred.length === 0 ?(produtos.map(element => {
                        return (
                            <li className={styles.listItems} key={element.id} >
                                <figure className={styles.FigureMain}>
                                    <img src={element.img} alt={element.name} referrerPolicy="no-referrer"/>
                                </figure>
                                <StyledTitle fontSize='three'>{element.name}</StyledTitle>
                                <StyledTitle fontSize='Caption'>{element.category}</StyledTitle>
                                <StyledTitle fontSize='Body'>R$ {element.price.toString().length < 3 ? `${element.price}.00` : element.price}</StyledTitle>
                                <StyledButton type="submit" Button='Button' onClick={(event) => {
                                    event.preventDefault()
                                    HandleClick(element)
                                }}
                                >Adicionar ao Carrinho</StyledButton>
                            </li>
                        )
                    })): (
                        filtred.map(filter => {
                            console.log(filter)
                            return(
                                <>
                                    
                                    <li className={styles.listItems} key={filter.id} >
                                        <figure className={styles.FigureMain}>
                                            <img src={filter.img} alt={filter.name} referrerPolicy="no-referrer"/>
                                        </figure>
                                        <StyledTitle fontSize='three'>{filter.name}</StyledTitle>
                                        <StyledTitle fontSize='Caption'>{filter.category}</StyledTitle>
                                        <StyledTitle fontSize='Body'>R$ {filter.price.toString().length < 3 ? `${filter.price}.00` : filter.price}</StyledTitle>
                                        <StyledButton type="submit" Button='Button' onClick={(event) => {
                                            event.preventDefault()
                                            HandleClick(filter)
                                        }}
                                        >Adicionar ao Carrinho</StyledButton>
                                    </li>
                            </>
                            )
                        })        
                    )}
                </ul>
            </div>
            <div className={styles.mainCarr}>
                    <div className={styles.startCarr}>
                        <StyledTitle fontSize='two'>Carrinho de Compras</StyledTitle>
                    </div>
                    <ul className={styles.carrList}>
                        {carrinho.length > 0 ?  (carrinho.map(itemCarr => {
                            return (
                                <li className={styles.carrItem} key={itemCarr.id}>
                                    <figure className={styles.figureCarr}>
                                        <img src={itemCarr.img} alt={itemCarr.name} referrerPolicy="no-referrer" />
                                    </figure>
                                    <div className={styles.carrText}>
                                        <StyledTitle fontSize='three'>{itemCarr.name}</StyledTitle>
                                        <button onClick={() => DeleteClick(itemCarr)}>Remover</button>
                                        <StyledTitle fontSize='Caption'>{itemCarr.category}</StyledTitle>
                                    </div>  
                                </li>
                            )
                        })): (
                            <>
                                <StyledTitle fontSize='Body-600'>Sua sacola está vazia</StyledTitle>
                                <StyledTitle fontSize='Caption'>Adicione Produtos</StyledTitle>
                            </>
                        )}
                    </ul>
                    <TotalPrice carrinho={carrinho} setCarrinho={setCarrinho} />
                </div>
                
        </main>
    )
}

export default Main