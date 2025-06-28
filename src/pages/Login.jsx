import React from "react";
import {Link} from "react-router-dom";

const Login = () =>{
    return(
       <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block">
                <img src="../images/login.jpg" alt="Login" className="w-full h-full object-cover"/>
            </div>

            <div className="p-8">
                <h2 className="text-3xl font-bold text-green-600 mb-2">Welcome Back</h2>
                <p className="text-gray-500 mb-6">Login to continue managing your health</p>
                
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input type="email" placeholder="Enter Your Email" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"/>
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <input type="password" placeholder="Enter your Password" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"/>
                    </div>

                    <div>
                        <Link to="/forget-password" className="text-sm text-green-600 hover:underline">Forget Password?</Link>
                    </div>

                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"><Link to="/">Login</Link></button>
                </form>

                <p className="text-sm text-center text-gray-600 mt-6">
                     Don’t have an account?{" "}
                     <Link to="/register" className="text-green-600 hover:underline">
                Register here </Link>
                </p>
            </div>
        </div>
       </div>
    )
}

export default Login