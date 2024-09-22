import {useState} from "react";
import {Icon} from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import IconText from "../components/shared/IconText";
import TextInput from "../components/shared/TextInput";
import TextWithHover from "../components/shared/TextWithHover";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelpers";
import {useNavigate} from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";

const UploadSong = () => {
    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [track, setTrack] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState();
    const navigate = useNavigate();

    const submitSong = async () => {
        const data = {name, thumbnail, track};
        const response = await makeAuthenticatedPOSTRequest(
            "/song/create",
            data
        );
        if (response.err) {
            alert("Could not create song");
            return;
        }
        alert("Success");
        navigate("/home");
    };

    return (
        <LoggedInContainer curActiveScreen="upload">
        <div className="h-full w-full flex">
            
                <div className="content p-3 pt-0 overflow-auto">
                    <div className="text-2xl font-semibold mb-5 text-green-800 mt-8">
                        Upload Your Recipe
                    </div>
                    <div className="w-full flex flex-col">
                        <div className="w-full">
                            <TextInput
                                label="Name"
                                labelClassName={"text-white"}
                                placeholder="Name"
                                value={name}
                                setValue={setName}
                            />
                        </div>
                        <div className="w-full">
                            <TextInput
                                label="Thumbnail"
                                labelClassName={"text-white"}
                                placeholder="Thumbnail"
                                value={thumbnail}
                                setValue={setThumbnail}
                            />
                        </div>
                        <div className="w-full">
                            <TextInput
                                label="Recipe"
                                labelClassName={"text-white"}
                                placeholder="Recipe"
                                value={track}
                                setValue={setTrack}
                            />
                        </div>
                    </div>
                   <div className="text-green-200">
                    hello
                   </div>
                    <div
                        className="bg-white w-40 flex items-center justify-center p-4 rounded-full text-green-800 cursor-pointer font-semibold"
                        onClick={submitSong}
                    >
                        Submit
                    </div>
                </div>
            </div>
        
        </LoggedInContainer>
    );
};

export default UploadSong;
