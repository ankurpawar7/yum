import {useContext, useState, useLayoutEffect, useRef} from "react";
import {Howl, Howler} from "howler";
import {Icon} from "@iconify/react";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import songContext from "../contexts/songContext";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";
import AddToPlaylistModal from "../modals/AddToPlaylistModal";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelpers";
import {Link, Navigate} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { removeCookie } from '../components/shared/cookieUtils';


const LoggedInContainer = ({children, curActiveScreen}) => {
    const navigate = useNavigate();
    const [createPlaylistModalOpen, setCreatePlaylistModalOpen] =
        useState(false);
    const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);

    const {
        currentSong,
        setCurrentSong,
        soundPlayed,
        setSoundPlayed,
        isPaused,
        setIsPaused,
    } = useContext(songContext);

    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        // the following if statement will prevent the useEffect from running on the first render.
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        if (!currentSong) {
            return;
        }
        changeSong(currentSong.track);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSong && currentSong.track]);

    const addSongToPlaylist = async (playlistId) => {
        const songId = currentSong._id;

        const payload = {playlistId, songId};
        const response = await makeAuthenticatedPOSTRequest(
            "/playlist/add/song",
            payload
        );
        if(response._id){
            setAddToPlaylistModalOpen(false)
        }
    };

    const playSound = () => {
        if (!soundPlayed) {
            return;
        }
        soundPlayed.play();
    };

    const changeSong = (songSrc) => {
        if (soundPlayed) {
            soundPlayed.stop();
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true,
        });
        setSoundPlayed(sound);
        sound.play();
        setIsPaused(false);
    };

    const pauseSound = () => {
        soundPlayed.pause();
    };

    const togglePlayPause = () => {
        if (isPaused) {
            playSound();
            setIsPaused(false);
        } else {
            pauseSound();
            setIsPaused(true);
        }
    };
    const handleLogout = () => {
        // Remove token from cookies
        removeCookie('token');
        // Redirect to login page
        navigate('/home');
    };

    
    const refreshPage = () => {
        window.location.reload(); 
    };

    return (
        <div className="h-full w-full bg-green-200">
            {createPlaylistModalOpen && (
                <CreatePlaylistModal
                    closeModal={() => {
                        setCreatePlaylistModalOpen(false);
                    }}
                />
            )}
            {addToPlaylistModalOpen && (
                <AddToPlaylistModal
                    closeModal={() => {
                        setAddToPlaylistModalOpen(false);
                    }}
                    addSongToPlaylist={addSongToPlaylist}
                />
            )}
            <div className={`${currentSong ? "h-full" : "h-full"} w-full flex`}>
                {/* This first div will be the left panel */}
                <div className="h-full w-1/5 bg-green-400 flex flex-col justify-between pb-10">
                    <div>
                        {/* This div is for logo */}
                        <div className="logoDiv p-6 flex" onClick={refreshPage}>
                        <Icon icon="arcticons:recipe-keeper" color="black" width="40" />
                        <div className="text-4xl text-black font-teko"><Link to="/home">Yum</Link></div>
                        </div>
                        <div className="py-5">
                             <IconText
                                iconName={"heroicons-solid:home"}
                                displayText={"Home"}
                                targetLink={"/home"}
                                active={curActiveScreen === "home"}
                            /> 
                            <IconText
                                iconName={"gala:search"}
                                displayText={"Search"}
                                active={curActiveScreen === "search"}
                                targetLink={"/search"}
                            />
                            <IconText
                            iconName={"solar:upload-bold"}
                            displayText={"Upload Recipe"}
                            active={curActiveScreen === "upload"}
                            targetLink="/uploadsong"
                            />
                            <IconText
                                iconName={
                                    "game-icons:fork-knife-spoon"
                                }
                                displayText={"My Recipe"}
                                targetLink={"/myMusic"}
                                active={curActiveScreen === "myMusic"}
                            />
                        </div>
                       
                    </div>
                    
                </div>
                {/* This second div will be the right part(main content) */}
                <div className="h-full w-4/5 bg-app-gray overflow-auto">
                    <div className="navbar w-full h-1/10 bg-green-200  flex items-center justify-end">
                        <div className="w-1/9flex h-full">
                            <div className="w-full flex justify-end items-center rounded-lg">
                            <button
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
                            >
                                <Link to ="/home">Logout</Link>
                            </button>
                            </div>
                            <div className="w-1/3 flex justify-around h-full items-center">
                            
                              
                            </div>
                        </div>
                    </div>
                    <div className="content p-8 pt-0 overflow-auto">
                        {children}
                    </div>
                </div>
            </div>
            {/* This div is the current playing song */}
            
        </div>
    );
};

export default LoggedInContainer;