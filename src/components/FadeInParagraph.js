import React from 'react';
import { useSpring, animated } from "react-spring";

const FadeInParagraph = (props) => {
    const animProps = useSpring({ opacity: 1, from: {opacity: 0 }})
    return <animated.div style={animProps}>{props.children}</animated.div>
}

export default FadeInParagraph