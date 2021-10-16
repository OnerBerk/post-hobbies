import type { NextPage } from 'next';
import UserCard from '../components/cards/user-card';
import styles from '../styles/Home.module.scss';

const Home: NextPage= () => {
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <UserCard/>
    </div>
  );
};

export default Home;
