
const onResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка : ${res.status}`);
}


class Api {
    constructor ({baseUrl,headers}) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }
    
      login(dataUser) {
        return fetch(`${this._baseUrl}/signin`, {
          headers: this._headers,
          method: 'POST',
          body: JSON.stringify(dataUser),
          // {email: '', password: ''}
        }).then(onResponse);
      } 
}


const config = {
  baseUrl:
   'https://api.react-learning.ru',
   
  headers: {
    'content-type': 'application/json',
  },
};

export const authApi = new Api(config);

// export default api;