// import dynamic from "next/dynamic";
import React from 'react';

// const SampleComponent = dynamic(() => import('RemoteButton/Button'), {
//   ssr: false,
// });

export default function Home() {
  return (
    <main>
      Home
      {/*<React.Suspense fallback={"..."}>*/}
      {/*  <SampleComponent/>*/}
      {/*</React.Suspense>*/}
    </main>
  )
}
