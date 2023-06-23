import React, { Suspense, lazy } from "react";
import UseCallbackExample from "./UseCallbackExample";

// lazy(function)
// function must return a promise
// promise is returned by the import() function
// import() takes location of the default exported component

const LazyComponent = lazy(() => {
  return import("./LazyComponent");
});

function LazyLoadingExample() {
  return (
    <>
      <h1>LazyLoadingExample</h1>
      <Suspense fallback={<UseCallbackExample />}>
        <LazyComponent />
      </Suspense>
    </>
  );
}

export default LazyLoadingExample;
