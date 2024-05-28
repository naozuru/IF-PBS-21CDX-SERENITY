import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "@/public/image/logo.png";

const Header = () => {
  return (
    <div>
      <header className="bg-emerald-800 py-1 px-10 text-white">
        <nav className="flex items-center justify-between">
          <div>
            <Link href="../" className="flex justify-center space-x-4">
              <Image
                src={Logo}
                alt="logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
          </div>

          <div className="flex justify-center space-x-10">
            <Link className="text-md font-semibold" href="../">
              Home
            </Link>
            <Link className="text-md font-semibold" href="../creature">
              Creature
            </Link>
            <Link className="text-md font-semibold" href="../plant">
              Plant
            </Link>
          </div>

          <div>
            <Link className="text-md font-semibold flex" href="../login">
              <Icon icon="solar:login-bold" width={24} />
              <span>Login</span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
