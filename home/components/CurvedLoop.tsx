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
}

const CurvedLoop: FC<CurvedLoopProps> = ({
  marqueeText = "",
  speed = 2,
  className,
  curveAmount = 60,
  direction = "left",
  interactive = true,
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

  const uid = useId();
  const pathId = `curve-${uid}`;
  const pathD = `M-600,265 Q720,${145 + curveAmount} 2040,265`;
  

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef<"left" | "right">(direction);
  const velRef = useRef(0);

  const totalText =
    spacing > 0
      ? Array(Math.ceil(5000 / spacing) + 4).fill(text).join("")
      : text.repeat(40);

  useEffect(() => {
    if (measureRef.current) {
      const len = measureRef.current.getComputedTextLength();
      if (len > 0) {
        setSpacing(len);
        setOffset(-len);
      }
    }
  }, [text]);

  useEffect(() => {
    dirRef.current = direction;
  }, [direction]);

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

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    dragRef.current = true;
    setIsDragging(true);
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
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

  const endDrag = (e?: PointerEvent<HTMLDivElement>) => {
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
      className="w-full overflow-hidden bg-zinc-900 py-4"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
      style={{ cursor: interactive ? (isDragging ? "grabbing" : "grab") : "auto" }}
    >
      <svg
        viewBox="0 0 1440 320"
        className="block w-full h-[260px] overflow-visible"
        
      >
        <defs>
          <path id={pathId} d={pathD} fill="none" />
        </defs>

        <text
          ref={measureRef}
          xmlSpace="preserve"
          fill="transparent"
          fontSize="180"
          fontWeight="700"
          style={{ pointerEvents: "none" }}
        >
          {text}
        </text>

        <text
          xmlSpace="preserve"
          fill="white"
          fontSize="150"
          fontWeight="700"
          letterSpacing="1"
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