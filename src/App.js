import React, { useState } from "react";

import Form from "./Form"
import "./App.css";

const initialProductList = [
  { id: 1, name: "produit 1", price: 50, quantity: 1 },
  { id: 2, name: "produit 2", price: 75, quantity: 2 },
  { id: 3, name: "produit 3", price: 20, quantity: 5 },
];

function App() {
  const [product,setNewProduct] = useState(initialProductList);

  const Add = e => {
    let ok = [...product]    
    ok.forEach(item => {
      if(item.id === parseInt(e.target.id)){        
        item.quantity = e.target.value
      }
    })
    setNewProduct(ok)
  }

  return (
    <div className="App">
      <h1>Ma commande</h1>
      <table>
      <thead>
        <tr>
          <td className="td">Produit</td>
          <td className="td">Prix unitaire</td>
          <td className="td">Quantité</td>
          <td className="td">Prix total</td>
        </tr>
      </thead>
      <tbody>
        {product.map(val => (
          <tr>
            <td className="td">{val.name}</td>
            <td className="td">{val.price}</td>
            <td className="td">
              <input
                id={val.id}
                htmlfor='number'
                className="td"
                onChange={Add}
              ></input>
            </td>
            <td className="td">{val.quantity*val.price}</td>
          </tr>
        ))} 
      </tbody>
      </table>
        <p>Montant de la commande :{product.map(oui => oui.quantity * oui.price).reduce((a, b) => a + b)}</p>
      <Form />
    </div>
  );
}

export default App;
