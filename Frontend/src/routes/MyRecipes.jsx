import { useEffect, useState } from 'react';
import SingleRecipeCard from '../components/shared/SingleRecipeCard'; // Adjusted component name
import LoggedInContainer from '../containers/LoggedInContainer';
import { makeAuthenticatedGETRequest } from '../utils/serverHelpers';

const MyRecipe = () => {
  const [recipeData, setRecipeData] = useState([]); // Renamed from songData

  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest(
        '/recipe/get/myrecipes'
      );
      setRecipeData(response.data); // Updated state variable
    };
    getData();
  }, []);

  return (
    <LoggedInContainer curActiveScreen='myRecipe'>
      <div className='text-white text-xl font-semibold pb-4 pl-2 pt-8'>
        My Recipes {/* Updated text */}
      </div>
      <div className='space-y-3 overflow-auto'>
        {recipeData.map((item) => {
          return <SingleRecipeCard info={item} key={item.id} />; // Updated component name and added key prop
        })}
      </div>
    </LoggedInContainer>
  );
};

export default MyRecipe;
