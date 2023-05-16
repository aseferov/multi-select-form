import React from 'react'
import { AppRegistry } from 'react-native'

import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    AppRegistry.registerComponent('Main', () => Main)
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication('Main')
    const styles = [getStyleElement()]

    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps, styles: React.Children.toArray(styles) }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/favicon-32x32.png"
          />
          <link rel="preload" as="style" href="/fonts/ubuntu/font.css" />
          <link rel="stylesheet" href="/fonts/ubuntu/font.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
