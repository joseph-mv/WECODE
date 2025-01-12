import React from 'react';

const SignInButton: React.FC = () => {
  const handleGoogleSignIn = () => {
    
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="ml-auto px-4 py-2 bg-blue-600 text-white rounded"
    >
      Sign Up with Google
    </button>
  );
};

export default SignInButton;
