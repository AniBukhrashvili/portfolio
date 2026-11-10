import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import robotPhoto1 from "../assets/robot-1.jpg";
import robotPhoto2 from "../assets/robot-2.jpg";
import robotPhoto3 from "../assets/robot-3.jpg";
import robotPhoto4 from "../assets/robot-4.jpg";
import robotPhoto5 from "../assets/robot-5.jpg";
import CapIcon from "../assets/svgs/CapIcon";
import ChipIcon from "../assets/svgs/ChipIcon";
import ChevronLeft from "../assets/svgs/ChevronLeft";
import ChevronRight from "../assets/svgs/ChevronRight";

gsap.registerPlugin(ScrollTrigger);

const robotPhotos = [
  { src: robotPhoto1, alt: "Robot" },
  { src: robotPhoto2, alt: "Robot" },
  { src: robotPhoto3, alt: "Robot" },
  { src: robotPhoto4, alt: "Robot" },
  { src: robotPhoto5, alt: "Robot" },
];

const milestones = [
  {
    id: "university",
    year: 2021,
    date: "Sep 2021 — Jul 2025",
    title: "Bachelor of Information Technology",
    text: "Business and Technology University, Tbilisi.",
    icon: "cap",
  },
  {
    id: "robot",
    year: 2022,
    date: "2022",
    title: "Hardware robot",
    text: "I designed a physical robot and wrote the Arduino code that drives its mechanical movements.",
    icon: "chip",
    photos: true,
  },
  {
    id: "erasmus",
    year: 2024,
    date: "Apr 2024 — Jul 2024",
    title: "Erasmus+, Computer Science",
    text: "Full scholarship for the third-year spring semester at C.P.R. Daniel Castelao in Vigo, Spain, during my bachelor's degree.",
    icon: "cap",
  },
].sort((a, b) => a.year - b.year);

function curveThrough(points) {
  if (points.length < 2) return "";

  let path = `M ${points[0].x} ${points[0].y}`;
  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index];
    const end = points[index + 1];
    const distance = end.y - start.y;
    path += ` C ${start.x} ${start.y + distance * 0.55}, ${end.x} ${start.y + distance * 0.45}, ${end.x} ${end.y}`;
  }
  return path;
}

function TimelineIcon({ name }) {
  if (name === "chip") return <ChipIcon />;
  return <CapIcon />;
}

