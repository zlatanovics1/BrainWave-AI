import { BsLinkedin } from "react-icons/bs";
import Section from "./Section";
import { MdEmail } from "react-icons/md";

const socials = [
  {
    id: 0,
    url: "https://www.linkedin.com/in/strahinja-zlatanovic-91150729b/",
    icon: <BsLinkedin className="w-4 h-4" />,
  },
  {
    id: 1,
    url: "mailto:office@zlatanovics.com",
    icon: <MdEmail className="w-4 h-4" />,
  },
];
const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              {item.icon}
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
