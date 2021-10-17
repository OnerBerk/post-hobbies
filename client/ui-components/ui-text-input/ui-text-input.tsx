import { useState } from 'react';
import { IUiTextInput } from '../../interface/interface';

import styles from '../../styles/ui-text-input.module.scss';

const UiTextInput = ({ error, placeholder, value, label, setValue, required }: IUiTextInput) => {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <div className={styles.uiTextMain}>
      <label>{label}</label>
      <input
        style={{ backgroundColor: error ? '#F1948A' : '' }}
        type='text'
        className={onFocus ? styles.inputFocus : ''}
        placeholder={placeholder}
        value={value}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
export default UiTextInput;