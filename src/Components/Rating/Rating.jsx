import { isLiked } from '../../Utils/Utils';
import '../Form/Form.css'
import {ReactComponent as Star} from '../Images/starFill.svg'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../Rating/Rating.css'




export function Rating ({rating,isEditable = false, setRating }) {
    const [ratingArr, setRatingArr] = useState(new Array(5).fill(<></>));
    // const [ratingState, setRating] = useState(rating);
    
    const changeDisplay = (rate) => {
      if (!isEditable) return; 
      constructRating(rate);
    };

    const changeRating = (ratingState) => {
      if (!isEditable) return;
      setRating(ratingState);
    };
  
    // const changeRating = (ratingState) => {
    //   setRating(ratingState)
    // }

    const constructRating = useCallback((currentRating) => {
    const updatedArray = ratingArr.map((ratingElement, index) => {
      return (
        <Star
        className=
        {`'star' ${ index < currentRating ? 'filled' : 'no-filled'}`}    
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={()=>changeRating(index + 1)}
        />
      );
    });

    setRatingArr(updatedArray);
  }, [isEditable,rating]);

  useEffect(() => {
    constructRating(rating);
  }, [constructRating]);

  

    return ( 
     <span>
      {ratingArr.map((r, i) => {
        return <span key={i}>{r}</span>;
      })}
    </span>

    )
    
}

