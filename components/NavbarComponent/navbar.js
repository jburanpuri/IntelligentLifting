import React, { useState } from 'react';
import { useWindowSize } from 'react-use';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1200;

  return (
    <nav className="bg-indigo-600 flex items-center justify-between px-4 py-6">
    <div className="flex items-center">
      <a href="#" className="text-white font-medium">Home</a>
    </div>
    <div className="flex items-center">
      <a href="#" className="text-white font-medium">All Plans</a>
    </div>
    {
      (isMobile || isTablet) &&
      <div className={`${isOpen ? 'block' : 'hidden'} bg-white absolute top-0 right-0 left-0 py-2`}>
        <a href="#" className="block px-4 py-2 text-black">Link 1</a>
        <a href="#" className="block px-4 py-2 text-black">Link 2</a>
        <a href="#" className="block px-4 py-2 text-black">Link 3</a>
      </div>
    }
  </nav>
  )
}