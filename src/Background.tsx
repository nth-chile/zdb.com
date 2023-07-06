// https://www.vantajs.com/?effect=fog#(backgroundAlpha:1,baseColor:0,blurFactor:0.18,gyroControls:!f,highlightColor:0,lowlightColor:112161,midtoneColor:0,minHeight:200,minWidth:200,mouseControls:!t,scale:2,scaleMobile:4,speed:1.2000000000000002,touchControls:!t,zoom:0.5)

"use client"

import React, { ReactNode, useState, useEffect, useRef } from 'react';
import * as THREE from "three"
import FOG, { VantaEffect } from 'vanta/dist/vanta.fog.min';

export default function Background(props: {
  children: ReactNode,
  className: string
}) {
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && myRef.current) {
        setVantaEffect(FOG({
          THREE,
          el: myRef.current,
          highlightColor: 0x0,
          midtoneColor: 0x0,
          lowlightColor: 0xd21b,
          baseColor: 0x0,
          blurFactor: 0.18,
          speed: 1.20,
          zoom: 0.50
        }));
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className={`background ${props.className}`} ref={myRef}>
      {props.children}
    </div>
  );
};
