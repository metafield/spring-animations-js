import React from "react";
import { useSpring, animated, config } from "react-spring";

const AnimatedSVG = props => {
  const animProps = useSpring({ x: 0, from: { x: 150 }, config: config.molasses });
  const svgStyle = {
    width: "900px",
    height: "900px"
  };
  return (
    <animated.svg
      viewBox="0 0 100 100"
      style={svgStyle}
      fill="none"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDashoffset={animProps.x}
      strokeDasharray="100"
    >
      <path pathLength="100" d="M10 10 H 90 V 90 H 10 L 10 10"/>
    </animated.svg>
  );
};

export default AnimatedSVG;
