import { isLiked } from '../../Utils/Utils';
import '../Form/Form.css'
import {ReactComponent as Star} from '../Images/starFill.svg'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../Rating/Rating.css'




export function Rating ({rating,isEditable = false }) {

    const [ratingArr, setRatingArr] = useState(new Array(5).fill(<></>));
  const [ratingState, setRating] = useState(rating);

  const constructRating = useCallback((currentRating) => {
    const updatedArray = ratingArr.map((ratingElement, index) => {
      return (
        <Star
        className=
        {`'star' ${ index < currentRating ? 'filled' : 'no-filled'}`}    
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(ratingState)}
          onClick={()=>changeRating(index+1)}

        />
      );
    });

    const changeDisplay = (rate) => {
      if (!isEditable) return; 
      constructRating(rate);
    };
  
    const changeRating = (ratingState) => {
      setRating(ratingState)
    }

    setRatingArr(updatedArray);
  }, []);

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

