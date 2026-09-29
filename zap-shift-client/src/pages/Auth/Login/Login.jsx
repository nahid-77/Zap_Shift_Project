import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const { signInUser } = useAuth();

    const handleLogin = (data) => {
        console.log(data);
        signInUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <h3 className="text-3xl text-center">Welcome back</h3>
      <p className="text-center">Login with ZapShift</p>
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" {...register("email", {required: true, })} placeholder="Email" />
          {
            errors.email?.type === 'required' && 
                <p className="text-red-500">Email is required</p>
            
          }

          <label className="label">Password</label>
          <input type="password" className="input" {...register("password", {required: true, minLength: 6})} placeholder="Password" />
          {
            errors.password?.type==='minLength' && 
                <p className="text-red-500">Password must be at least 6 characters</p>
          }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">
            Login
          </button>
        </fieldset>
        <p>
          New to Zap Shift? 
          <Link className="text-blue-400 underline pl-1" to='/register' >Register</Link>
        </p>
      </form>
      <SocialLogin/>
    </div>
  );
};

export default Login;
