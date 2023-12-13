import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const contactQueryKeys = {
  contacts: () => ['contacts'],
};

export const useGetContact = () => {
  return useQuery(contactQueryKeys.contacts(), () =>
    axios
      .get('http://localhost:8055/items/contact')
      .then((response) => response.data.data)
      .catch((e) => {
        if (e instanceof Error) {
          console.log(e.cause);
        }
      })
  );
};
