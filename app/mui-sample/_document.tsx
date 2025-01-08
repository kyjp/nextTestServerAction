import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import createCache from '@emotion/cache'

const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props) => <App emotionCache={cache} {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx)
    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = Array.isArray(emotionStyles.styles)
      ? emotionStyles.styles.map((style) => (
          <style
            key={style.key}
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: style.css }}
          />
        ))
      : []


    return {
      ...initialProps,
      styles: [
        ...(Array.isArray(initialProps.styles) ? initialProps.styles : []), // stylesが配列かどうかを確認
        ...emotionStyleTags,
      ],
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* その他のカスタムヘッダー */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}