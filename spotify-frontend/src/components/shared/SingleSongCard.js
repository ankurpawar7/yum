import {useContext} from "react";
import songContext from "../../contexts/songContext";

const SingleSongCard = ({info, playSound}) => {
    const {currentSong, setCurrentSong} = useContext(songContext);

    return (
        <div
            className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm"
            onClick={() => {
                setCurrentSong(info);
            }}
        >
            <div
                className="w-20 h-20 bg-cover bg-center"
                style={{
                    backgroundImage: `url("${info.thumbnail}")`,
                }}
            ></div>
            <div className="flex w-full">
                <div className="text-green-700 flex justify-bottom  flex-col pl-4 w-full">
                    <div className="cursor-pointer hover:underline">
                        {info.name}
                    </div>
                    <div className="text-xs text-gray-900 cursor-pointer hover:underline">
                        {info.artist.firstName + " " + info.artist.lastName}
                    </div>
                </div>
                <div className="w-7/9 flex items-center justify-center text-gray-900 text-sm">
                    <div>{info.track}</div>
                </div>
            </div>
        </div>
    );
};

export default SingleSongCard;
