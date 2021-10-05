import "./intro.scss";
// import { KeyboardArrowDown } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,

      strings: ["Developer", "Graphic Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/cirr.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hi There, I'm </h2>
          <h1>Ivan Romero</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="man" />
        </a>
      </div>
    </div>
  );
}
