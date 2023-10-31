import React, { useEffect, useState } from "react";

import { selectTime } from "../redux/time.slice";
import { useAppSelector } from "../redux/hooks";

interface TooltipProps {
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  const time = new Date(useAppSelector(selectTime));

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    const tooltipElement = document.getElementById("tooltip");
    if (tooltipElement) {
      tooltipElement.style.top = `${position.y - 15}px`;
      tooltipElement.style.left = `${position.x + 10}px`;
    }
  }, [position]);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {showTooltip && (
        <div
          id="tooltip"
          style={{ position: "absolute", top: position.y, left: position.x }}
        >
          <b>Current Time: {time.toLocaleTimeString()} </b>
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
