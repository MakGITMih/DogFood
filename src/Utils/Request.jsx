
const onResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка : ${res.status}`);
}


class Api {
    constructor ({baseUrl,headers,configuration}) {
        this._headers = headers;
        this._baseUrl = baseUrl;
        this._configuration = configuration;
    }
    getProductsList() {
        return fetch(`${this._baseUrl}/products`, { headers: this._headers }).then(
          onResponse
        );
    }
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`,  { headers: this._headers }).then(
        onResponse
      );
    }
      search(searchQuery) {
        return fetch(`${this._baseUrl}/products/search?query=${searchQuery}`, {
          headers: this._headers,
        }).then(onResponse);
      }
      setUserInfo(dataUser) {
        console.log({ dataUser });
        return fetch(`${this._baseUrl}/users/me`, {
          headers: this._headers,
          method: 'PATCH',
          body: JSON.stringify(dataUser),
        }).then(onResponse);
      }
      // метод для лайка
      changeLikeProduct(productId, isLike) {
        return fetch(`${this._baseUrl}/products/likes/${productId}`, {
          method: isLike ? 'DELETE' : 'PUT',
          headers: this._headers,
        }).then(onResponse);
      }
      getProductById(idProduct){
        return fetch(`${this._baseUrl}/products/${idProduct}`, {
          headers: this._headers
        }).then(onResponse)
      }
      deleteProductById(idProduct) {
        return fetch(`${this._baseUrl}/products/${idProduct}`, {
            headers: this._headers,
            method: 'DELETE',
        }).then(onResponse)
      }
      getUsersById(userId) {
        return fetch(`${this._baseUrl}/v2/group-9/users/${userId}`, {
          headers: this._headers,
        }).then(onResponse); 
      }
      getUsers() {
        return fetch(`${this._baseUrl}/v2/group-9/users`, {
          headers: this._headers,
        }).then(onResponse);
      }
      editUserAvatar(body) {
        return fetch(`${this._baseUrl}/v2/group-9/users/me/avatar`, {
          ...this._configuration(),
          method: "PATCH",
          body: JSON.stringify(body),
        }).then((res) => onResponse(res))
      }
      addReview(productId,body){
        return fetch(`${this._baseUrl}/products/review/${productId}`, {
          headers: this._headers,
          method: 'POST',
          body: JSON.stringify(body)
        }).then(onResponse);
      }
      deleteReview(productId, reviewId){
        return fetch(`${this._baseUrl}/products/review/${productId}/${reviewId}`, {
          headers: this._headers,
          method: 'DELETE',
        }).then(onResponse);
      }
}

const configuration = () => {

  console.log('HELLO i was called');
  return {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzMGFhNGFhMzk3MTIxODM5MDc4MzgiLCJncm91cCI6Imdyb3VwLTkiLCJpYXQiOjE2Nzg5Njk2NjksImV4cCI6MTcxMDUwNTY2OX0.qgSzU9IOmfL4-xCbOX2GShmmNczrcJ8Nwoc9wmGxb1s',  

    },
  };
};

const config = {
  baseUrl:
   'https://api.react-learning.ru',
   
  headers: {
    'content-type': 'application/json',
    Authorization:
    // `Bearer ${localStorage.getItem("token")}`,
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEzMGFhNGFhMzk3MTIxODM5MDc4MzgiLCJncm91cCI6Imdyb3VwLTkiLCJpYXQiOjE2Nzg5Njk2NjksImV4cCI6MTcxMDUwNTY2OX0.qgSzU9IOmfL4-xCbOX2GShmmNczrcJ8Nwoc9wmGxb1s',  
  },
  configuration: configuration,
};

const api = new Api(config);

export default api;

// export const getRickAndMortyList = async () => {
//   return fetch(`https://rickandmortyapi.com/api/character/`, {
//     headers: config.headers,
//   }).then((res) => res.json());
// };