import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const signup = async () => {
    try {
      localStorage.removeItem("token");
      const res = await api.post("auth/signup/", { username, email, password });
      setMsg(res.data.message);
      navigate("/login");
    } catch (err) {
      setMsg(err.response?.data?.detail || err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#DFEGES] to-[#EBEFF0] p-4">
      <div className="w-full max-w-md p-8 rounded-2xl
                      bg-gradient-to-br from-[#FCFCFC] to-[#EBECED]
                      border border-white/70
                      shadow-[0_40px_40px_rgba(0,0,0,0.1),0_40px_40px_rgba(0,0,0,0.1),
                              0_-24px_48px_rgba(255,255,255,0.8),
                              10px_1px_4px_rgba(0,0,0,0.25)]
                      flex flex-col space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Signup</h1>
        <input
          placeholder="Username"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Email"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={signup}
          className="bg-[#000000] text-white py-2 rounded-lg transition"
        >
          Signup
        </button>
        {msg && <p className="text-red-500 text-center">{msg}</p>}
      </div>
    </div>
  );
}
