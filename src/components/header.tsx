import logo from '../assets/brand.png';
import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

function Link({ title }: { title: string }) {
  return (
    <a href="google.pl">
      <li className="mr-2 font-semibold px-1 cursor-pointer border-b-2 border-transparent transition ease-in-out duration-200 hover:border-indigo-400 ">
        {title}
      </li>
    </a>
  );
}

export default function Header() {
  return (
    <header className="flex flex-wrap">
      <img className="h-28" src={logo} alt="logo" />
      <div className="ml-auto flex flex-wrap items-center gap-4">
        <ul className="flex">
          <Link title="O mnie" />
          <Link title="Oferta" />
          <Link title="Kontakt" />
        </ul>
        <div className="hidden sm:flex">
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

