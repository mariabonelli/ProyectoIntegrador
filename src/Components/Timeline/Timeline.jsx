import { Children } from "react";
import "./TimelineStyle.css";

function Timeline({ children, className }) {
  return (
    <div className="timeline">
      <div className={className}>{children}</div>
    </div>
  );
}

export default Timeline;
