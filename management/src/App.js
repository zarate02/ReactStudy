import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customer = [
  {
    'id':1,
  'name':'홍길동',
  'birthday':'202020',
  'image':'https://placeimg.com/64/64/any'
  },
  {
    'id':2,
    'name':'김철수',
    'birthday':'202021',
    'image':'https://placeimg.com/64/64/any'
  },
  {
    'id':3,
    'name':'수수다',
    'birthday':'202022',
    'image':'https://placeimg.com/64/64/any'
  }
]

function App() {
  return (
    customer.map(c=>{
      return(
        <Customer
          name={c.name}
          birthday={c.birthday}
          id={c.id}
          image={c.image}
        />
      )
    })
  );
}

export default App;
