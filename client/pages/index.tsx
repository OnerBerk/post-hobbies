import { useState } from 'react';
import { useRouter } from 'next/router';

import UiTextInput from '../ui-components/ui-text-input/ui-text-input';
import UiButton from '../ui-components/ui-button/ui-button';
import UiLink from '../ui-components/link/ui-link';
import UiLayout from '../ui-components/ui-layout/ui-layout';

import { gql, useLazyQuery } from '@apollo/client/';

const Home = () => {
  const routeur =useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LOGIN = gql`
      query login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
              token
          }
      }
  `;
  const [getToken, { data,error }] = useLazyQuery(LOGIN);
  error && console.log("erreur:", error.message)
  if (data) {
    localStorage.setItem('token', JSON.stringify(data.login.token));
    routeur.push('/landing')
  }

  const handleSubmit = async ()=> {
      try {
        await getToken({ variables: { email, password } });
      } catch (err) {
        console.log('Handle me', err);
      }
  };
  return (
    <UiLayout>
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
        title='Submit'
        onClick={handleSubmit}
      />
      <UiLink url='/register' title="Vous n'etes pas encore inscrit?" />
    </UiLayout>
  );
};

export default Home;
