import artmedia from "../assets/companies/artmedia.jpg";
import CapIcon from "../assets/svgs/CapIcon";
import ChipIcon from "../assets/svgs/ChipIcon";

const robotPhotos = [
  {
    src: artmedia,
    alt: "Artmedia",
  },
  {
    src: artmedia,
    alt: "Artmedia",
  },
  {
    src: artmedia,
    alt: "Artmedia",
  },
  {
    src: artmedia,
    alt: "Artmedia",
  },
];

function Beyond() {
  return (
    <section id="beyond" className="relative">
      <div className="container md:py-12">
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
                to study computer science in Vigo, Spain. I lived there while I
                was studying.
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
              {robotPhotos.length > 0 && (
                <div className="mt-5 flex gap-2">
                  {robotPhotos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo.src}
                      alt={photo.alt}
                      className="h-14 w-14 rounded-lg object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Beyond;
