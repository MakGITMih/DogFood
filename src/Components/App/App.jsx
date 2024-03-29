
import { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './App.css'; 
import  { SearchInfo }  from '../SearchInfo/SearchInfo';
import api from '../../Utils/Request';
import { ProductPages } from '../../ProductPages/ProductPages';
import { Catalog } from '../../ProductPages/Catalog';
import { Route,Routes, useNavigate } from 'react-router-dom';
import { NoMatches } from '../../ProductPages/NoMatches';
import { Faq } from '../../ProductPages/Faq';
import {Favorites} from '../../ProductPages/Favorites'
import { CardContext } from '../../Context/CardContext';
import { UserContext } from '../../Context/UserContext';
import { isLiked } from '../../Utils/Utils';
import { Modal } from '../Modal/Modal';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { ResetPass } from '../ResetPass/ResetPass';
import { useLocation } from 'react-router-dom';
import { Chart } from '../Chart/Chart.jsx';
import { Profile } from '../Profile/Profile';

function App() {
   const[cards,setCards]=useState([]);
   const [searchQuery,setSearchQuery]=useState('');
   const [currentUser, setCurrentUser] = useState(null);
   const debounceSearch = useDebounce(searchQuery,1500);
   const [favorites, setFavorites] = useState([]);
   const [contacts, setContacts] = useState([]);
   const [activeModal, setActiveModal] = useState(true);
   const [isAuthentificated, setAuthentificated] = useState(false);
   const navigate = useNavigate();
   
   

   function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);  
    useEffect(() => {const handler = setTimeout(() => {setDebouncedValue(value);}, delay);
       return () => {clearTimeout(handler)};
       },[value,delay]
     );
     return debouncedValue;
   }

  useEffect(() => {
    if (!isAuthentificated) {
      return;
    }
    api
      .search(searchQuery)
      .then((res) => setCards(res))
      .catch((err) => console.log(err));
    navigate('/');
  }, [debounceSearch]);

   const handleInput = (e) => {setSearchQuery(e.target.value);}

   useEffect(() => {
    if (!isAuthentificated) {
      return;
    }
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
  }, [isAuthentificated]);


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

  const sortedData = (currentSort) => {
     switch (currentSort) {
      case 'expensive': setCards([...cards.sort((a,b)=> b.price - a.price )]);  break;
      case 'cheep': setCards([...cards.sort((a,b)=> a?.price - b?.price )]);  break;
      case 'newest': setCards([...cards.sort((a,b)=> new Date(b?.created_at) - new Date(a?.created_at) )]);  break;
      case 'popular': setCards([...cards.sort((a,b)=> b?.likes?.length - a?.likes?.length )]);  break;
      case 'discount': setCards([...cards.sort((a,b)=> b.discount- a.discount)]);  break;
      default:
        setCards([...cards.sort((a,b)=> a.price - b.price )]);
        break;
        case 'rating':
        setCards([
          ...cards.sort((a, b) => b?.reviews?.length - a?.reviews?.length),
        ]);
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

  // const addContact = (contact) => {
  //   setContacts([...contacts, contact]);
  //   api.createContact(contact)
  // };

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

  // const location = useLocation();
 
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;
  const initialPath = location.state?.initialPath;

  useEffect(() => {
    const haveToken = localStorage.getItem('token');
    setAuthentificated(!!haveToken);
  }, 
  // [activeModal]
  );

  const cardProvider = {
    cards,
    favorites,
    onSortData:sortedData,
  };

  const userProvider = {
    handleProductLike,
    currentUser,
    isAuthentificated,
    setActiveModal,
    setAuthentificated,
    setCurrentUser
  };

  const authRoutes = (
    <>
      <Route path='/login' element={
                 <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
                     <Login ></Login>
                 </Modal>}>
            </Route>
            <Route path='/register' element={
                <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
                  <Register ></Register>
                </Modal>}>
          </Route> 
          <Route path='/resetpass' element={
                <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
                  <ResetPass setAuthentificated={setAuthentificated} ></ResetPass>
                </Modal>}>
          </Route>                        
    </>
  );

  // console.log({location});

  return (
    <div className="App">      
      <CardContext.Provider value={cardProvider}>
      <UserContext.Provider value={userProvider}>
      <Header 
        // setActiveModal ={setActiveModal}
        // isAuthentificated={isAuthentificated}
        user={currentUser} 
        changeInput ={handleInput} 
        onUpdateUser={handleUpdateUser}
        // isAuthentificated={isAuthentificated}
        >
      </Header>
      {isAuthentificated ? (
      <main className="main"> 
       <SearchInfo 
         searchText= {searchQuery} 
         searchCount={cards.length}>
       </SearchInfo>    
       <Routes location={backgroundLocation && {...backgroundLocation, path: initialPath ||  location}}>
         <Route path='/' element = {<Catalog currentUser={currentUser}></Catalog>} ></Route>
         <Route path='/product/:productId' element = {<ProductPages></ProductPages>} ></Route>
         <Route path='/profile' element = {<Profile></Profile>}></Route>
         <Route path='/faq' element = {<Faq></Faq>}></Route>
         <Route path='/favorites' element = {<Favorites currentUser={currentUser}></Favorites>}></Route> 
         {authRoutes}
         <Route path='/chart' element = {<Chart></Chart>}></Route> 
         <Route path='*' element = {<NoMatches></NoMatches>}></Route>        
       </Routes> 
         {backgroundLocation && <Routes>{authRoutes}</Routes>}
      </main>
      ) : (
        <div className='not-auth'>
          <span className='auth-text'>Авторизуйтесь пожалуйста</span>
          <Routes> {authRoutes}</Routes>
        </div>
      )}
       <Footer></Footer>
       </UserContext.Provider>
       </CardContext.Provider>
    </div>
  );
}

export default App;
