import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <nav className="w-full bg-primary text-secondary">
      <div className="container mx-auto flex justify-between items-center py-10">
        <div>
          <div className="font-extrabold text-3xl">
            Sell<span className="text-cyan-500">ify</span>
          </div>
          <div className="text-sm">© 2023 Sellify, Inc.</div>
        </div>
        <div className="flex gap-3">
          <Icon className="hover:text-cyan-500 cursor-pointer duration-300" height={36} icon="uil:instagram-alt" />
          <Icon className="hover:text-cyan-500 cursor-pointer duration-300" height={36} icon="entypo-social:youtube" />
          <Icon className="hover:text-cyan-500 cursor-pointer duration-300" height={36} icon="ion:logo-facebook" />
        </div>
      </div>
    </nav>
  );
}
