import { Provider } from "react-redux";
import { wrapper } from '~/state/store'
import { ThemeProvider } from 'styled-components'
import { theme } from "~/styles/theme";
import { GlobalStyle } from '~/styles/globalStyle'

export default function App({ Component, ...rest }) {

  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...props.pageProps} />
        <div id="portal" />
      </Provider>
    </ThemeProvider>
  );
}
