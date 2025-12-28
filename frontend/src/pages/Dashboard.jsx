import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserIcon,
  FireIcon as FireSolid,
  ClockIcon,
  ClipboardDocumentListIcon,
  TrophyIcon,
  ChartBarIcon,
  PlayIcon,
  PauseIcon,
  UserGroupIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // --- Timer State ---
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // --- Notes State ---
  const [notes, setNotes] = useState([
    { id: 1, text: "Review for Math test", done: false },
    { id: 2, text: "Email Professor", done: true },
  ]);

  const toggleNote = (id) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, done: !note.done } : note)));
  };

  // --- Data ---
  const leaderboardData = [
    { name: "Anya", xp: 12300 },
    { name: "Ben", xp: 1100 },
    { name: "Chlo", xp: 500 },
  ];

  // --- Custom Styles (Updated Shadow) ---
  // Reduced Y shadow from 40px to 20px and lowered opacity for a subtler look
  const cardStyle = {
    background: "linear-gradient(to bottom, #FCFCFC, #EBECED)",
    boxShadow: `
      0px 20px 0px 0px rgba(0,0,0,0.08),  /* Reduced Down Shadow */
      0px -20px 40px 0px rgba(255,255,255,0.9), /* Soft Highlight */
      0px 1px 2px 0px rgba(0,0,0,0.15) /* Inner Detail */
    `,
    border: "1px solid rgba(255, 255, 255, 0.7)",
  };

  // --- API Fetch ---
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("auth/me/");
        setUser(res.data);
      } catch (err) {
        console.error(err);
        // Fallback only if API fails
        setUser({ username: "Alex", email: "alex@student.com" });
      }
    };
    fetchUser();
  }, []);

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400 bg-[#EBECED]">
        Loading...
      </div>
    );

  // Menu Items Configuration
  const menuItems = [
    { icon: HomeIcon, label: "Dashboard", active: true },
    { icon: AcademicCapIcon, label: "Courses", active: false },
    { icon: ClipboardDocumentListIcon, label: "Tasks", active: false },
    { icon: ChartBarIcon, label: "Analytics", active: false },
    { icon: Cog6ToothIcon, label: "Settings", active: false },
  ];

  return (
    <div className="min-h-screen bg-[#EBECED] text-gray-800 font-sans overflow-hidden relative">
      
      {/* --- LEFT SIDEBAR --- */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black z-20 backdrop-blur-sm"
            />
            
            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-full w-72 bg-white/90 backdrop-blur-xl z-30 shadow-2xl border-r border-white/50 flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800 tracking-tight">Menu</h2>
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ type: "spring" }}
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <XMarkIcon className="h-6 w-6 text-gray-600" />
                </motion.button>
              </div>

              <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className={`flex items-center space-x-4 p-4 rounded-2xl cursor-pointer transition-colors ${
                      item.active ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50 text-gray-500"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring" }}
                    >
                      <item.icon className="h-6 w-6" />
                    </motion.div>
                    <span className="font-semibold">{item.label}</span>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 bg-gray-50 m-4 rounded-2xl border border-gray-100">
                <p className="text-xs text-gray-400 uppercase font-bold mb-2">Daily Goal</p>
                <div className="flex justify-between text-sm font-semibold text-gray-700 mb-1">
                  <span>4/5 Tasks</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- MAIN CONTENT AREA --- */}
      <motion.div
        animate={{ marginLeft: isSidebarOpen ? 0 : 0 }}
        transition={{ duration: 0.3 }}
        className="p-4 md:p-8 transition-all duration-300"
      >
        
        {/* Header */}
        <header className="flex justify-between items-center mb-10 max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            {/* Opener Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSidebarOpen(true)}
              className="p-3 rounded-2xl bg-white shadow-sm border border-white/50 hover:shadow-md transition"
            >
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            </motion.button>

            <div>
              <p className="text-gray-500 text-sm font-medium">Welcome back,</p>
              {/* DYNAMIC USERNAME HERE */}
              <h1 className="text-3xl font-bold text-gray-800">Good Morning, {user.username}!</h1>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => { localStorage.removeItem("token"); navigate("/"); }}
              className="px-5 py-2.5 bg-white text-gray-600 font-semibold rounded-2xl shadow-sm border border-white/50 hover:text-blue-600 transition text-sm"
            >
              Logout
            </motion.button>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. GPA Stats Card */}
          <motion.div
            whileHover={{ y: -10 }}
            style={cardStyle}
            className="p-8 rounded-[32px] flex flex-col justify-between h-48 relative overflow-hidden group"
          >
            <div className="absolute -right-6 -top-6 h-32 w-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition"></div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Current GPA</p>
                <h2 className="text-6xl font-black text-gray-800 mt-1 tracking-tight">3.7</h2>
              </div>
              <div className="h-12 w-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                <ChartBarIcon className="h-6 w-6" />
              </div>
            </div>
            <div className="inline-flex items-center space-x-2 text-emerald-600 font-bold bg-emerald-50 px-3 py-1.5 rounded-xl">
              <span>↑</span>
              <span className="text-sm">Top 5% of Class</span>
            </div>
          </motion.div>

          {/* 2. Course Card (Calculus II) */}
          <motion.div
            whileHover={{ y: -10 }}
            style={cardStyle}
            className="p-8 rounded-[32px] flex flex-col justify-between h-48 relative overflow-hidden group"
          >
             <div className="absolute -right-4 -bottom-4 h-32 w-32 bg-orange-400/10 rounded-full blur-2xl group-hover:bg-orange-400/20 transition"></div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Active Course</p>
                <h3 className="text-2xl font-black text-gray-800 mt-1">Calculus II</h3>
              </div>
              <div className="h-12 w-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500">
                <AcademicCapIcon className="h-6 w-6" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-gray-500 mb-2 uppercase">
                <span>Completion</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-orange-400 to-red-400 h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="mt-4 flex items-center space-x-2 text-orange-600 font-black">
                <FireSolid className="h-5 w-5 animate-pulse" />
                <span>12 Day Streak</span>
              </div>
            </div>
          </motion.div>

          {/* 3. Focus Timer */}
          <motion.div
            whileHover={{ y: -10 }}
            style={cardStyle}
            className="p-8 rounded-[32px] flex flex-col items-center justify-center h-48 relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
             <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-3 text-blue-500 font-bold text-sm uppercase tracking-wide">
                <ClockIcon className="h-4 w-4" />
                <span>Focus Mode</span>
              </div>
              <div className="text-5xl font-black text-gray-800 mb-4 tracking-tighter">
                {formatTime(timeLeft)}
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="bg-gray-800 text-white p-3 rounded-2xl shadow-lg hover:bg-blue-600 transition-colors"
              >
                {isTimerRunning ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5" />}
              </motion.button>
             </div>
          </motion.div>

          {/* 4. Leaderboard */}
          <motion.div
            whileHover={{ y: -10 }}
            style={cardStyle}
            className="p-8 rounded-[32px] h-auto min-h-[240px]"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                <TrophyIcon className="h-6 w-6" />
              </div>
              <h3 className="font-black text-gray-800 text-lg">Leaderboard</h3>
            </div>
            <div className="space-y-4">
              {leaderboardData.map((student, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center justify-between p-3 rounded-2xl transition-colors ${
                    idx === 0 ? 'bg-yellow-50' : 'bg-white/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`font-black text-lg w-6 ${idx === 0 ? 'text-yellow-600' : 'text-gray-400'}`}>
                      {idx + 1}
                    </span>
                    <div className="h-9 w-9 bg-gradient-to-tr from-gray-200 to-white rounded-full flex items-center justify-center text-xs font-bold text-gray-600 shadow-inner border border-white">
                      {student.name[0]}
                    </div>
                    <span className="font-bold text-gray-700">{student.name}</span>
                  </div>
                  <span className="font-black text-blue-600">{student.xp} XP</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 5. Quick Notes */}
          <motion.div
            whileHover={{ y: -10 }}
            style={cardStyle}
            className="p-8 rounded-[32px] h-auto min-h-[240px]"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                <ClipboardDocumentListIcon className="h-6 w-6" />
              </div>
              <h3 className="font-black text-gray-800 text-lg">Quick Notes</h3>
            </div>
            <div className="space-y-3">
              {notes.map((note) => (
                <motion.div
                  key={note.id}
                  whileHover={{ x: 5 }}
                  onClick={() => toggleNote(note.id)}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <div className={`h-6 w-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                    note.done ? 'bg-blue-500 border-blue-500' : 'border-gray-300 group-hover:border-blue-400'
                  }`}>
                    {note.done && <div className="h-2.5 w-2.5 bg-white rounded-sm"></div>}
                  </div>
                  <span className={`font-medium transition-colors ${
                    note.done ? 'text-gray-400 line-through' : 'text-gray-700'
                  }`}>
                    {note.text}
                  </span>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ x: 5 }}
                className="mt-2 text-blue-600 font-bold text-sm flex items-center space-x-1"
              >
                <span>+ Add New Task</span>
              </motion.button>
            </div>
          </motion.div>

          {/* 6. Friends Online */}
          <motion.div
            whileHover={{ y: -10 }}
            style={cardStyle}
            className="p-8 rounded-[32px] flex flex-col justify-center h-auto min-h-[240px]"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                <UserGroupIcon className="h-6 w-6" />
              </div>
              <h3 className="font-black text-gray-800 text-lg">Friends Online</h3>
            </div>
            <div className="flex justify-between items-center px-2">
              {[1, 2, 3].map((friend) => (
                <motion.div
                  key={friend}
                  whileHover={{ scale: 1.15, y: -5 }}
                  className="relative group cursor-pointer"
                >
                   <div className="h-14 w-14 rounded-2xl bg-gray-200 border-2 border-white shadow-sm overflow-hidden">
                     <img src={`https://i.pravatar.cc/150?u=${friend}`} alt="Friend" className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition" />
                   </div>
                   <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-12 w-12 rounded-2xl bg-gray-100 border border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 font-bold text-xs leading-tight cursor-pointer hover:bg-white transition"
              >
                <span>+2</span>
                <span>More</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}