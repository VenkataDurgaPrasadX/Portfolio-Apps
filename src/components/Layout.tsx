import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, Home, User, LayoutGrid, History, Award } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: LayoutGrid, label: "Work", path: "/work" },
  { icon: History, label: "Journey", path: "/journey" },
  { icon: Award, label: "Skills", path: "/skills" },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Desktop Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/20">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Menu className="text-primary cursor-pointer" size={24} />
            <h1 className="text-xl font-black tracking-tighter text-primary uppercase">
              PORTFOLIO
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-colors",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-outline hover:text-on-background"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/20">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgYRN5xb2WZmec57o2hRDFLgZ0oRp0Lz1DnCirrWRaBIImcWgx5Z0O_t6_jFZ5_K9eX0u8GMkm-WXJLhBxacuYyD8XYn4thE9ZDVbqwaK1Ai4mNjLZQ-r5Stt2o9lZz03kfra0zPgjmP91J5Rgoun8TPL5xLPrfoyLXvDHMpKOVZmrjKPy4ZLkOQyc0JofeQHHrsfjTVwmF-MaNFXEJ4xRtTTXPBecP6DapyP-ovrKvEjnIttpczjMxhHyYq3Yoyf2mO6JFgA8_Qmt"
              alt="User Avatar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 w-full z-50 md:hidden bg-background/90 backdrop-blur-lg border-t border-outline-variant/20 rounded-t-2xl shadow-2xl">
        <div className="flex justify-around items-center px-4 py-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center transition-all duration-300",
                  isActive
                    ? "text-primary bg-primary/10 rounded-xl px-4 py-1 scale-110"
                    : "text-outline opacity-60 hover:opacity-100"
                )}
              >
                <Icon size={20} />
                <span className="text-[10px] font-bold uppercase tracking-widest mt-1">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
