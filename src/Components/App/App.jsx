
// import-используем содержимое другого файла
// import { Card } from '../Card/Card';
// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { CardList } from '../CardList/CardList';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import './App.css'; 
import data from '../data.json'
import  { Search }  from '../Search/Search';
// import useDebounce from '../useDebouce';


function App() {
   const[cards,setCards]=useState(data);
   const [searchQuery,setSearchQuery]=useState('');
   const handleInput = (e) => {setSearchQuery(e.target.value);}
   const debounceSearch = useDebounce(searchQuery,1500);
  
   function useDebounce(value, delay) {
   const [debouncedValue, setDebouncedValue] = useState(value);  
   useEffect(() => {const handler = setTimeout(() => {setDebouncedValue(value);}, delay);
      return () => {clearTimeout(handler)};
      },[value,delay]
    );
    return debouncedValue;
  }

  useEffect (() => {
    const filteredCards = data.filter ((item) =>
       item.name.toUpperCase().includes(debounceSearch.toUpperCase())
       );
       setCards ([...filteredCards]);
      },[debounceSearch]);
  

  return (
    <div className="App">
      <Header changeInput ={handleInput}></Header>
      <main className="main">
        <Search searchText= {searchQuery} searchCount={cards.length}></Search>
          <div className="main__container _container">          
       <CardList data={cards}></CardList>
          </div>
      </main>
       <Main></Main>
       <Footer></Footer>


    </div>
  );
}

export default App;
