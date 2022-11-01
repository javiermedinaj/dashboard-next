import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'

import { ProviderAuth } from '../hooks/useAuth'

function MyApp({ Component, pageProps }) {
  return (
    <ProviderAuth>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ProviderAuth>
  )
}

export default MyApp
