import React from 'react';
import { useSpring, animated, config } from "react-spring";

const FadeInParagraph = (props) => {
    const animProps = useSpring({ opacity: 1, from: {opacity: 0 }, config: config.molasses})
    return <animated.div style={animProps}>{props.children}</animated.div>
}

export default FadeInParagraph