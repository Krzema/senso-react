import logo from '../assets/brand.png';
import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

function Link({ title, href }: { title: string; href: string }) {
  return (
    <a href={href}>
      <li className="mr-2 font-semibold px-1 cursor-pointer border-b-2 border-transparent transition ease-in-out duration-200 hover:border-indigo-400 ">
        {title}
      </li>
    </a>
  );
}

export default function Header() {
  return (
    <header className="flex flex-wrap h-28 items-center justify-center">
      <a href="#">
        <img className="h-24 sm:h-20 md:h-28" src={logo} alt="logo" />
      </a>
      <div className="sm:ml-auto flex flex-wrap items-center gap-4">
        <ul className="flex">
          <Link title="O mnie" href="#aboutme" />
          <Link title="Oferta" href="#offer" />
          <Link title="Kontakt" href="#contact" />
        </ul>
        <div className="flex">
          <a href="https://www.facebook.com/sensoslowka">
            <FacebookLogo
              className="hover:text-sky-500"
              weight="duotone"
              size={28}
            />
          </a>
          <a href="">
            <InstagramLogo
              className="hover:text-rose-600"
              weight="duotone"
              size={28}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
