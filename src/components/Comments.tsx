import { useState, useEffect, useRef } from "react";
import { useLang } from "../lib/LanguageContext";
import { comments } from "../data/comments";

export default function Comments() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goNext(), 4000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => goNext(), 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current]);

  const goNext = () => {
    if (animating) return;
    setDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % comments.length);
      setAnimating(false);
    }, 400);
    resetTimer();
  };

  const goPrev = () => {
    if (animating) return;
    setDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) => (c - 1 + comments.length) % comments.length);
      setAnimating(false);
    }, 400);
    resetTimer();
  };

  const goTo = (i: number) => {
    if (animating || i === current) return;
    setDirection(i > current ? "left" : "right");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(i);
      setAnimating(false);
    }, 400);
    resetTimer();
  };

  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  const getVisible = () => [
    (current - 1 + comments.length) % comments.length,
    current,
    (current + 1) % comments.length,
  ];

  const slideClass = animating
    ? direction === "left"
      ? "-translate-x-8 opacity-0"
      : "translate-x-8 opacity-0"
    : "translate-x-0 opacity-100";

  return (
    <section id="comments" className="bg-[#0d0d12] py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-400 mb-8 text-center">
          {t("What Listeners Say", "نظرات شنوندگان")}
        </h2>

        <div className="w-16 h-px bg-amber-600/50 mx-auto mb-12" />

        <div className="relative flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={goPrev}
            className="shrink-0 w-10 h-10 rounded-full border border-amber-600/40 text-amber-400 hover:bg-amber-600/20 transition-colors flex items-center justify-center text-2xl z-10"
          >
            ‹
          </button>

          {/* Cards */}
          <div
            className={`flex-1 grid grid-cols-3 gap-4 transition-all duration-400 ease-in-out ${slideClass}`}
          >
            {getVisible().map((idx, pos) => (
              <div
                key={`${idx}-${pos}`}
                onClick={() => goTo(idx)}
                className={`border rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-400 ease-in-out ${
                  pos === 1
                    ? "border-amber-600/60 bg-amber-900/25 scale-105 shadow-lg shadow-amber-900/30"
                    : "border-amber-900/30 bg-amber-900/10 opacity-50 scale-95 hover:opacity-70"
                }`}
              >
                {/* Avatar */}
                <div className="mb-4 w-14 h-14 relative">
                  {comments[idx].photo ? (
                    <img
                      src={comments[idx].photo}
                      alt={comments[idx].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-amber-600/50"
                      onError={(e) => {
                        (e.target as HTMLImageElement).replaceWith(
                          Object.assign(document.createElement("div"), {
                            className: "w-14 h-14 rounded-full bg-amber-900/60 border-2 border-amber-600/40 flex items-center justify-center text-amber-400 text-xl font-bold",
                            textContent: getInitial(comments[idx].name),
                          })
                        );
                      }}
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-amber-900/60 border-2 border-amber-600/40 flex items-center justify-center text-amber-400 text-xl font-bold">
                      {getInitial(comments[idx].name)}
                    </div>
                  )}
                </div>

                {/* Name */}
                <p className="text-amber-300 font-semibold text-sm mb-1">
                  {comments[idx].name}
                </p>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xs">★</span>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-amber-100/70 text-sm leading-relaxed line-clamp-4">
                  {comments[idx].comment}
                </p>

                <p className="text-amber-600/30 text-xs mt-4">Castbox</p>
              </div>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={goNext}
            className="shrink-0 w-10 h-10 rounded-full border border-amber-600/40 text-amber-400 hover:bg-amber-600/20 transition-colors flex items-center justify-center text-2xl z-10"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {comments.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-amber-400 w-6" : "bg-amber-800 w-1.5"
              }`}
            />
          ))}
        </div>

        <p className="text-amber-600/40 text-xs text-center mt-4">
          {current + 1} / {comments.length}
        </p>
      </div>
    </section>
  );
}