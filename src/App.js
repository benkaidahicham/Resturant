import { Container } from 'react-bootstrap';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Category from './components/Category';
import CardItem from './components/CardItem';
import {items} from './Data';
import { useState } from 'react';


function App() {
  const [itemsData, setitemsDate] = useState(items)
  const filterbyCategory =(cat)=>{
    if(cat === "الكل"){
      setitemsDate(items)
    }else{
    const newArry=items.filter((item)=> item.category === cat)
    setitemsDate(newArry)
  }}
  const allCategory=["الكل",...new Set(items.map((i)=>i.category))]
  
  const filterbysearch = (word) => {
     if(word !== ""){
     const newArry = items.filter((item)=> item.titel === word)
     setitemsDate(newArry)
  }}
  return (
    <div className="App">
      <NavBar filterbysearch={filterbysearch} />
      <Container>
      <Header/>
      <Category filterbyCategory={filterbyCategory} allCategory={allCategory}/>
      <CardItem itemsData={itemsData}/>
      </Container>
    </div>
  );
}

export default App;
