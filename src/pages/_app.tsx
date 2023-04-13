import { appQueryClient } from "@/lib/tanstackQuery";
import { store } from "@/redux/store/store";
import "@/styles/globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={appQueryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
