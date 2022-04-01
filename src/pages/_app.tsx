import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import "src/styles/custom-tailwind.min.css";
import { CookiesProvider, useCookies } from "react-cookie";
import Header from "src/components/molecules/Base/Header";
import BaseLayout from "src/layouts/BaseLayout";
import Switch from "src/components/atoms/Switch";
import BASE_CONFIG from "src/config/base.config";
import ErrorBoundary from "src/services/ErrorBoundary";

type TMyApp = {
  Component: React.ComponentType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: TMyApp) {
  const [cookie, setCookie] = useCookies([BASE_CONFIG.THEME_KEY]);
  return (
    <ErrorBoundary>
      <CookiesProvider>
        <ThemeProvider
          enableSystem={false}
          defaultTheme={
            cookie[BASE_CONFIG.THEME_KEY]
              ? cookie[BASE_CONFIG.THEME_KEY]
              : BASE_CONFIG.DEFAULT_THEME
          }
        >
          <Header />
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </ThemeProvider>
      </CookiesProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
