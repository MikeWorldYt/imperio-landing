import { useEffect, useState} from "react";

export default function WaveSeparator() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();
    const observer = new MutationObserver(() => checkDark());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ondebox">
      <svg
        className="onde"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="onda"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352Z"
          />
        </defs>
        <g className="parallaxonde">
          <use xlinkHref="#onda" x="2" y="3" fill="rgba(23, 53, 80, 0.4)" />
          <use xlinkHref="#onda" x="2" y="0" fill="rgba(17, 170, 159, 0.4)" />
          <use xlinkHref="#onda" x="2" y="5" fill="rgba(61, 133, 200, 0.2)" />
          {isDark ? (
            <use xlinkHref="#onda" x="2" y="7" fill="#1f1f1f" style={{ transition: "fill 300ms ease-in-out" }}/>
          ) : (
            <use xlinkHref="#onda" x="2" y="7" fill="white" style={{ transition: "fill 300ms ease-in-out" }} />
          )
          }
        </g>
      </svg>
    </div>
  );
}