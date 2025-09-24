import { useState, useEffect } from "react";

export default function DarkToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`p-2 rounded transition-all flex items-center justify-center ${
        dark ? "bg-gray-800" : "bg-gray-200"
      }`}
    >
      <span
        className={`text-2xl transition-colors ${
          dark ? "text-yellow-400" : "text-orange-500"
        }`}
      >
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
