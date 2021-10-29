import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Updates from "../components/Updates/Updates";

import { Fade, Flip, Bounce } from "react-reveal";
export default function Home() {
  return (
    <div>
      <svg
        className="triangle-canvas"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          className="triangle triangle-1"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-2"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-3"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-4"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-5"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-6"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-7"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-8"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-9"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-10"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-11"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-12"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-13"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-14"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-15"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-16"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-17"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-18"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-19"
          points="500,200 759,650 241,650"
        />
        <polygon
          className="triangle triangle-20"
          points="500,200 759,650 241,650"
        />
      </svg>
      <Fade top duration={2000}>
        <Hero />
      </Fade>
      <Flip top duration={2000}>
        <Features />
      </Flip>
      <Bounce top duration={2000}>
        <Updates />
      </Bounce>
    </div>
  );
}
