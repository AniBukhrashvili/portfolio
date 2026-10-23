import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import robotPhoto1 from "../assets/robot-1.jpg";
import robotPhoto2 from "../assets/robot-2.jpg";
import robotPhoto3 from "../assets/robot-3.jpg";
import robotPhoto4 from "../assets/robot-4.jpg";
import robotPhoto5 from "../assets/robot-5.jpg";
import CapIcon from "../assets/svgs/CapIcon";
import ChipIcon from "../assets/svgs/ChipIcon";
import ChevronLeft from "../assets/svgs/ChevronLeft";
import ChevronRight from "../assets/svgs/ChevronRight";

const robotPhotos = [
  { src: robotPhoto1, alt: "Robot" },
  { src: robotPhoto2, alt: "Robot" },
  { src: robotPhoto3, alt: "Robot" },
  { src: robotPhoto4, alt: "Robot" },
  { src: robotPhoto5, alt: "Robot" },
];

function Beyond() {
  const [photoIndex, setPhotoIndex] = useState(null);
  const photoOpen = photoIndex !== null;

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

  const activePhoto = photoOpen ? robotPhotos[photoIndex] : null;

  return (
    <section id="beyond" className="relative">
      <div className="container pb-6">
        <h2 className="text-lg font-light tracking-medium text-ink">
          Things I&apos;ve done outside of work
        </h2>

        <div className="mt-8 grid items-start gap-x-12 gap-y-12 md:grid-cols-2">
          <article className="flex items-start gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-ink/70 shrink-0">
              <CapIcon />
            </span>
            <div>
              <h3 className="text-lg font-medium text-ink">
                Erasmus in Spain
              </h3>
              <p className="mt-2 max-w-md text-sm font-light leading-6 text-ink/60">
                I took part in an Erasmus project from Business and Technology University and received a full scholarship
                to study computer science in C.P.R. Daniel Castelao in Vigo, Spain.
              </p>
              <div className="mt-5 max-w-md rounded-xl border border-ink/10 p-4">
                <p className="text-xs font-medium text-ink/40">Full scholarship</p>
                <p className="mt-1.5 text-base font-medium leading-snug text-ink">
                  Computer science, studied and lived in Vigo, Spain
                </p>
              </div>
              <p className="mt-4 text-xs font-light text-ink/40 italic">2024</p>
            </div>
          </article>

          <article className="flex items-start gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-ink/70 shrink-0">
              <ChipIcon />
            </span>
            <div>
              <h3 className="text-lg font-medium text-ink">
                Hardware robot
              </h3>
              <p className="mt-2 max-w-md text-sm font-light leading-6 text-ink/60">
                I designed a physical robot and wrote the Arduino code that drives
                its mechanical movements.
              </p>
              <div className="mt-5 grid max-w-md grid-cols-5 gap-1.5">
                {robotPhotos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setPhotoIndex(index)}
                    aria-label={`Open hardware robot photo ${index + 1}`}
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
              <p className="mt-4 text-xs font-light text-ink/40 italic">2022</p>
            </div>
          </article>
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
