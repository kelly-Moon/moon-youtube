import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import VideoCard from "../components/video/VideoCard";
import { gsapText } from "../data/gsap";

const Gsap = () => {
  const [loadin, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const gaspPageClass = loadin ? "isLoading" : "isLoaded";
  return (
    <Main title="GSAP 사이트" description="GSAP 사이트 튜토리얼 강의입니다.">
      <section id="gsapPage" className={gaspPageClass}>
        <h2>🤣 GSAP 패럴랙스 효과를 하고 싶다면!</h2>
        <div className="video__inner">
          <VideoCard videos={gsapText} />
        </div>
      </section>
    </Main>
  );
};

export default Gsap;
