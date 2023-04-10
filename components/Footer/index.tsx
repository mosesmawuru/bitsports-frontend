import Link from "next/link";

const items = [
  { title: "Terms of User", url: "/terms" },
  { title: "Privacy", url: "/privacy" },
  { title: "Disclaimer", url: "/disclaimer" },
];

const Footer = () => {
  return (
    <footer className="hidden mt-48 py-6 container mx-auto lg:flex lg:justify-between lg:items-center border-t border-primary-600">
      <div className="font-Poppins text-primary-650 text-xl">
        BitPool @ 2023 By BitSport
      </div>
      <div className="flex items-center gap-8">
        {items.map((item) => (
          <Link
            href={item.url}
            className="font-Poppins text-primary-650 text-lg"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
