import { useState } from "react";
import { useCookies } from "react-cookie";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import video from "../assets/video/homebgvideo.mp4";
import Footer from "./Footer";

const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const signUp = async () => {
    const data = { email, password, username, firstName, lastName };
    const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);

    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      alert("Success! Your account has been created.");
      navigate("/home");
    } else {
      alert("Sign up failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Background with video */}
      <div className="w-full h-full flex items-center justify-center bg-green-200 relative flex-grow">
        <video
          src={video}
          autoPlay
          muted
          loop
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Signup Box */}
        <div className="relative z-10 w-full max-w-xl p-8 rounded-lg shadow-lg mx-auto my-10 bg-white/90">
          {/* Logo */}
          <div className="logo p-5 w-full space-x-1 border-b border-solid border-black flex justify-center">
            <Icon icon="arcticons:recipe-keeper" color="black" width="40" />
            <div className="text-4xl text-black font-teko">
              <Link to="/home">Yum</Link>
            </div>
          </div>

          {/* Form Section */}
          <div className="inputRegion py-5 flex items-center text-black justify-center flex-col">
            <div className="w-full flex justify-between items-center space-x-8">
              <TextInput
                label="First Name"
                placeholder="Enter Your First Name"
                className="my-6"
                value={firstName}
                setValue={setFirstName}
              />
              <TextInput
                label="Last Name"
                placeholder="Enter Your Last Name"
                className="my-6"
                value={lastName}
                setValue={setLastName}
              />
            </div>

            <TextInput
              label="Email address"
              placeholder="Enter your email"
              className="my-6"
              value={email}
              setValue={setEmail}
            />

            <TextInput
              label="Username"
              placeholder="Enter your username"
              className="mb-6"
              value={username}
              setValue={setUsername}
            />

            <PasswordInput
              label="Create Password"
              placeholder="Enter a strong password"
              value={password}
              setValue={setPassword}
            />

            {/* Button */}
            <div className="w-full flex items-center justify-center my-8">
              <button
                type="button"
                className="bg-black font-semibold p-3 px-10 rounded-full text-white hover:bg-gray-800 transition"
                onClick={(e) => {
                  e.preventDefault();
                  signUp();
                }}
              >
                Sign Up
              </button>
            </div>

            {/* Divider */}
            <div className="w-full border border-solid border-gray-300"></div>

            {/* Redirect to login */}
            <div className="my-6 font-semibold text-lg">
              Already have an account?
            </div>
            <div className="border border-red-400 w-full flex items-center text-gray-600 justify-center py-4 rounded-full font-bold hover:text-white hover:bg-red-400 transition-colors duration-300 ease-in-out">
              <Link to="/login">LOG IN INSTEAD</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignupComponent;
