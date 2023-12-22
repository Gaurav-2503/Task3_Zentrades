import { useState } from "react";
import logo from '../assets/logo.png'


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);

    const handleUsernameChange = (event) => {
      const value = event.target.value;
      setUsername(value);
      // Validate email format
      setIsValidEmail(/^\S+@\S+\.\S+$/.test(value));
    };

    const handlePasswordChange = (event) => {
      const value = event.target.value;
      setPassword(value);
      // Validate password format
      setIsValidPassword(
        /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+=-]{8,}$/.test(value)
      );
    };

    return (
      <div className="bg-black py-14 text-white rounded-3xl">
        <div className="logo flex flex-col items-center">
          <div className="logoImg h-[62px] w-[62px]">
            <img
              src={logo}
              className="h-[62px] w-[62px]"
            ></img>
          </div>
          <div className="mb-6">
            <div className="text-[#71be58] text-[52px] font-bold">
              SMART
              <span className="text-white text-[52px] font-bold">
                S<span className="ServE">E</span>RV
              </span>
            </div>
          </div>
        </div>

        <div className="ipt">
          <div className="">
            <input
              type="text"
              placeholder="Username"
              className={`text-black w-3/4 border my-2 py-1.5 px-4 rounded-sm ${
                isValidEmail ? "" : "border-red"
              }`}
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          {!isValidEmail && (
            <p className="text-red-500 text-sm">Invalid email format</p>
          )}

          <div className="">
            <input
              type="password"
              placeholder="Password"
              className={` text-black w-3/4 border my-2 py-1.5 px-4 rounded-sm ${
                isValidPassword ? "" : "border-red"
              }`}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {!isValidPassword && (
            <p className="text-red-500 text-sm">
              Password must contain an uppercase letter, a number, and only @ as
              a special character.
            </p>
          )}
        </div>

        <div>
          <button className="bg-[#71be58] w-3/4 py-1.5 px-2 rounded-md my-8 text-white font-bold">
            Login
          </button>

          <div className="text-center underline hover:cursor-pointer -mb-2  text-[#7a7a7a]">
            <span className="">Forget your password?</span>
          </div>
        </div>
      </div>
    );

}

export default Login;
