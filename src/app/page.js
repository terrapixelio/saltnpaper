'use client'

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import PingPongGame from './components/PingPongGame';
import Form from './components/Form';

function Home() {
  const heroTextRef = useRef(null);
  const childTextRefs = useRef(Array.from({ length: 2 }, () => React.createRef()));
  const [designText, setDesignText] = useState('design');
  const texts = ['web', 'code', 'sites'];

  useEffect(() => {
    const heroTextAnimation = gsap.fromTo(
      heroTextRef.current,
      { y: '100%', opacity: 0, rotate: 2 },
      {
        duration: 1.2,
        y: 0,
        opacity: 1,
        rotate: 0,
        ease: 'power4.out',
      }
    );

    const childTextAnimations = childTextRefs.current.map((ref) => {
      return gsap.fromTo(
        ref.current,
        { y: '100%', opacity: 0, rotate: 2 },
        {
          duration: 3,
          y: 0,
          opacity: 1,
          rotate: 0,
          ease: 'power4.out',
        }
      );
    });

    heroTextAnimation.play();
    childTextAnimations.forEach((animation) => animation.play());

    return () => {
      heroTextAnimation.kill();
      childTextAnimations.forEach((animation) => animation.kill());
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDesignText((prevDesignText) => {
        const currentIndex = texts.indexOf(prevDesignText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <main className="px-[2rem] md:px-[4.5rem]">
        <section className="h-screen -mt-[120px] z-10">
          <div className="relative">
            <div className="absolute top-1/2 transform-translate-y-1/2 uppercase" data-cursor="-exclusion">
              work
            </div>
            <div className="absolute top-1/2 right-0 transform-translate-y-1/2 uppercase" data-cursor="-exclusion">
              About
            </div>
            <div className="absolute bottom-0 transform-translate-y-1/2 uppercase" data-cursor="-exclusion">
              ui/ux design
            </div>
            <div className="absolute bottom-0 right-0 transform-translate-y-1/2 uppercase" data-cursor="-exclusion">
              client
            </div>
            <div className="flex justify-center header cursor-default overflow-hidden animate-text">
              <div className="outer pt-[8.8rem]">
                <span className="inner hero_text" ref={heroTextRef} data-cursor-video="./Videos/emoji.mp4">
                  {designText}
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="animate-text h-screen w-full flex flex-col relative">
          <div className="flex justify-between w-full">
            <div className="flex gap-4">
              <div className="uppercase" data-cursor="-exclusion">ig</div>
              <div className="uppercase" data-cursor="-exclusion">fa</div>
            </div>
            <div className="uppercase" data-cursor="-exclusion">uix/ux design and digital branding</div>
            <div className="uppercase" data-cursor="-exclusion">scroll down</div>
          </div>
          <div className="flex flex-col self-center max-w-[1200px]">
            <div className="animate-text">
              <div className="outer mt-[18rem]">
                <span className="inner hero_text text-[58px] leading-none font-normal" ref={childTextRefs.current[0]}>
                  <h2>wir entwickeln und begleiten Brands von der ersten Idee bis zur authentischen </h2>
                </span>
              </div>
            </div>
            <div className="animate-text">
              <div className="outer">
                <span className="inner hero_text text-[58px] leading-none font-normal" ref={childTextRefs.current[1]}>
                  <h2>Umsetzung und Bespielung zielgruppen-orientierter Medienkanäle mit Fokus auf Strategie- Design und Entwicklung</h2>
                </span>
              </div>
            </div>
          </div>

        </section>
        <section className="w-full h-[600px] relative">

          <PingPongGame />
        </section>
        <section className="w-full">
          <Form />
        </section>
      </main >
    </>
  );
}

export default Home;
