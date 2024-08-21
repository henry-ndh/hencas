import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface TypedUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export function useGetUsers() {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => axios.get<TypedUser[]>('https://jsonplaceholder.typicode.com/users').then((res) => res.data),
    enabled: false,
  });
}
