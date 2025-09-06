import { useContext } from 'react';
import recipeContext from '../../contexts/RecipeContext'; // Ensure you have a recipe context

const SingleRecipeCard = ({ info }) => {
  const { currentRecipe, setCurrentRecipe } = useContext(recipeContext); // Adjust context

  return (
    <div
      className='flex bg-black bg-opacity-80 hover:bg-black hover:bg-opacity-80 p-2 rounded-sm'
      onClick={() => {
        setCurrentRecipe(info); // Update to set the current recipe
      }}
    >
      <div
        className='w-20 h-20 bg-cover bg-center'
        style={{
          backgroundImage: `url("${info.thumbnail}")`, // Assuming `thumbnail` is still relevant
        }}
      ></div>
      <div className='flex w-full'>
        <div className='text-white flex justify-bottom flex-col pl-4 w-full'>
          <div className='cursor-pointer hover:underline'>
            {info.name} {/* Recipe name */}
          </div>
          
        </div>
        <div className='w-7/9 flex items-center justify-center text-white text-sm'>
          <div>{info.track}</div>{' '}
          {/* Assuming there's a description for recipes */}
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeCard;
