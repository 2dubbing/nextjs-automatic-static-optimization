nextjs-automatic-static-optimization
===

<a href="https://nextjs.org/docs/pages/building-your-application/rendering/automatic-static-optimization">Next - Automatic Static Optimization</a> 에서 말하는 내용 정리

<ul>
  <li>Nextjs 의 특징 중 하나인 Automatic Static Optimization</li>
  <li>브라우저에서 페이지 렌더링 소요시간을 줄이고자 Next.js 는 build 시, Page 에 getServerSideProps 혹은 getInitialProps 가 사용되지 않는 페이지는 미리 사전렌더링(pre-rendering)을 한다.  </li>
  <li>npm run build 결과물인 .next 디렉토리를 살펴보면 server/, static/ 로 나뉘어져 있는 것을 확인가능하다. </li>
  <li>왜 server/, static/ 둘 다 생성해놓는 것일까?</li>
  <li>이유는 최초 웹서버 진입 시점에는 페이지를 SSR 하여 내려주기 위함이다.</li>
  <li>이후, 브라우저에서 Next.js Link 혹은 router 를 사용한 페이지 이동은 CSR 형태를 취한다. 
  <li>크롬 브라우저 개발자도구 - Network 탭을 열어 최초 진입 시 SSR 결과물인 html 과 CSR 처리를 위해 chunk 된 .js 파일을 요청하는 것을 확인할 수 있다. </li>
</ul>