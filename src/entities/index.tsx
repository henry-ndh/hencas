import Speaking from '@/entities/speaking';
import { useGetUsers } from '@/query/UserQuery';
import { useEffect } from 'react';
const HomePage = () => {
  const { data, isLoading, isFetching, isError, isSuccess, refetch: getUsers } = useGetUsers();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
  };

  console.log(data);

  return (
    <div>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
