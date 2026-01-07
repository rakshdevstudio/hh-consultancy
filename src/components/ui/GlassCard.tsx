import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "strong" | "subtle";
}

export function GlassCard({ 
  children, 
  className, 
  variant = "default",
  ...props 
}: GlassCardProps) {
  const variants = {
    default: "bg-white/70 backdrop-blur-xl border border-white/30 shadow-glass",
    strong: "bg-white/85 backdrop-blur-2xl border border-white/40 shadow-glass-lg",
    subtle: "bg-white/50 backdrop-blur-lg border border-white/20 shadow-soft",
  };

  return (
    <motion.div
      className={cn(
        "rounded-2xl p-6",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
