import { FaPlus } from 'react-icons/fa';
import styles from './Accordion.module.css';

export default function Accordion() {
  return (
    <div className={styles.wrapper}>
      {/* Accordion Heading One */}
      <div className={styles.parentTab}>
        <input type={'radio'} name="tab" id="tab-1" />
        <label htmlFor="tab-1">
          <span>Accordion Heading One</span>
          <div className={styles.icon}>
            <FaPlus />
          </div>
        </label>
        <div className={styles.content}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            repudiandae ad, facere tempore quibusdam itaque quis vitae atque
            recusandae quas? Magnam reprehenderit voluptate sequi earum!
          </p>
        </div>
      </div>

      {/* Accordion Heading Two */}
      <div className={styles.parentTab}>
        <input type={'radio'} name="tab" id="tab-2" />
        <label htmlFor="tab-2">
          <span>Accordion Heading Two</span>
          <div className={styles.icon}>
            <FaPlus />
          </div>
        </label>
        <div className={styles.content}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            repudiandae ad, facere tempore quibusdam itaque quis vitae atque
            recusandae quas? Magnam reprehenderit voluptate sequi earum!
          </p>
        </div>
      </div>

      {/* Accordion Heading Three */}
      <div className={styles.parentTab}>
        <input type={'radio'} name="tab" id="tab-3" />
        <label htmlFor="tab-3">
          <span>Accordion Heading Three</span>
          <div className={styles.icon}>
            <FaPlus />
          </div>
        </label>
        <div className={styles.content}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            repudiandae ad, facere tempore quibusdam itaque quis vitae atque
            recusandae quas? Magnam reprehenderit voluptate sequi earum!
          </p>
        </div>
      </div>

      {/* Accordion Heading Four */}
      <div className={styles.parentTab}>
        <input type={'radio'} name="tab" id="tab-4" />
        <label htmlFor="tab-4">
          <span>Accordion Heading Four</span>
          <div className={styles.icon}>
            <FaPlus />
          </div>
        </label>
        <div className={styles.content}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            repudiandae ad, facere tempore quibusdam itaque quis vitae atque
            recusandae quas? Magnam reprehenderit voluptate sequi earum!
          </p>
        </div>
      </div>
    </div>
  );
}
