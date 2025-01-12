import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


interface AuthGoogleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthGoogle({ isOpen, onClose }: AuthGoogleProps) {
  const [isLogin, setIsLogin] = useState(true);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  if (!isOpen) return null;

  const toggleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleGoogleSignIn = () => {
    window.location.href = BASE_URL+'/auth/google';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full sm:max-w-md max-w-[90vw] relative overflow-hidden shadow-xl transform transition-all font-trebuchet">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
         <FontAwesomeIcon icon={faX}/>
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-2">
            {isLogin ? 'Login' : 'Signup'}
          </h2>
          <p className="text-center text-gray-600 mb-8">
           Please sign up or login with your details
          </p>

            <div onClick={toggleSwitch} className='bg-gray-500 text-white w-40 mx-auto rounded-md flex items-center justify-evenly'>
                <span className={`${isLogin?"bg-gray-800 animate-right2left":"  "}  p-2 rounded-md w-20 text-center`}>Login</span>
                <span className={`${!isLogin?"bg-gray-800 animate-left2right":""}  p-2 rounded-md w-20 text-center`}>Sign up</span>
            </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>

          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium">Continue with Google</span>
          </button>

        </div>
      </div>
    </div>
  );
}