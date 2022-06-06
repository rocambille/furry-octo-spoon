import { ReactNode } from "react";
import { useData } from "../contexts/DataContext";

interface CTAProps {
  children: ReactNode;
  className?: string;
}

interface TextProps {
  children: ReactNode;
  className?: string;
}

interface LinkProps {
  children: ReactNode;
  className?: string;
  href: string;
}

function CTA({ children, className = "" }: CTAProps) {
  return (
    <div
      className={`flex flex-col justify-center items-stretch sm:items-center text-center ${className}`}
    >
      {children}
    </div>
  );
}

function Text({ children, className = "" }: TextProps) {
  return (
    <p className={`p-4 sm:mb-4 sm:text-5xl font-bold text-white ${className}`}>
      {children}
    </p>
  );
}

CTA.Text = Text;

function Link({ children, className = "", href }: LinkProps) {
  return (
    <a
      className={`p-4 font-semibold sm:rounded-md border border-slate-200 text-slate-900 bg-white ${className}`}
      href={href}
    >
      {children}
    </a>
  );
}

CTA.Link = Link;

export default CTA;
