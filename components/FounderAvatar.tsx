"use client";

import { useState } from "react";
import Image from "next/image";

export default function FounderAvatar({
  photo,
  initials,
  name,
}: {
  photo: string;
  initials: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent/10 text-xl font-bold text-accent">
      {!failed && (
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
      {failed && <span>{initials}</span>}
    </div>
  );
}
