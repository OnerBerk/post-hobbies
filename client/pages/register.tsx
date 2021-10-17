import { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client/';

import UiLink from '../ui-components/link/ui-link';
import UiLayout from '../ui-components/ui-layout/ui-layout';
import UiTextInput from '../ui-components/ui-text-input/ui-text-input';
import UiButton from '../ui-components/ui-button/ui-button';
import { useRouter } from 'next/router';

const Register = () => {
  const routeur =useRouter()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profession, setProfession] = useState('');
  const [isError, setIsError] = useState(false);

  const CREATEUSER = gql`
      mutation createUser(
          $email: String!
          $name: String!
          $profession:String
          $password: String!
          $confirmPassword:String!
      ) {
          createUser(
              email:$email
              name:$name
              profession: $profession,
              password: $password,
              confirmPassword: $confirmPassword)
          { id name email}
      }
  `;

  const [addUser, { data, error, loading }] = useMutation(CREATEUSER);

  const handleSubmit = async () => {
       await addUser({
        variables: {
          email:email,
          name:name,
          profession:profession,
          password:password,
          confirmPassword:confirmPassword,
        }
      })
  };

  return (
    <UiLayout>
      <h1> Inscription </h1>
      <form onSubmit={handleSubmit}>
        <UiTextInput error={isError} placeholder='Entrez votre nom' value={name} setValue={setName} label='Nom' />
        <UiTextInput placeholder='Entrez votre email' value={email} setValue={setEmail} label='Email' />
        <UiTextInput placeholder='Entrez votre age' value={profession} setValue={setProfession} label='Profession' />
        <UiTextInput placeholder='Entrez votre mot de passe' value={password} setValue={setPassword}
                     label='Mot de passe' />
        <UiTextInput placeholder='Confirmer votre mot de passe' value={confirmPassword} setValue={setConfirmPassword}
                     label=' Mot de passe confirmation' />
        <UiButton title="Submit"/>
      </form>

      <UiLink url='/' title='Déja inscrit ? Connectez vous!' />
    </UiLayout>
  );
};

export default Register;