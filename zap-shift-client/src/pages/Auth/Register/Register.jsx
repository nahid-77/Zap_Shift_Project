import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegistration = (data) => {
        console.log(data);
    };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" {...register("email", {required: true})} placeholder="Email" />
          {
            errors.email?.type === 'required' && 
          (<p className="text-red-500">Email is required</p>)
          }
          <label className="label">Password</label>
          <input type="password" className="input" {...register("password", {required: true, minLength: 6,})} placeholder="Password" />
          {
            errors.password?.type === 'required' && 
          (<p className="text-red-500">Password is required</p>)
          }
          {
            errors.password?.type === 'minLength' && 
          (<p className="text-red-500">Password must be at least 6 characters</p>)
          }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
