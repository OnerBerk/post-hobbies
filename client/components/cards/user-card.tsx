import Card from '../../ui-components/ui-card/card';
import QUERY_USERS from '../../pages/api/query/UsersQuery.graphql';
import { Iusers, Iuser, Ipost } from '../../interface/interface';
import { useQuery } from '@apollo/client';

const UserCard = () => {
  const { data, loading, error } = useQuery(QUERY_USERS);
  if (error) {
    return <p>:( an error happened</p>;
  }
  return (
    <div>
      {loading && <p>loading...</p>}
      {data && data.users.map((user: Iuser, index: number) => {
        return (
          <Card key={index}>
            {user.name}<br />{user.profession}<br />{user.posts.map((post: Ipost, i: number) => {
            return (<p key={i}>{post.comment}</p>);
          })}
          </Card>
        );
      })}
    </div>
  );
};
export default UserCard;