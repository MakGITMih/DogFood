
// import-используем содержимое другого файла
// import { Card } from '../Card/Card';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { CardList } from '../CardList/CardList';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import './App.css'; 
import data from '../data.json'
import { useState } from 'react';
import  { Search }  from '../Search/Search';



function App() {
  const[cards,useCards]=useState(data)

  return (
    <div className="App">
      <Header></Header>
      
      <main className="main">
        <Search searchText= {''} searchCount={''}></Search>
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
