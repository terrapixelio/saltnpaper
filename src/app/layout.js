import './globals.css'
import { Roboto } from 'next/font/google'
import Header from './components/header'
import MouseFollowerCursor from './MouseFollowerCursor';
import "./cursor.scss";



const inter = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata = {
  title: 'Salt N Paper',
  description: 'Salt n Paper Agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <MouseFollowerCursor />
        <Header />
        {children}
      </body>
    </html>
  );
}

