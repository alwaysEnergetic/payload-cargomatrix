'use client'

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

type ThemeWrapperProps = {
  mode: 'dark' | 'light';
  children: React.ReactNode;
};

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ mode, children }) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(mode);
  }, [mode, setTheme]);

  return <>{children}</>;
};

export default ThemeWrapper;