function Beyond() {
  const [photoIndex, setPhotoIndex] = useState(null);
  const photoOpen = photoIndex !== null;
  const sectionRef = useRef(null);
  const wrapRef = useRef(null);
  const pathRef = useRef(null);
  const guideRef = useRef(null);

  const showPhoto = useCallback((step) => {
    setPhotoIndex((index) => {
      if (index === null) return null;
      return (index + step + robotPhotos.length) % robotPhotos.length;
    });
  }, []);

  useEffect(() => {
    if (!photoOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setPhotoIndex(null);
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPhoto(-1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showPhoto(1);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [photoOpen, showPhoto]);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;
    const guide = guideRef.current;
    const section = sectionRef.current;
    if (!wrap || !path || !guide || !section) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let tween;
    let frame = 0;

    const draw = () => {
      const wrapRect = wrap.getBoundingClientRect();
      const points = [...wrap.querySelectorAll("[data-timeline-dot]")].map((dot) => {
        const rect = dot.getBoundingClientRect();
        const card = dot.closest("[data-timeline-card]");
        const shiftX = card ? Number(gsap.getProperty(card, "x")) || 0 : 0;
        const shiftY = card ? Number(gsap.getProperty(card, "y")) || 0 : 0;
        return {
          x: rect.left + rect.width / 2 - wrapRect.left - shiftX,
          y: rect.top + rect.height / 2 - wrapRect.top - shiftY,
        };
      });
      const d = curveThrough(points);
      path.setAttribute("d", d);
      guide.setAttribute("d", d);
      const svg = path.ownerSVGElement;
      svg.setAttribute("width", String(wrap.offsetWidth));
      svg.setAttribute("height", String(wrap.offsetHeight));
      const length = d ? path.getTotalLength() : 0;
      guide.style.strokeDasharray = "none";
      path.style.strokeDasharray = `${length}`;
      return length;
    };

    const animate = () => {
      const length = draw();
      tween?.scrollTrigger?.kill();
      tween?.kill();
      if (!length) return;
      if (reduced) {
        gsap.set(path, { strokeDashoffset: 0 });
        return;
      }
      gsap.set(path, { strokeDashoffset: length });
      tween = gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 65%",
          scrub: 0.6,
        },
      });
    };

    const cards = reduced
      ? null
      : gsap.context(() => {
          wrap.querySelectorAll("[data-timeline-card]").forEach((card) => {
            gsap.from(card, {
              autoAlpha: 0,
              y: 28,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 86%",
                toggleActions: "play none none none",
              },
            });
          });
        }, wrap);

    animate();

    const onResize = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(animate);
    };
    const observer = new ResizeObserver(onResize);
    observer.observe(wrap);
    wrap.querySelectorAll("img").forEach((image) => {
      if (!image.complete) image.addEventListener("load", onResize, { once: true });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      tween?.scrollTrigger?.kill();
      tween?.kill();
      cards?.revert();
    };
  }, []);

  const activePhoto = photoOpen ? robotPhotos[photoIndex] : null;
  const firstYear = milestones[0].year;
  const lastYear = milestones[milestones.length - 1].year;
  const yearSpan = Math.max(lastYear - firstYear, 1);

  return (
    <section id="education" ref={sectionRef} className="relative">
      <div className="container py-12 xl:py-18">
        <h2 className="text-xl font-light tracking-medium text-ink">Education</h2>

        <div ref={wrapRef} className="relative mt-12">
          <svg
            className="pointer-events-none absolute left-0 top-0 overflow-visible"
            aria-hidden="true"
          >
            <path
              ref={guideRef}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-ink/15"
            />
            <path
              ref={pathRef}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-accent"
            />
          </svg>

          <ol className="relative">
            {milestones.map((item, index) => {
              const previous = milestones[index - 1];
              const gap = previous
                ? Math.max(2.75, ((item.year - previous.year) / yearSpan) * 11)
                : 0;
              const onRight = index % 2 === 1;

              return (
                <li
                  key={item.id}
                  className="relative pl-10 md:pl-0"
                  style={{ marginTop: `${gap}rem` }}
                >
                  <article
                    data-timeline-card
                    className={`relative max-w-md ${onRight ? "md:ml-auto" : ""}`}
                  >
                    <span
                      data-timeline-dot
                      className={`absolute top-5 z-10 h-3.5 w-3.5 rounded-full border-2 border-accent bg-page left-[-1.85rem] md:top-6 ${
                        onRight
                          ? "md:left-[-1.15rem]"
                          : "md:left-auto md:right-[-1.15rem]"
                      }`}
                    />
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink/15 text-ink/70">
                        <TimelineIcon name={item.icon} />
                      </span>
                      <div>
                        <p className="text-xs font-light italic text-ink/40">{item.date}</p>
                        <h3 className="mt-1 text-lg font-medium text-ink">{item.title}</h3>
                        <p className="mt-2 max-w-md text-sm font-light leading-6 text-ink/60">
                          {item.text}
                        </p>
                        {item.photos && (
                          <div className="mt-5 grid max-w-md grid-cols-3 sm:grid-cols-5 gap-1.5">
                            {robotPhotos.map((photo, photoNumber) => (
                              <button
                                key={photo.src}
                                type="button"
                                onClick={() => setPhotoIndex(photoNumber)}
                                aria-label={`Open hardware robot photo ${photoNumber + 1}`}
                                className="overflow-hidden rounded-md outline-none"
                              >
                                <img
                                  src={photo.src}
                                  alt={photo.alt}
                                  className="aspect-square w-full cursor-pointer object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {activePhoto &&
        createPortal(
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setPhotoIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Hardware robot photo ${photoIndex + 1} of ${robotPhotos.length}`}
          >
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(event) => {
                event.stopPropagation();
                showPhoto(-1);
              }}
              className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-lg outline-none hover:bg-white sm:left-6"
            >
              <ChevronLeft />
            </button>

            <div
              className="flex max-h-[90vh] flex-col items-center gap-3"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[calc(90vh-2.75rem)] max-w-[78vw] rounded-xl object-contain shadow-2xl sm:max-w-[84vw]"
              />
              <p className="text-sm font-light text-white">
                {photoIndex + 1} / {robotPhotos.length}
              </p>
            </div>

            <button
              type="button"
              aria-label="Next photo"
              onClick={(event) => {
                event.stopPropagation();
                showPhoto(1);
              }}
              className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-lg outline-none hover:bg-white sm:right-6"
            >
              <ChevronRight />
            </button>
          </div>,
          document.body
        )}
    </section>
  );
}

export default Beyond;
