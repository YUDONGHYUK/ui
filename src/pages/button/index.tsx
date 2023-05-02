import React, { ButtonHTMLAttributes, ComponentProps } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cn = classNames.bind(styles);

type ButtonProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: 'blue' | 'gray' | 'pink';
  outline?: boolean;
  fullWidth?: boolean;
};

function Button({
  children,
  size = 'medium',
  color = 'blue',
  outline = false,
  fullWidth = false,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn('Button', size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

export default function ButtonPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.buttons}>
        <Button size="large" onClick={() => console.log('clicked')}>
          BUTTON
        </Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className={styles.buttons}>
        <Button size="large" color="gray">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button size="small" color="gray">
          BUTTON
        </Button>
      </div>
      <div className={styles.buttons}>
        <Button size="large" color="pink">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button size="small" color="pink">
          BUTTON
        </Button>
      </div>
      <div className={styles.buttons}>
        <Button size="large" color="blue" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button size="small" color="pink" outline>
          BUTTON
        </Button>
      </div>
      <div className={styles.buttons}>
        <Button size="large" fullWidth>
          BUTTON
        </Button>
        <Button size="large" color="gray" fullWidth>
          BUTTON
        </Button>
        <Button size="large" color="pink" fullWidth>
          BUTTON
        </Button>
      </div>
    </section>
  );
}
