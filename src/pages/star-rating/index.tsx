import { IoIosStarHalf, IoIosStarOutline, IoIosStar } from 'react-icons/io';
import classNames from 'classnames/bind';
import styles from './StarRating.module.scss';

const cn = classNames.bind(styles);

export default function StarRatingPage() {
  return (
    <div className={cn('wrapper')}>
      <div className={cn('star-rating')}>
        Rating(1.2) <StarRating rating={1.2} />
      </div>
      <div className={cn('star-rating')}>
        Rating(1.7) <StarRating rating={1.7} />
      </div>
      <div className={cn('star-rating')}>
        Rating(2.8)
        <StarRating rating={2.8} />
      </div>
      <div className={cn('star-rating')}>
        Rating(3.5)
        <StarRating rating={3.5} />
      </div>
      <div className={cn('star-rating')}>
        Rating(4.8)
        <StarRating rating={4.8} />
      </div>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  const ratingStar = Array.from({ length: 5 }, (ele, index) => {
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <IoIosStar />
        ) : rating >= index + 0.5 ? (
          <IoIosStarHalf />
        ) : (
          <IoIosStarOutline />
        )}
      </span>
    );
  });

  return <div>{ratingStar}</div>;
}
