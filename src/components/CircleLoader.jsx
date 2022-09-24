import React from "react";
import { motion } from "framer-motion";

const containerStyle = {
    marginTop: "270px",
    flexDirection: "row",
    boxSizing: "border-box",
    textAlign: "center",
    alignItens: "center",
    justifyContent: "center",
    display: "flex",

};

const circleStyle = {
  width: "3rem",
  height: "3rem",
  border: "0.5rem solid #e9e9e9",
  borderTop: "0.5rem solid #3498db",
  borderRadius: "50%",
  boxSizing: "border-box",
};

const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1
};

export default function CircleLoader() {
  return (
    <div style={containerStyle}>
      <motion.span
        style={circleStyle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}