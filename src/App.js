import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'
import AddItem from './components/addItem'
import DisplayTransaction from './components/displayTransaction';

function App() {

  const [transaction, setTransaction] = useState ([]);
  const addTransaction = ((amount, item, transactionType)=>{


    setTransaction((items)=>[...items, {
        amount:amount,
        item:item,
        transactionType:transactionType
    }])

    console.log(transaction);
  })


  return (
    <div className="container">
      
      <DisplayTransaction list={transaction} /> 
      <AddItem   add = {addTransaction}/>



    </div>
  );
}

export default App;
