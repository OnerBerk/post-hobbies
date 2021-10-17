import UiCard from '../../ui-components/ui-card/ui-card';
import QUERY_USERS from '../../pages/api/query/UsersQuery.graphql';
import { Ipost, Iuser } from '../../interface/interface';
import { useQuery } from '@apollo/client';
import UiLoader from '../../ui-components/ui-loader/ui-loader';

const UserCard = () => {
  const { data, loading, error } = useQuery(QUERY_USERS);
  if (error) {return <p>:( an error happened</p>;}
  return (
    <div>
      {loading && <UiLoader/>}
      <UiLoader/>
      {data && data.users.map((user: Iuser, index: number) => {
        return (
          <UiCard key={index}>
            {user.name}<br />{user.profession}<br />{user.posts.map((post: Ipost, i: number) => {
            return (<p key={i}>{post.comment}</p>);
          })}
          </UiCard>
        );
      })}
    </div>
  );
};
export default UserCard;