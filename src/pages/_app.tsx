import { NextComponentType, NextPageContext } from "next";
import App from "next/app";

interface GetInitialProps {
  Component: NextComponentType;
  ctx: NextPageContext;
}

/**
 * @description https://nextjs.org/docs/pages/building-your-application/routing/custom-app#caveats 의 세번째 항목
 */
class MyApp extends App {
  static async getInitialProps({ Component, ctx }: GetInitialProps) {
    let pageProps = {};

    // Page.getInitialProps 방식은 pre-rendering 하지 않기에 권장하지 않는다.
    // 그래도 legacy 로 인해 존재할 수 있으니 해당 조건은 넣어놓자!
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // 여기서 CSR / SSR 분기
    // CSR 의 경우, ctx.req 객체가 존재하지 않음
    // SSR 의 경우, ctx.req 객체 존재
    console.log("ctx.req: ", ctx?.req?.headers);
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
