import styles from '../../styles/ui-text-input.module.scss';
import { useState } from 'react';
import { IUiTextInput } from '../../interface/interface';

const UiTextInput = ({ placeholder, value, label, setValue,required }: IUiTextInput) => {
  const [onFocus, setOnFocus] = useState(false);
  console.log(onFocus)
  return (
    <div className={styles.uiTextMain}>
      <label>{label}</label>
      <input
        type="text"
        required={required}
        className={onFocus ? styles.inputFocus : ""}
        placeholder={placeholder}
        value={value}
        onFocus={() => setOnFocus(true)}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
export default UiTextInput;