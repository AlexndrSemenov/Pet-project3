import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="white"
        startPosition={0.3}
        stopDelayMs={200}
        height={10}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      {/* <style jsx global> {`   -   вариант подключения общих стилей
        body {
          font-family: 'Roboto', sans-serif;
        }
      `} </style> */}
    </>
     
  )
}
