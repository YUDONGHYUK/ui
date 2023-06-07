import { BiMinus, BiPlus } from 'react-icons/bi';
import classNames from 'classnames/bind';
import styles from './IncrementDecrementNum.module.scss';
import { useState } from 'react';
const cn = classNames.bind(styles);

export default function IncrementDecrementNum() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setValue((prev) => (prev - 1 < 1 ? 1 : prev - 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, '');
    setValue(Number(numericValue));
  };

  return (
    <div className={cn('wrapper')}>
      <button className={cn('sign')} onClick={handleDecrement}>
        <BiMinus />
      </button>
      <input
        className={cn('input')}
        type={'text'}
        value={value}
        maxLength={3}
        onChange={handleChange}
        onBlur={() => setValue((value) => (value < 1 ? 1 : value))}
      />
      <button className={cn('sign')} onClick={handleIncrement}>
        <BiPlus />
      </button>
    </div>
  );
}
