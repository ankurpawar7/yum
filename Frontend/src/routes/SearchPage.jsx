import { Icon } from '@iconify/react';
import { useState } from 'react';
import SingleSongCard from '../components/shared/SingleRecipeCard';
import LoggedInContainer from '../containers/LoggedInContainer';
import { makeAuthenticatedGETRequest } from '../utils/serverHelpers';

const SearchPage = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [songData, setSongData] = useState([]);

  const searchSong = async () => {
    // This function will call the search api
    // console.log(`Search Text: ${searchText}`)
    const response = await makeAuthenticatedGETRequest(
      '/recipe/get/recipename/' + searchText
    );
    setSongData(response.data);
  };

  return (
    <LoggedInContainer curActiveScreen='search'>
      <div className='w-full py-6'>
        <div
          className={`w-1/3 p-3 text-sm rounded-full bg-white px-5 flex text-black space-x-3 items-center ${
            isInputFocused ? 'border border-white' : ''
          }`}
        >
          <Icon icon='gala:search' color='gray' className='  text-lg' />
          <input
            type='text'
            placeholder='Search for Recipe'
            className='w-full bg-white focus:outline-none'
            onFocus={() => {
              setIsInputFocused(true);
            }}
            onBlur={() => {
              setIsInputFocused(false);
            }}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                searchSong();
              }
            }}
          />
        </div>
        {songData.length > 0 ? (
          <div className='pt-10 space-y-3'>
            <div className='text-white'>
              Showing search results for
              <span className='font-bold '> {searchText}</span>
            </div>
            {songData.map((item) => {
              return (
                <SingleSongCard
                  info={item}
                  key={JSON.stringify(item)}
                  playSound={() => {}}
                />
              );
            })}
          </div>
        ) : (
          <div className='text-gray-400 pt-10'>Search To Get Recipe.</div>
        )}
      </div>
    </LoggedInContainer>
  );
};

export default SearchPage;
