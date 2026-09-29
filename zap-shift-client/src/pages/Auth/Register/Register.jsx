import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser } = useAuth();

    const handleRegistration = (data) => {
        // console.log(data);
        registerUser(data.email, data.password)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.log(error);
        })
    };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
       <h3 className="text-3xl text-center">Create an Account</h3>
      <p className="text-center">Register with ZapShift</p>
      <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" {...register("email", {required: true})} placeholder="Email" />
          {
            errors.email?.type === 'required' && 
          (<p className="text-red-500">Email is required</p>)
          }
          <label className="label">Password</label>
          <input type="password" className="input" {...register("password", {required: true, minLength: 6, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/})} placeholder="Password" />
          {
            errors.password?.type === 'required' && 
          (<p className="text-red-500">Password is required</p>)
          }
          {
            errors.password?.type === 'minLength' && 
          (<p className="text-red-500">Password must be at least 6 characters</p>)
          }
          {
            errors.password?.type === 'pattern' && 
          (<p className="text-red-500">Password must contain at least one uppercase letter, one lowercase letter, one number and one special character</p>)
          }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
         <p>
          Already have an account? 
          <Link className="text-blue-400 underline pl-1" to='/login' >Login</Link>
        </p>
      </form>
      <SocialLogin/>
    </div>
  );
};

export default Register;
