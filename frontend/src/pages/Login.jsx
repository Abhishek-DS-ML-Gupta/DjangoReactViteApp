import { useState } from "react";
import axios from "../api/axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("auth/login/", { username, password });
      localStorage.setItem("token", res.data.access);
      setMsg("Login successful!");
    } catch (err) {
      setMsg("Login failed: " + err.response.data.detail || err.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          placeholder="Username"
          className="border p-2 w-full mb-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className="border p-2 w-full mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={login}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >
          Login
        </button>
        <p className="mt-4 text-gray-700">{msg}</p>
      </div>
    </div>
  );
}
