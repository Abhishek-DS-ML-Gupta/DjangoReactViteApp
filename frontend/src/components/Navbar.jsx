import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50 px-4">
      {/* OUTER GLOW */}
      <div className="relative w-full max-w-[720px]">
        <div className="absolute inset-[-14px] rounded-full bg-gradient-to-b from-[#DFEGES] to-[#EBEFF0] blur-xl -z-10" />

        {/* NAVBAR */}
        <nav
          className="
            flex items-center justify-between
            px-6 py-4
            w-full
            rounded-full
            bg-gradient-to-b from-[#FCFCFC] to-[#EBECED]
            border border-white/70
            backdrop-blur-xl

            shadow-[0_40px_1px_rgba(0,0,0,0.1),
                    0_-24px_48px_rgba(255,255,255,0.8),
                    10px_1px_4px_rgba(0,0,0,0.25)]
          "
        >
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-neutral-900"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="fill-neutral-900"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="hidden sm:block">StudyMate</span>
          </Link>

          {/* LINKS */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="
                flex items-center gap-2
                px-4 py-2
                rounded-full
                text-sm font-medium text-neutral-900
                hover:bg-black/5 transition
              "
            >
              <LoginIcon />
              <span className="hidden sm:block">Login</span>
            </Link>

            <Link
              to="/signup"
              className="
                flex items-center gap-2
                px-5 py-2
                rounded-full
                text-sm font-medium
                bg-neutral-900 text-white
                hover:bg-black transition
              "
            >
              <SignupIcon />
              <span className="hidden sm:block">Sign Up</span>
            </Link>

            {/* --- MENU OPENER BUTTON (Link to Signup) --- */}
            <Link
              to="/signup"
              className="
                bg-black text-white 
                w-10 h-10 
                rounded-full 
                flex items-center justify-center 
                shadow-lg shadow-black/20 
                hover:scale-105 active:scale-95 
                transition-all duration-300
                group
              "
            >
              {/* Right Arrow Icon */}
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

/* ICONS */

function LoginIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M10 17l5-5-5-5v10zM4 4h10v2H6v12h8v2H4z" />
    </svg>
  );
}

function SignupIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
    </svg>
  );
}