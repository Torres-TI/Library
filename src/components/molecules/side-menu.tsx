import { BookOpenIcon, HomeIcon, PlusSmIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LibraryLogo from "../../assets/svg/library-logo.svg";
import { classNameBuilder } from "../../helpers/class-name-builder";
export interface SideMenuProps {}
const SideMenu: React.FC<SideMenuProps> = () => {
  const router = useRouter();
  return (
    <div
      className={classNameBuilder(
        "bg-white min-h-screen max-w-[15rem] flex flex-col items-center border-r border-gray-100"
      )}
    >
      <div
        className="relative cursor-pointer"
        onClick={() => {
          router.push("/home");
        }}
      >
        <LibraryLogo className="w-32 h-32" />
      </div>
      <div className="h-full space-y-6 py-20 absolute mt-24 group">
        <MenuItem
          href="/home"
          label="Início"
          className="group-hover:text-indigo-600"
        >
          <HomeIcon className="w-8 h-8" />
        </MenuItem>
        <MenuItem
          href="/estante"
          label="Estante"
          className="group-hover:text-indigo-600"
        >
          <BookOpenIcon className="w-8 h-8 " />
        </MenuItem>
        <MenuItem
          href="/adicionar"
          label="Adicionar"
          className="group-hover:text-indigo-600"
        >
          <PlusSmIcon className={`w-8 h-8 rounded-lg  border-2 `} />
        </MenuItem>
      </div>
    </div>
  );
};

export default SideMenu;

export interface MenuItemProps {
  children?: React.ReactNode;
  href: string;
  label?: string;
  className?: string;
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { href, label, children } = props;
  const { asPath } = useRouter();
  const isActive = asPath.includes(href);

  return (
    <Link href={href} passHref>
      <div
        className={classNameBuilder(
          "relative flex flex-row  items-center justify-between py-xs space-x-10 cursor-pointer"
        )}
      >
        <div
          className={` ${
            isActive && "text-indigo-700 opacity-100"
          } px-md text-gray-600 opacity-40 `}
        >
          {children}
        </div>
        <div className="text-left flex w-full ">
          <text
            className={classNameBuilder(
              ` text-lg font-bold text-opacity-40 text-gray-600 pt-2  ${
                isActive && "text-indigo-600 text-opacity-100 "
              } }`
            )}
          >
            {label}
          </text>
        </div>
      </div>
    </Link>
  );
};
