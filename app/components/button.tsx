import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  ...props
}) => (
  <button
    {...props}
    className="group flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full border border-white/5 hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
  >
    {children}
    <span className="group-hover:translate-x-1 transition-transform">→</span>
  </button>
);

export const OutlineButton: React.FC<ButtonProps> = ({
  children,
  ...props
}) => (
  <button
    {...props}
    className="flex items-center gap-2 border border-white/10 bg-transparent text-white px-8 py-4 rounded-full hover:bg-white/5 transition-all"
  >
    {children}
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  </button>
);
