// // import React, { useContext, useEffect, useState } from 'react';
// // import { ShopContext } from '../context/ShopContext';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const Login = () => {
// //   const [currentState, setCurrentState] = useState('Login');
// //   const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

// //   const [name, setName] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [email, setEmail] = useState('');

// //   const onSubmitHandler = async (event) => {
// //     event.preventDefault();
// //     try {
// //       const endpoint = currentState === 'Sign Up' ? '/api/user/register' : '/api/user/login';
// //       const data = currentState === 'Sign Up' ? { name, email, password } : { email, password };
// //       const response = await axios.post(backendUrl + endpoint, data);
      
// //       if (response.data.success) {
// //         setToken(response.data.token);
// //         localStorage.setItem('token', response.data.token);
// //         toast.success(`${currentState} Successful!`);
// //       } else {
// //         toast.error(response.data.message);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       toast.error(error.message);
// //     }
// //   };

// //   useEffect(() => {
// //     if (token) {
// //       navigate('/');
// //     }
// //   }, [token]);

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-900 via-gray-800 to-gray-900 p-6">
// //       <form onSubmit={onSubmitHandler} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-md w-full text-white border border-white/20">
// //         <h2 className="text-3xl font-semibold text-center mb-6 drop-shadow-md">
// //           {currentState === 'Login' ? 'Welcome Back' : 'Create Account'}
// //         </h2>
// //         {currentState === 'Sign Up' && (
// //           <input 
// //             type="text" 
// //             placeholder="Full Name" 
// //             value={name} 
// //             onChange={(e) => setName(e.target.value)}
// //             className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 mb-4"
// //             required
// //           />
// //         )}
// //         <input 
// //           type="email" 
// //           placeholder="Email Address" 
// //           value={email} 
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 mb-4"
// //           required
// //         />
// //         <input 
// //           type="password" 
// //           placeholder="Password" 
// //           value={password} 
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 mb-4"
// //           required
// //         />
// //         <div className="flex justify-between text-sm mb-4">
// //           <p className="cursor-pointer hover:text-blue-400 transition">Forgot password?</p>
// //           <p className="cursor-pointer hover:text-blue-400 transition" onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}>
// //             {currentState === 'Login' ? 'Create an account' : 'Login Here'}
// //           </p>
// //         </div>
// //         <button 
// //           type="submit" 
// //           className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg text-lg font-medium shadow-lg "
// //         >
// //           {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const endpoint = currentState === 'Sign Up' ? '/api/user/register' : '/api/user/login';
      const data = currentState === 'Sign Up' ? { name, email, password } : { email, password };
      const response = await axios.post(backendUrl + endpoint, data);
      
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        toast.success(`${currentState} Successful!`);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-orange-50 to-gray-50">
      <form onSubmit={onSubmitHandler} className="w-full max-w-xl p-12 bg-red-900 rounded-xl border-2 border-white hover:border-red-500 transition-all shadow-xl mx-4">
        <h2 className="text-4xl text-white text-center mb-10 font-semibold">
          {currentState === 'Login' ? 'Welcome Back' : 'Create Account'}
        </h2>
        
        {currentState === 'Sign Up' && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-6 p-3 rounded-lg bg-orange-100 border-2 border-transparent hover:border-red-500 transition-all text-lg"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg bg-orange-100 border-2 border-transparent hover:border-red-500 transition-all text-lg"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg bg-orange-100 border-2 border-transparent hover:border-red-500 transition-all text-lg"
          required
        />
        <div className="flex justify-between text-white mb-8 text-lg">
          <p className="cursor-pointer hover:text-orange-400 transition-all">
            Forgot password?
          </p>
          <p 
            className="cursor-pointer hover:text-orange-400 transition-all"
            onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
          >
            {currentState === 'Login' ? 'Create an account' : 'Login Here'}
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-all text-lg font-medium"
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;