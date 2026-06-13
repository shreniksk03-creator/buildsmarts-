import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "bsi-theme";

// Module-level singleton store so every useTheme() instance shares one state.
let currentTheme = null;
const listeners = new Set();

function readInitial() {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

function ensureInit() {
  if (currentTheme === null) {
    currentTheme = readInitial();
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  }
  return currentTheme;
}

function subscribe(cb) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
function getSnapshot() {
  return ensureInit();
}
function getServerSnapshot() {
  return "dark";
}

function setTheme(next) {
  if (next !== "dark" && next !== "light") return;
  currentTheme = next;
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", next);
  }
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, next);
  }
  listeners.forEach((fn) => fn());
}

export function useTheme() {
  // Subscribe via useSyncExternalStore so every component using useTheme re-renders together.
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Ensure DOM attr matches on mount (covers SSR / hot reload)
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");
  return { theme, toggle, setTheme };
}
