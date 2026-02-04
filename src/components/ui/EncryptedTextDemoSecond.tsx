import { EncryptedText } from "@/components/ui/encrypted-text";
import React from "react";

export function EncryptedTextDemoSecond() {
  return (
    <p className="md:text-6xl text-3xl lg:text-8xl font-bold text-center text-white relative z-20">
      <EncryptedText
        text="Hey, I&apos;m Ansh Singh"
        encryptedClassName="text-neutral-500"
        revealedClassName="dark:text-white text-black"
        revealDelayMs={50}
      />
    </p>
  );
}
