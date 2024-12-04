import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase/index.js'
import { addDoc, collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

function App() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState()
  const [category, setCategory] = useState("")
  const [products, setProducts] = useState([])

  const productCollection = collection(db, "produto")

  useEffect(()=>{
    const getProducts = async () => {
      const product = await getDocs(productCollection)
      setProducts(product.docs.map((doc) =>({...doc.data(), id: doc.id})))
    }
    getProducts()
  })

  async function addProduct() {
    const product = await addDoc(productCollection, { name, category, price})
    console.log(product)
  }

  async function deleteProduct(id) {
    const productDoc = doc(db, 'produto', id)
    await deleteDoc(productDoc)
  }
  
  return (

   <div className="container">
    <h1>Adicionar Produto</h1>
    <input
      type="text"
      placeholder="Nome"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <input
      type="text"
      placeholder="Categoria"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    />

    <input
      type="number"
      placeholder="Valor"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />

    <button onClick={addProduct}>Adicionar produto</button>

    <h2>Lista de Produtos</h2>
    <ul>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <li><strong>Nome:</strong> {product.name}</li>
          <li><strong>Categoria:</strong> {product.category}</li>
          <li><strong>Preço:</strong> R${product.price}</li>
          <button onClick={() => deleteProduct(product.id)}>Deletar produto</button>
        </div>
      ))}
    </ul>
  </div>

  );
}

export default App;
