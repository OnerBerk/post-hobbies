import styles from '../../styles/ui-layout.module.scss';
import React from 'react';

export interface ILayout {
  children: React.ReactNode;
}

const UiLayout = ({ children }:ILayout) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default UiLayout;