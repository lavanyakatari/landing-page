import { useState } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      setEmail("");
      setPassword("");
      alert("Logged in successfully!");
    } else {
      alert("please fill in both fields.");
    }
  };

  return (
    <form
      className="p-4 w-[350px] space-y-6 rounded-lg shadow-xl border bg-blue-300"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center font-bold">LoginPage</h1>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Gmail</label>
        <input
          className="p-2 rounded-lg border"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          className="p-2 rounded-lg"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="bg-blue-300 rounded-md w-full" type="submit">
        Submit
      </button>
    </form>
  );
};
