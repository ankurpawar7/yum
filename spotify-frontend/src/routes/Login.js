import {useState} from "react";
import {Icon} from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import {Link, useNavigate} from "react-router-dom";
import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelpers";
import {useCookies} from "react-cookie";
import WrongInfoModal from "../modals/WrongInfoModal.js";

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const [createUnAuthModalOpen, setCreateUnAuthModalOpen] =
        useState(false);

    const login = async () => {
        const data = {email, password};
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/login",
            data
        );
        if (response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, {path: "/", expires: date});
            
            navigate("/home");
        } else {
            alert("Failure");
            setCreateUnAuthModalOpen(true);
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center bg-green-200">
            {createUnAuthModalOpen && (
                <WrongInfoModal
                    closeModal={() => {
                        setCreateUnAuthModalOpen(false);
                    }}
                />
            )}
            <div className="logo p-5 w-full space-x-1 border-b border-solid border-green-400 flex justify-center">
            <Icon icon="arcticons:recipe-keeper" color="black" width="40" />
            <div className="text-4xl text-black font-teko"><Link to="/home">Yum</Link></div>
            </div>
            <div className="inputRegion w-1/3 py-5 flex items-center justify-center flex-col p-8 rounded-lg">
                {/*  I will have my 2 inputs(email and password) and I will have my sign up instead button*/}
                
                <TextInput
                    label="Email address"
                    placeholder="Email address"
                    className="my-6"
                    value={email}
                    setValue={setEmail}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                />
                <div className=" w-full flex items-center justify-end my-8">
                    <button
                        className="bg-green-400 font-semibold p-3 px-10 rounded-full"
                        onClick={(e) => {
                            e.preventDefault();
                            login();
                        }}
                    >
                        LOG IN
                    </button>
                </div>
                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-lg">
                    Don't have an account?
                </div>
                <div className="border border-green-400 text-gray-600 w-full flex items-center justify-center py-4 rounded-full font-bold">
                    <Link to="/signup">SIGN UP FOR YUM</Link>
                </div>
                </div>
        </div>
    );
};

export default LoginComponent;