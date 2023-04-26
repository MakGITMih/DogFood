import { isLiked } from '../../Utils/Utils';
import '../Form/Form.css'
import {ReactComponent as Star} from '../Images/starFill.svg'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../Rating/Rating.css'




export function Rating () {

    const [ratingArr, setRatingArr] = useState(new Array(5).fill(<Star></Star>));
  const [rating, setRating] = useState(1);

  const constructRating = useCallback((currentRating) => {
    const updatedArray = ratingArr.map((ratingElement, index) => {
      return (
        <Star
        className=
        {`'star' ${ index < currentRating ? 'filled' : 'no-filled'}`}
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={()=>changeRating(index+1)}

        />
      );
    });
    setRatingArr(updatedArray);
  }, []);

  const changeDisplay = (rate) => {
    constructRating(rate);
  };

  const changeRating = (rating) => {
    setRating(rating)
  }

  useEffect(() => {
    constructRating(1);
  }, [constructRating]);

    

    return ( 
     <div>
      {ratingArr.map((r, i) => {
        return <span key={i}>{r}</span>;
      })}
    </div>

    )
    
}

