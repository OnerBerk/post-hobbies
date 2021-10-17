import styles from '../../styles/ui-button.module.scss';
import { NextComponentType } from 'next';

export interface IButton {
  size?: 'small' | 'medium';
  backgroundColor?: string;
  onClick?: () => void;
  title: string;
  type?: string;
}

const UiButton = ({ type="submit", title, size, backgroundColor, onClick, ...props }: IButton) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles[size ? `buttonMain--${size}` : `buttonMain`]}
        style={{ backgroundColor: '#D1F2EB' }}
        onClick={onClick}
        {...props}
      > {title}
      </button>
    </div>
  );
};
export default UiButton;