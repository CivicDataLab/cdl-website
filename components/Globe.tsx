"use client";
// https://github.com/shuding/cobe

import createGlobe from "cobe";
import Renderer from "phenomenon";
import { useEffect, useRef } from "react";

export function Globe() {
  const canvasRef = useRef<any>();

  useEffect(() => {
    let globe: Renderer;

    if (canvasRef.current) {
      let phi = 0;

      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.8, 1, 0.807],
        markerColor: [0.93, 0.35, 0.25],
        glowColor: [1, 1, 1],

        markers: [
          // longitude latitude
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi;
          phi += 0.005;
        },
      });
    }

    return () => {
      globe.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }} />;
}
