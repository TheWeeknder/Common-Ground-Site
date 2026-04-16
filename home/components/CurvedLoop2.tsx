"use client";

import {
  useRef,
  useEffect,
  useState,
  useMemo,
  useId,
  FC,
  PointerEvent,
} from "react";

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
  bend?: "up" | "down";
  bgClassName?: string;
  textColor?: string;
}

const CurvedLoop: FC<CurvedLoopProps> = ({
  marqueeText = "",
  speed = 2,
  className,
  curveAmount = 50,
  direction = "left",
  interactive = true,
  bend = "down",
  bgClassName = "bg-white",
  textColor = "black",
}) => {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0";
  }, [marqueeText]);

  const measureRef = useRef<SVGTextElement | null>(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);

  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const uid = useId();
  const pathId = `curve-${uid}`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef<"left" | "right">(direction);
  const velRef = useRef(0);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    dirRef.current = direction;
  }, [direction]);

  const textSize = isMobile ? 64 : 180;

  const baseY = bend === "up" ? (isMobile ? 120 : 140) : isMobile ? 90 : 90;
  const controlY =
    bend === "up" ? baseY - curveAmount : baseY + curveAmount;

  const startX = isMobile ? -120 : -600;
  const midX = isMobile ? 195 : 720;
  const endX = isMobile ? 510 : 2040;

  const pathD = `M${startX},${baseY} Q${midX},${controlY} ${endX},${baseY}`;

  const totalText =
    spacing > 0
      ? Array(Math.ceil((isMobile ? 2600 : 5000) / spacing) + 4)
          .fill(text)
          .join("")
      : text.repeat(isMobile ? 20 : 40);

  useEffect(() => {
    if (measureRef.current) {
      const len = measureRef.current.getComputedTextLength();
      if (len > 0) {
        setSpacing(len);
        setOffset(-len);
      }
    }
  }, [text, textSize, isMobile]);

  useEffect(() => {
    if (!spacing || !textPathRef.current) return;

    let frame = 0;

    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === "right" ? speed : -speed;
        let next = offset + delta;

        if (next <= -spacing) next += spacing;
        if (next > 0) next -= spacing;

        textPathRef.current.setAttribute("startOffset", `${next}px`);
        setOffset(next);
      }

      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, offset]);

  const onPointerDown = (e: PointerEvent<HTMLElement>) => {
    if (!interactive) return;
    dragRef.current = true;
    setIsDragging(true);
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (!interactive || !dragRef.current || !textPathRef.current || spacing <= 0) return;

    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;

    let next = offset + dx;

    if (next <= -spacing) next += spacing;
    if (next > 0) next -= spacing;

    textPathRef.current.setAttribute("startOffset", `${next}px`);
    setOffset(next);
  };

  const endDrag = (e?: PointerEvent<HTMLElement>) => {
    if (!interactive) return;
    dragRef.current = false;
    setIsDragging(false);
    dirRef.current = velRef.current > 0 ? "right" : "left";

    if (e && e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section
      className={`w-full overflow-hidden pt-6 md:pt-10 lg:pt-32 ${bgClassName}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
      style={{ cursor: interactive ? (isDragging ? "grabbing" : "grab") : "auto" }}
    >
      <svg
        viewBox={isMobile ? "0 55 390 90" : "0 40 1440 180"}
        className="block w-full h-[72px] md:h-[140px] overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <path id={pathId} d={pathD} fill="none" />
        </defs>

        <text
          ref={measureRef}
          xmlSpace="preserve"
          fill="transparent"
          fontSize={textSize}
          fontWeight="700"
          style={{ pointerEvents: "none" }}
        >
          {text}
        </text>

        <text
          xmlSpace="preserve"
          fill={textColor}
          fontSize={textSize}
          fontWeight="700"
          letterSpacing={isMobile ? "0" : "1"}
          className={className ?? ""}
        >
          <textPath
            ref={textPathRef}
            href={`#${pathId}`}
            startOffset={`${offset}px`}
            xmlSpace="preserve"
          >
            {totalText}
          </textPath>
        </text>
      </svg>
    </section>
  );
};

export default CurvedLoop;