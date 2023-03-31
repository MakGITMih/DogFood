
import { useEffect, useState } from 'react';
import { CardList } from '../CardList/CardList';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './App.css'; 
import  { SearchInfo }  from '../SearchInfo/SearchInfo';
import api from '../../Utils/Request';
import { ProductPages } from '../../ProductPages/ProductPages';
import {Spinner} from '../Spinner/Spinner'
import { Catalog } from '../../ProductPages/Catalog';
import { Route,Routes } from 'react-router-dom';
import { Product } from '../Product/Product';
import { NoMatches } from '../../ProductPages/NoMatches';
import { Faq } from '../../ProductPages/Faq';
import {Favorites} from '../../ProductPages/Favorites'
import { CardContext } from '../../Context/CardContext';
import { UserContext } from '../../Context/UserContext';
import { isLiked } from '../../Utils/Utils';
import { Form } from '../Form/Form';
import { RegistrationForm } from '../Form/RegistrationForm';
import { Modal } from '../Modal/Modal';

function App() {
   const[cards,setCards]=useState([]);
   const [searchQuery,setSearchQuery]=useState('');
   const [currentUser, setCurrentUser] = useState(null);
   const debounceSearch = useDebounce(searchQuery,1500);
   const [favorites, setFavorites] = useState([]);
   const [contacts, setContacts] = useState([]);
   const [activeModal, setActiveModal] = useState(false);

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
        const favProducts = productsData.products.filter((product) =>
          isLiked(product.likes, userData._id)
        );
        setFavorites(favProducts);
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
    const liked = isLiked(product.likes, currentUser?._id);
    
    api.changeLikeProduct(product._id, liked).then((newCard) => {
      const newProducts = cards.map((cardState) => {
        return cardState._id === newCard._id ? newCard : cardState;
      });

      if (!liked) {
        setFavorites((prevState) => [...prevState, newCard]);
      } else
        setFavorites((prevState) =>
          prevState.filter((card) => card._id !== newCard._id)
        );
      setCards(newProducts);
    });
  }

  const sortedData = (currenSort) => {
     console.log({ currenSort });
     switch (currenSort) {
      case 'expensive': setCards([...cards.sort((a,b)=> b.price - a.price )]);  break;
      case 'cheep': setCards([...cards.sort((a,b)=> a?.price - b?.price )]);  break;
      case 'newest': setCards([...cards.sort((a,b)=> new Date(b?.created_at) - new Date(a?.created_at) )]);  break;
      case 'popular': setCards([...cards.sort((a,b)=> b?.likes?.length - a?.likes?.length )]);  break;
      case 'discount': setCards([...cards.sort((a,b)=> b.discount- a.discount)]);  break;
      default:
        setCards([...cards.sort((a,b)=> a.price - b.price )]);
        break;
    }
    
                               //Cортировка через if
    //  if (currenSort === 'expensive') {
    //   const filteredCards = cards.sort((a, b) => b?.price - a?.price);
    //   setCards([...filteredCards]);
    // }
    // if (currenSort === 'cheep') {
    //   const filteredCards = cards.sort((a, b) => a?.price - b?.price);
    //   setCards([...filteredCards]);
    // }
    // if (currenSort === 'newest') {
    //   const filteredCards = cards.sort((a, b) => {
    //     return new Date(b?.created_at) - new Date(a?.created_at);
    //   });
    //   setCards(() => [...filteredCards]);
    // }
    // if (currenSort === 'popular') {
    //   const filteredCards = cards.sort((a, b) => b?.likes?.length - a?.likes?.length);
    //   setCards([...filteredCards]);
    // }                          
  }

  const valueProvider = {
    cards,
    favorites,
    // setCurrentSort(id);
    onSortData:sortedData
  };

  const userProvider = {
    handleProductLike: handleProductLike,
  };

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
    // api.createContact(contact)
  };

                        //   Удаление мусорных товаров по полю ('default-image')
  // useEffect(() => {
  //   console.log('works');
  //   const deleteCard = async (id) => {
  //     console.log('works2');

  //     await api.deleteProductById(id);
  //   };
  //   console.log({ cards });
  //   const filteredCards = cards.filter((el) =>
  //     el.pictures?.includes('default-image')
  //   );
  //   filteredCards.forEach((card) => deleteCard(card._id));
  //   console.log({ filteredCards });
  // }, []);


  return (
    <div className="App">      
      <CardContext.Provider value={valueProvider}>
      <UserContext.Provider value={userProvider}>
      <Header 
        setActiveModal ={setActiveModal}
        user={currentUser} 
        changeInput ={handleInput} 
        onUpdateUser={handleUpdateUser}>
      </Header>
      <Modal activeModal ={activeModal} setActiveModal={setActiveModal}><div style={{ width: '356px', height: '420px' }}><RegistrationForm addContact ={addContact}></RegistrationForm></div></Modal>
      <main className="main">     
       <SearchInfo 
         searchText= {searchQuery} 
         searchCount={cards.length}>
       </SearchInfo>    
       <Routes>
         <Route path='/' element = {
         <Catalog cards={cards} currentUser={currentUser}
         handleProductLike={handleProductLike}></Catalog>} ></Route>
         <Route path='/product/:productId' element = {<ProductPages></ProductPages>} ></Route>
         <Route path='/faq' element = {<Faq></Faq>}></Route>
         <Route path='/favorites' element = {<Favorites></Favorites>}></Route>
         <Route path='*' element = {<NoMatches></NoMatches>}></Route>
       </Routes> 
      </main>
       <Footer></Footer>
       </UserContext.Provider>
       </CardContext.Provider>
    </div>
  );
}

export default App;
