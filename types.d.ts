declare module 'vanta/dist/vanta.fog.min' {
  export type VantaEffect = {
    destroy(): void;
  }

  function FOG(options: {
    THREE: any,
    el: HTMLElement;
    highlightColor: number;
    midtoneColor: number;
    lowlightColor: number;
    baseColor: number;
    blurFactor: number;
    speed: number;
    zoom: number;
  }): VantaEffect;

  export default FOG;
}

namespace ZDB {
  type PageProps = {
    params: {
      year?: string;
    }
  } 
}