import React, { lazy, Suspense, useState } from 'react'
import Loader from '../../animation/Loader';

const Child = lazy(() => import("./Child"));

const SuspenseReact = () => {
       const [show, setShow] = useState(false);

       return (
              <>
                     <button onClick={() => setShow(true)}>
                            Open child
                     </button>

                     {show && (
                            <Suspense fallback={<Loader />}>
                                   <Child/>
                            </Suspense>
                     )}
              </>
       )
}

export default SuspenseReact
