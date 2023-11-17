import React from "react";
import "./adminSignUp.css";

export default function AdminSignUp() {
  return (
    <div className='container'>
      <h1 className='signHeader'>Admin SignUp</h1>
      <span>Email</span>
      <span>
        <input name='email' type='text' />
      </span>
    </div>
  );
}
