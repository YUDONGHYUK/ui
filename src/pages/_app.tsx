import type { AppProps } from 'next/app';
import { Noto_Sans } from 'next/font/google';
import '@/styles/globals.css';

// If loading a variable font, you don't need to specify the font weight
const notoSans = Noto_Sans({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
