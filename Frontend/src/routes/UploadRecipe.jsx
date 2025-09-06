import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloudinaryUpload from '../components/shared/CloudinaryUpload'; // This might be used for image upload, ensure its functionality aligns with recipes
import IconText from '../components/shared/IconText';
import TextInput from '../components/shared/TextInput';
import TextWithHover from '../components/shared/TextWithHover';
import LoggedInContainer from '../containers/LoggedInContainer';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelpers';

const UploadRecipe = () => {
  // Updated component name
  const [name, setName] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [recipe, setRecipe] = useState(''); // Changed variable name for clarity
  const navigate = useNavigate();

  const submitRecipe = async () => {
    // Updated function name
    const data = { name, thumbnail, track:recipe }; // Use the recipe variable
    const response = await makeAuthenticatedPOSTRequest('/recipe/create', data);
    if (response.err) {
      alert('Could not create recipe');
    } else {
      alert('Success');
      navigate('/home');
    }    
  };

  return (
    <LoggedInContainer curActiveScreen='upload'>
      <div className='h-full w-full flex'>
        <div className='content p-3 pt-0 overflow-auto'>
          <div className='text-2xl font-semibold mb-5 text-white mt-8'>
            Upload Your Recipe
          </div>
          <div className='w-full flex flex-col'>
            <div className='w-full'>
              <TextInput
                label='Recipe Name'
                labelClassName={'text-white'}
                placeholder='Name'
                value={name}
                setValue={setName}
              />
            </div>
            <div className='w-full'>
              <TextInput
                label='Image Link'
                labelClassName={'text-white'}
                placeholder='Link'
                value={thumbnail}
                setValue={setThumbnail}
              />
            </div>
            <div className='w-full'>
              <TextInput
                label='Recipe Instructions'
                labelClassName={'text-white'}
                placeholder='Instructions'
                value={recipe}
                setValue={setRecipe} // Updated to use the recipe variable
              />
            </div>
          </div>
          <div className='flex pt-4'>
            <div
              className='bg-white w-40 flex items-center justify-center p-4 rounded-full text-gray-600 cursor-pointer font-semibold'
              onClick={submitRecipe} // Updated function call
            >
              Upload
            </div>
          </div>
        </div>
      </div>
    </LoggedInContainer>
  );
};

export default UploadRecipe;
