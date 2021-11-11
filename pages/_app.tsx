import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/global.scss';
import '../styles/project.scss';
import '../styles/fadeInSection.scss';
import '../styles/dropDown.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
