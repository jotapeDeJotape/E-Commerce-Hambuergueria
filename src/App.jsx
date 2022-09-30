import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { api } from './services/api'
import toast, {Toaster} from 'react-hot-toast'



function App() {
  const   [produtos,setProdutos] = useState([])
  const   [carrinho,setCarrinho] = useState([])
  const   [filtred, setFiltred] = useState([])
  

  useEffect(() => {
    api.get()
    .then(response => {
      console.log(response.data)
      setProdutos(response.data)
    })
    .catch(error => console.log(error))
  }, [])

  function HandleClick(element){
    const resultado = carrinho.find(itemCarr => {
      return element.id === itemCarr.id 
    })
  
    if(!resultado){
      setCarrinho([element,...carrinho])
      toast.success('Produto Adicionado')
    }else{
      toast.error('Produto já foi adicionado no carrinho')
    }
  }
  function HandleFilter(nameCategory){
   const resultado = produtos.filter(element => {
      return element.category.toLowerCase() === nameCategory.toLowerCase()
    })
    if(resultado.length > 0){
      setFiltred(resultado)
      toast.success('Produtos Filtrados')
    }else{
      setFiltred(resultado)
      toast.error('Categoria não existente. Todos os produtos foram listados!')
    }
    
  }

  return (
    <div className="App">
      <Toaster/>
      <Header HandleFilter={HandleFilter} />
      <Main produtos={produtos} setProdutos={setProdutos}  setCarrinho={setCarrinho} carrinho={carrinho} HandleClick={HandleClick} filtred={filtred} setFiltred={setFiltred} />
    </div>
  )
}

export default App
