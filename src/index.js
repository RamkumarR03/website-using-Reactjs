import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Table from './Components/content';
import Footer from './Components/footer';
import Form from './Components/form';
import Header from './Components/header';
import './index.css';

function Welcome(){
  return (
    <div>
  <Header />
  <Table />
  <Form />
  <Footer />
  </div>
  )
  
}
ReactDOM.render(<Welcome /> ,document.getElementById("root"));