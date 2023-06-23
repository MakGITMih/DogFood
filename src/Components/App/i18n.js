import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n
    .use(initReactI18next)
    .init ({
        debug: true,
        fallbackLng: 'ru',
        interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
            en: {
                translation: {
                    'newest': 'Newest',
                    'popular': 'Popular', // here we will place our translations...
                    'rating': 'Rating',
                    'cheep': 'Cheep',
                    'expensive': 'Expensive',
                    'discount': 'Discount',
                }
            },
            ru: {
                translation: {
                    'newest': 'Новинки',
                    'popular': 'Популярное',// here we will place our translations...
                    'rating': 'По рейтингу',
                    'cheep': 'Сначала дешевые',
                    'expensive': 'Сначала дорогие',
                    'discount': 'По скидке',
                }
            }
        }
    });

    // .init ({
    // resources: {
    //   en: {
    //     translation:{
    //         'newest': 'Newest',
    //         'popular': 'Popular'
    //     }
    //   },
    //   ru: {
    //     translation:{
    //         'newest': 'Новинки',
    //         'popular': 'Популярное'
    //     }
    //   }
    // },
    // lng: 'en',
    // fallbackLng: 'en'
    // });

    export default i18n;