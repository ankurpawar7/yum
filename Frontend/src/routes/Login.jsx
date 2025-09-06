import { Icon } from '@iconify/react';
import { useState } from 'react';
// import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import video from '../assets/video/homebgvideo.mp4';
import PasswordInput from '../components/shared/PasswordInput';
import TextInput from '../components/shared/TextInput';
import WrongInfoModal from '../modals/WrongInfoModal';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelpers';
import Footer from './Footer';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [cookies, setCookie] = useCookies(['token']);
  const navigate = useNavigate();

  const [createUnAuthModalOpen, setCreateUnAuthModalOpen] = useState(false);

  const login = async () => {
    const data = { email, password };
    try {
      const response = await makeUnauthenticatedPOSTRequest(
        '/auth/login',
        data
      );
      console.log(response);

      if (response && !response.err) {
        const token = response.token;
        const date = new Date();
        date.setDate(date.getDate() + 30);
        Cookies.set('token', token, { expires: 7 });
        // setCookie('token', token, { path: '/', expires: date });
        navigate('/home');
      } else {
        console.error('Login failed:', response.err);
        alert('Failure: ' + (response.err || 'Unknown error occurred'));
        setCreateUnAuthModalOpen(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred while trying to log in.');
    }
  };

  return (
    <div className='flex flex-col min-h-screen'>
      {' '}
      {/* Flex container to manage layout */}
      <div className='w-full h-full flex items-center justify-center bg-green-200 relative flex-grow'>
        <video
          src={video}
          autoPlay
          muted
          loop
          className='absolute top-0 left-0 w-full h-full object-cover z-0'
        />
        <div className='relative z-10 w-full max-w-md p-8 rounded-lg shadow-lg'>
          {createUnAuthModalOpen && (
            <WrongInfoModal
              closeModal={() => {
                setCreateUnAuthModalOpen(false);
              }}
            />
          )}
          <div className='logo p-5 w-full space-x-1 border-b border-solid border-black flex justify-center'>
            <Icon icon='arcticons:recipe-keeper' color='black' width='40' />
            <div className='text-4xl text-black font-teko'>
              <Link to='/home'>Yum</Link>
            </div>
          </div>
          <div className='inputRegion py-5 flex items-center text-black justify-center flex-col'>
            <TextInput
              label='Email address'
              placeholder='Email address'
              className='my-6'
              value={email}
              setValue={setEmail}
            />
            <PasswordInput
              label='Password'
              placeholder='Password'
              value={password}
              setValue={setPassword}
            />
            <div className='w-full flex items-center justify-center my-8'>
              <button
                className='bg-black font-semibold p-3 px-10 rounded-full text-white'
                onClick={(e) => {
                  e.preventDefault();
                  login();
                }}
              >
                LOG IN
              </button>
            </div>
            <div className='w-full border border-solid border-black'></div>
            <div className='my-6 font-semibold text-lg'>
              Don't have an account?
            </div>
            <div className='border border-red-400 w-full flex items-center text-gray-600 justify-center py-4 rounded-full font-bold hover:text-white hover:bg-red-400 transition-colors duration-300 ease-in-out'>
              <Link to='/signup'>SIGN UP FOR YUM</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginComponent;
