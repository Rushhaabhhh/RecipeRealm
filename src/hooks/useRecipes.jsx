import { useQuery } from 'react-query';
import { searchRecipes } from '../services/api';

const useRecipes = (query) => {
  return useQuery(['recipes', query], () => searchRecipes(query), {
    enabled: !!query,
  });
};

export default useRecipes;
