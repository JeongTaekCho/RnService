'use client';

import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="w-full h-[50px] flex justify-between items-center">
      <h1>습관을 형성</h1>
      <Hamburger toggled={isOpen} toggle={setOpen} size={26} />
    </div>
  );
}
