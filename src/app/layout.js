import "./globals.css";
import Footer from "./components/general/Footer";
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import CustomThemeProvider from "./components/general/Header/day-night/CustomThemeProvider";
import Header from "./components/general/Header/Header";


export const metadata = {
  title: "Simple E-Shop with Next.js",
  description: "This is a simple E-Shop with Next.js, You can use it as a template for your own project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomThemeProvider>
        <Header />
        {children}
        <Footer />
        </CustomThemeProvider>
      </body>
    </html>
  );
}
