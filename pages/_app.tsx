import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Header from "../src/components/atoms/header";
import Footer from "../src/components/atoms/footer";
import store from "../src/redux/ConfigureStore";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>競馬予想掲示板</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
