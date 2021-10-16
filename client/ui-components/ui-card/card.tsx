import style from './Card.module.scss';
import { Ichildren } from '../../interface/interface';

const Card = ({children}:Ichildren) => {
  return (
    <div className={style.cardMain}>{children}</div>
  );
};
export default Card;