import { Provider } from "react-redux";
import { store } from '~/state/store'
import { ThemeProvider } from 'styled-components'
import { theme } from "~/styles/theme";
import { GlobalStyle } from '~/styles/globalStyle'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
