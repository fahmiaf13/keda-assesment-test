import { Icon } from "@iconify/react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  // Fungsi untuk memperbarui lebar halaman saat jendela diubah ukurannya
  const updatePageWidth = () => {
    setPageWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updatePageWidth);
    return () => {
      window.removeEventListener("resize", updatePageWidth);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navList = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "About",
      link: "",
    },
    {
      name: "Pricing",
      link: "",
    },
    {
      name: "Contact",
      link: "",
    },
  ];

  return (
    <nav className={`w-screen fixed py-10 z-10 ${scrolled ? "bg-white/30 backdrop-blur-sm" : "bg-transparent"} duration-300`}>
      <div className="flex justify-between container mx-auto md:px-[5rem]">
        <Link to="/" className="flex gap-3 h-full items-center">
          <Icon className={`${scrolled ? "text-cyan-500" : "text-white"} h-full duration-300`} height={40} icon="uil:react" />
          <div className={`${scrolled ? "text-primary" : "text-white"} text-4xl font-extrabold duration-300`}>
            Sell<span className={`${scrolled ? "text-cyan-500" : ""}`}>ify</span>
          </div>
        </Link>
        {pageWidth > 768 ? (
          <div className="flex items-center gap-3 font-extrabold">
            {navList.map((nav, index) => (
              <Link key={index} to={nav.link}>
                <div>{nav.name}</div>
              </Link>
            ))}
            <div>
              <Link to="/login">
                <Button variant="outline" className="font-extrabold w-24 tracking-widest border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-primary">
                  LOGIN
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <Sheet>
            <SheetTrigger>
              <Icon width={36} icon="ci:hamburger-md" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="h-full">
                <SheetTitle>
                  <Link to="/" className="flex gap-1 h-full items-center justify-center">
                    <Icon className="text-cyan-500 h-full duration-300" height={40} icon="uil:react" />
                    <div className="text-primary text-4xl font-extrabold duration-300">
                      Sell<span className={`${scrolled ? "text-cyan-500" : ""}`}>ify</span>
                    </div>
                  </Link>
                </SheetTitle>
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="flex flex-col gap-5 h-full justify-center">
                    {navList.map((nav, index) => (
                      <Link key={index} to={nav.link}>
                        <div className="text-3xl">{nav.name}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="flex items-end w-full">
                    <Button className="w-full font-extrabold xtracking-widest bg-cyan-500  hover:bg-cyan-500 hover:text-primary">LOGIN</Button>
                  </div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
}
