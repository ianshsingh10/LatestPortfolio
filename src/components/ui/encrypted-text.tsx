"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type EncryptedTextProps = {
  text: string;
  className?: string;
  revealDelayMs?: number;
  charset?: string;
  flipDelayMs?: number;
  encryptedClassName?: string;
  revealedClassName?: string;
};

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function generateRandomCharacter(charset: string): string {
  const index = Math.floor(Math.random() * charset.length);
  return charset.charAt(index);
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
  text,
  className,
  revealDelayMs = 50,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  encryptedClassName,
  revealedClassName,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const [revealCount, setRevealCount] = useState(0);

  const scrambleCharsRef = useRef<string[]>(
    text.split("").map((c) => (c === " " ? " " : "")) // ✅ deterministic SSR
  );

  const startTimeRef = useRef(0);
  const lastFlipTimeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    scrambleCharsRef.current = text
      .split("")
      .map((c) => (c === " " ? " " : generateRandomCharacter(charset)));

    startTimeRef.current = performance.now();
    lastFlipTimeRef.current = startTimeRef.current;
    setRevealCount(0);

    let cancelled = false;

    const update = (now: number) => {
      if (cancelled) return;

      const elapsed = now - startTimeRef.current;
      const total = text.length;

      const currentReveal = Math.min(
        total,
        Math.floor(elapsed / Math.max(1, revealDelayMs))
      );

      setRevealCount(currentReveal);

      if (currentReveal < total) {
        if (now - lastFlipTimeRef.current >= flipDelayMs) {
          for (let i = currentReveal; i < total; i++) {
            if (text[i] !== " ") {
              scrambleCharsRef.current[i] =
                generateRandomCharacter(charset);
            }
          }
          lastFlipTimeRef.current = now;
        }

        animationFrameRef.current = requestAnimationFrame(update);
      }
    };

    animationFrameRef.current = requestAnimationFrame(update);

    return () => {
      cancelled = true;
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isInView, text, revealDelayMs, charset, flipDelayMs]);

  if (!text) return null;

  return (
    <motion.span
      ref={ref}
      className={cn(className)}
      aria-label={text}
      role="text"
    >
      {text.split("").map((char, index) => {
        const isRevealed = index < revealCount;
        const displayChar = isRevealed
          ? char
          : scrambleCharsRef.current[index] || "";

        return (
          <span
            key={index}
            className={cn(
              isRevealed ? revealedClassName : encryptedClassName
            )}
          >
            {displayChar}
          </span>
        );
      })}
    </motion.span>
  );
};
