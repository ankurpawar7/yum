import { useContext, useState } from 'react';
import { Icon } from '@iconify/react';
import IconText from '../components/shared/IconText';
import recipeContext from '../contexts/RecipeContext'; // Updated context
import CreatePlaylistModal from '../modals/CreatePlaylistModal'; // Adjust if needed
import AddToPlaylistModal from '../modals/AddToPlaylistModal'; // Adjust if needed
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { removeCookie } from '../components/shared/cookieUtils';
import video from '../assets/video/burger.mp4';
import Footer from '../routes/Footer';

const LoggedInContainer = ({ children, curActiveScreen }) => {
  const navigate = useNavigate();
  const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
  const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);

  const { currentRecipe } = useContext(recipeContext); // Updated to recipe context

  const handleLogout = () => {
    // Remove token from cookies
    removeCookie('token');
    // Redirect to home page
    navigate('/home');
    window.location.reload();
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className='h-full w-full'>
      <video
        src={video}
        autoPlay
        muted
        loop
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
      />
      <div className='relative z-10 h-full w-full'>
        {createPlaylistModalOpen && (
          <CreatePlaylistModal
            closeModal={() => setCreatePlaylistModalOpen(false)}
          />
        )}
        {addToPlaylistModalOpen && (
          <AddToPlaylistModal
            closeModal={() => setAddToPlaylistModalOpen(false)}
          />
        )}
        <div className='h-full w-full flex'>
          <div className='h-full w-full overflow-auto'>
            <div className='navbar w-full h-2/10 flex items-center justify-center'>
              <div className='w-full flex h-full space-x-4'>
                <div className='logoDiv p-6 py-4 flex' onClick={refreshPage}>
                  <Icon
                    icon='arcticons:recipe-keeper'
                    color='white'
                    width='40'
                  />
                  <div className='text-4xl text-white font-teko'>
                    <Link to='/home'>Yum</Link>
                  </div>
                </div>
                <div className='w-full flex items-center pr-20 rounded-lg space-x-4'>
                  <IconText
                    iconName={'heroicons-solid:home'}
                    displayText={'Home'}
                    targetLink={'/home'}
                    active={curActiveScreen === 'home'}
                  />
                  <IconText
                    iconName={'gala:search'}
                    displayText={'Search'}
                    active={curActiveScreen === 'search'}
                    targetLink={'/search'}
                  />
                  <IconText
                    iconName={'solar:upload-bold'}
                    displayText={'Upload Recipe'}
                    active={curActiveScreen === 'upload'}
                    targetLink='/upload' // Updated route
                  />
                  <IconText
                    iconName={'game-icons:fork-knife-spoon'}
                    displayText={'My Recipes'} // Updated display text
                    targetLink={'/myRecipes'} // Updated route
                    active={curActiveScreen === 'myRecipes'}
                  />
                </div>
                <div className='w-1/7 flex justify-end items-center pl-20 pr-2 rounded-lg'>
                  <button
                    onClick={handleLogout}
                    className='w-full px-4 py-2 bg-gray-300 hover:bg-gray-100 rounded-lg'
                  >
                    <Link to='/home'>Logout</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className='content p-8 pt-0 overflow-auto'>{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedInContainer;
