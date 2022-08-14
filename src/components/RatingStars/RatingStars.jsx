import { Box } from 'components/Box';
import { RatingStar } from 'rating-star';
import { useState } from 'react';

export const RatingStars = () => {
  const [rating, setRating] = useState(3);

  const onRatingChange = score => {
    setRating(score);
  };

  return (
    <Box mb="43px">
      <RatingStar
        noBorder="false"
        size={30}
        clickable
        colors={{ mask: '#FFEA2B' }}
        id="123"
        rating={rating}
        onRatingChange={onRatingChange}
      />
    </Box>
  );
};
