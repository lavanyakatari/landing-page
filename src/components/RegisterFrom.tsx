import React from "react";

const RegisterFrom = () => {
  return (
    <form className="w-[450px] p-4 space-y-6 rounded-lg shadow-xl border">
      <h1 className="text-4xl text-center font-bold ">Register</h1>
      <div className="flex flex-col gap-2">
        <label className="font-bold">Email</label>
        <input className="border p-2 rounded-md" type="email" name="" id="" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold">User Name</label>
        <input className="border p-2 rounded-md" type="text" name="" id="" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-sans">Password</label>
        <input
          className="border p-2 rounded-md"
          type="password"
          name=""
          id=""
        />
      </div>
      <div>
        <button className="bg-blue-500 p-2 text-white w-full rounded-lg">
          Sing up
        </button>
      </div>
    </form>
  );
};

export default RegisterFrom;
