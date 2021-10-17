import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import UiTextInput from '../ui-components/ui-text-input/ui-text-input';
import { useState } from 'react';
import UiButton from '../ui-components/ui-button/ui-button';

const Home: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const test = () => {
    alert('hshhshs');
  };
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <UiTextInput
        required={true}
        setValue={setEmail}
        label='Email'
        value={email}
        placeholder='Entrez votre email'
      />
      <UiTextInput
        required={true}
        label='Password'
        setValue={setPassword}
        value={password}
        placeholder='Entrez votre email'
      />
      <UiButton
        title="Submit"
        onClick={test}
      />
    </div>
  );
};

export default Home;
