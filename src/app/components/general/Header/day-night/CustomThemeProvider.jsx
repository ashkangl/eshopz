"use client";
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect, useState } from 'react';

const CustomThemeProvider = ({ children }) => {
const [mounted, setMounted] = useState(false);

useEffect(() => {
setMounted(true);
}, []);

if (!mounted) return null;

return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
};

export default CustomThemeProvider;