import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    let hls;
    if (videoRef.current) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = src;
      }
    }
    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      className="w-full rounded-lg bg-black"
      poster=""
      autoPlay={false}
    />
  );
}