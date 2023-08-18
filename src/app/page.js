'use client'

const { useLayoutEffect, useRef } = React;
import React from 'react'
import MouseFollower from "mouse-follower";
import gsap from "gsap";
MouseFollower.registerGSAP(gsap);



function home() {
  const app = useRef();
  const circle = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to(".box", { rotation: 360 });
      // or refs
      gsap.to(circle.current, { rotation: 360 });

    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <><div className="px-[4.5rem]">
      <div className="absolute top-1/2 transform-translate-y-1/2 uppercase" data-cursor="-exclusion -stick">work</div>
      <div className="flex justify-center header pt-[4.8rem]">designs</div>
    </div>
      <div ref={app} className="App">
        <div className="box">selector</div>
        <div className="circle" ref={circle}>Ref</div>
      </div>
    </>
  )
}

export default home
