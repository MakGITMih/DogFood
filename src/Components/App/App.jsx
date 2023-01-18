
// import-используем содержимое другого файла
// import { Card } from '../Card/Card';
import { CardList } from '../CardList/CardList';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import './App.css'; 



function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Card></Card> */}
       <CardList></CardList>
      <Main></Main>
      <></>
       <Footer></Footer>


    </div>
  );
}

export default App;
