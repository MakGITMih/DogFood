
// import-используем содержимое другого файла
import { useEffect, useState } from 'react';
import { CardList } from '../CardList/CardList';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import './App.css'; 
import  { Search }  from '../SearchInfo/SearchInfo';
import api from '../Utils/Request';



function App() {
   const[cards,setCards]=useState([]);
   const [searchQuery,setSearchQuery]=useState('');
   const [currentUser, setCurrentUser] = useState(null);
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
       api
      .search(searchQuery)
      .then((res) => setCards(res))
      .catch((err) => console.log(err));
      },[debounceSearch]);

   const handleInput = (e) => {setSearchQuery(e.target.value);}

   useEffect(() => {
    Promise.all([api.getProductsList(), api.getUserInfo()]).then(
      ([productsData, userData]) => {
        setCards(productsData.products);
        setCurrentUser(userData);
      }
    );
  }, []);

  function handleUpdateUser(userUpdateData) {
    api
       .setUserInfo(userUpdateData)
       .then((newUser) => {
       setCurrentUser(newUser);
    });
  }

  function handleProductLike(product) {
    const liked = product.likes.some((id) => id === currentUser?._id);
    api.changeLikeProduct(product._id, liked).then((newCard) => {
      const newProducts = cards.map((cardState) => {
        console.log('Карточка из стейта', cardState);
        console.log('Карточка из сервера', newCard);
        return cardState._id === newCard._id ? newCard : cardState;
      });
      setCards(newProducts);
    });
  }

  return (
    <div className="App">
      <Header user={currentUser} changeInput ={handleInput} onUpdateUser={handleUpdateUser}></Header>
      <main className="main">
        <Search searchText= {searchQuery} searchCount={cards.length}></Search>
          <div className="main__container _container">          
       <CardList data={cards} currentUser={currentUser} onProductLike={handleProductLike}></CardList>
          </div>
      </main>
       <Main></Main>
       <Footer></Footer>


    </div>
  );
}

export default App;
