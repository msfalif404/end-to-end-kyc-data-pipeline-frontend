import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const Button = ({ children, onClick, variant = "primary", className, disabled }) => {
    const baseStyles = "px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center tracking-wide active:scale-95";

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 border border-white/10",
        secondary: "bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 backdrop-blur-md shadow-sm",
        danger: "bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20",
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={twMerge(clsx(baseStyles, variants[variant], className))}
        >
            {children}
        </button>
    );
};
