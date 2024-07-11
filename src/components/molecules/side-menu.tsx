import { BookOpenIcon, HomeIcon, PlusSmIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { classNameBuilder } from "../../helpers/class-name-builder";
export interface SideMenuProps {}
const SideMenu: React.FC<SideMenuProps> = () => {
  const router = useRouter();
  return (
    <div
      className={classNameBuilder(
        "relative hidden sm:flex flex-col  bg-white min-h-screen  items-center border-r border-gray-100"
      )}
    >
      <h1 className="pt-10">Logo</h1>
      <div className="h-full space-y-6 pt-10 group">
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
          " flex flex-row w-full items-center justify-between space-x-6 px-4 cursor-pointer group"
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
