import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import robotPhoto from "../assets/robot.jpg";
import CapIcon from "../assets/svgs/CapIcon";
import ChipIcon from "../assets/svgs/ChipIcon";

function Beyond() {
  const [photoOpen, setPhotoOpen] = useState(false);

  useEffect(() => {
    if (!photoOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setPhotoOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [photoOpen]);

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
                to study computer science in Vigo, Spain.
              </p>
              <div className="mt-5 max-w-md rounded-xl border border-ink/10 p-4">
                <p className="text-xs font-medium text-ink/40">Full scholarship</p>
                <p className="mt-1.5 text-base font-medium leading-snug text-ink">
                  Computer science, studied and lived in Vigo, Spain
                </p>
              </div>
              <p className="mt-4 text-xs font-light text-ink/40">Vigo, Spain - 2024</p>
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
              <button
                type="button"
                onClick={() => setPhotoOpen(true)}
                aria-label="Open hardware robot photo"
                className="mt-5 block max-w-md overflow-hidden rounded-md outline-none"
              >
                <img
                  src={robotPhoto}
                  alt="Hardware robot"
                  className="h-20 w-full cursor-pointer object-cover"
                />
              </button>
            </div>
          </article>
        </div>
      </div>

      {photoOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setPhotoOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Hardware robot photo"
          >
            <img
              src={robotPhoto}
              alt="Hardware robot"
              className="max-h-[90vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </section>
  );
}

export default Beyond;
