import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://graphql-flutter-app.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
  )
}
export default MyApp
