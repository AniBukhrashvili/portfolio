const details = [
  {
    label: "Email",
    value: "bukhrashviliiani@gmail.com",
    href: "mailto:bukhrashviliiani@gmail.com",
  },
  {
    label: "Resume",
    value: "View Resume",
    href: "/Ani Bukhrashvili - CV.pdf",
    external: true,
  },
  {
    label: "Location",
    value: "Tbilisi, Georgia",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ani-bukhrashvili-a5313622b",
  },
  {
    label: "GitHub",
    href: "https://github.com/AniBukhrashvili",
  },
];

function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container py-12 xl:py-18">
        <h2 className="text-xl font-light tracking-medium text-ink">
          Contact
          <span className="ml-1 text-sm font-light italic text-ink/50">
            say hello
          </span>
        </h2>

        <div className="mt-8 md:max-w-xl">
          <p className="max-w-xl text-base font-light leading-7 text-ink/70">
            I&apos;m actively growing my career as a Frontend Developer and
            I&apos;m open to new opportunities. If you have a project, a
            role or a question, reach out. I would be glad to hear from you.
          </p>

          <div className="mt-8 border-t border-ink/10 pt-8">
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="space-y-6">
                {details.map((item) => (
                  <div key={item.label}>
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink/40">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="mt-2 block text-sm font-medium text-ink hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm font-medium text-ink">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink/40">
                  Social
                </p>
                <ul className="mt-2 space-y-2">
                  {socials.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-ink hover:text-accent"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
