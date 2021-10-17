import style from './card.module.scss';
import { Ichildren } from '../../interface/interface';

const UiCard = ({children}:Ichildren) => {
  return (
    <div className={style.cardMain}>{children}</div>
  );
};
export default UiCard;