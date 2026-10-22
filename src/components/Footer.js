import ArrowUpRight from "../assets/svgs/ArrowUpRight";

function Footer() {
  return (
    <footer className="container mb-10 border-t border-dashed border-ink/10 pt-5">
      <p className="text-xs font-light text-ink/40">
        © {new Date().getFullYear()} Ani Bukhrashvili
      </p>
    </footer>
  );
}

export default Footer;
