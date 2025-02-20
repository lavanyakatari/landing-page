// import React from "react";

// export const RegisterFrom = () => {
//   return (
//     <form className="w-[450px] p-4 space-y-6 rounded-lg shadow-xl border">
//       <h1 className="text-4xl text-center font-bold ">Register</h1>
//       <div className="flex flex-col gap-2">
//         <label className="font-bold">Email</label>
//         <input className="border p-2 rounded-md" type="email" name="" id="" />
//       </div>
//       <div className="flex flex-col gap-2">
//         <label className="font-bold">User Name</label>
//         <input className="border p-2 rounded-md" type="text" name="" id="" />
//       </div>
//       <div className="flex flex-col gap-2">
//         <label className="font-sans">Password</label>
//         <input
//           className="border p-2 rounded-md"
//           type="password"
//           name=""
//           id=""
//         />
//       </div>
//       <div>
//         <button className="bg-blue-500 p-2 text-white w-full rounded-lg">
//           Sing up
//         </button>
//       </div>
//     </form>
//   );
// };

import React, { useState } from "react";

interface FormData {
  username: string;
  email: string;
  password: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
}

export const RegisterFrom = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Email is invalid";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      console.log("Form submitted", formData);
      // Optionally reset the form
      setFormData({ username: "", email: "", password: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[450px] flex flex-col shadow-xl p-2 space-y-6 rounded-lg bg-blue-300"
    >
      <h1 className="font-bold text-center text-3xl">Register</h1>
      {/* Username Field */}
      <div className="flex flex-col">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        {errors.username && (
          <text style={{ color: "red" }}>{errors.username}</text>
        )}
      </div>

      {/* Email Field */}
      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded-lg"
        />

        {errors.email && (
          <text style={{ color: "red", justifyContent: "center" }}>
            {errors.email}
          </text>
        )}
      </div>

      {/* Password Field */}
      <div className="flex flex-col">
        {" "}
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded-md"
        />
        {errors.password && (
          <text style={{ color: "red" }}>{errors.password}</text>
        )}
      </div>

      {/* Submit Button */}
      <button className="w-full bg-blue-300 border p-2   " type="submit">
        Register
      </button>
    </form>
  );
};
