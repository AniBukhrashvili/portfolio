import ArrowUpRight from "../assets/svgs/ArrowUpRight";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name")).trim();
    const from = String(data.get("email")).trim();
    const message = String(data.get("message")).trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${from}`);

    console.log({ subject, body });
  };

  return (
    <section id="contact" className="relative">
      <div className="container py-12 xl:py-18">
        <h2 className="text-xl font-light tracking-medium text-ink">
          Contact
          <span className="ml-1 text-sm font-light italic text-ink/50">
            say hello
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 max-w-lg">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-medium text-ink/45">Name</span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-1 w-full border-b border-ink/15 bg-transparent py-2 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-accent"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-ink/45">Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1 w-full border-b border-ink/15 bg-transparent py-2 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-accent"
              />
            </label>
          </div>

          <label className="mt-6 block">
            <span className="text-xs font-medium text-ink/45">Message</span>
            <textarea
              name="message"
              required
              rows={4}
              className="mt-1 w-full resize-none border-b border-ink/15 bg-transparent py-2 text-sm text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-accent"
            />
          </label>

          <button
            type="submit"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            Send
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
