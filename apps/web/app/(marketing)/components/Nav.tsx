"use client";

import { useEffect, useState } from 'react';

export function Nav() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const nav = document.getElementById('nav');
    const currentTheme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    setTheme(currentTheme);

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;

      if (nav) {
        nav.classList.toggle('scrolled', scrollTop > 8);
      }
    };

    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('hunk-theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <nav id="nav">
      <div className="logo"><span className="sq" />hunkAI</div>
      <div className="navlinks">
        <a href="#product">Product</a>
        <a href="#how">How it works</a>
        <a href="#eval">Eval</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div className="navright">
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
        <a className="navcta" href="#join">Join waitlist</a>
      </div>
    </nav>
  );
}
