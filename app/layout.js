import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'TIYE — Technology Initiative for Youth Empowerment',
  description:
    "TIYE empowers young people across Africa through digital skills, AI literacy, and responsible AI adoption.",
  icons: {
    icon: { url: '/img/Tiye icon .png', type: 'image/png' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
