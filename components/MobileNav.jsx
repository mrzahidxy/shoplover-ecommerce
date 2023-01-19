import Link from "next/link";

const navigations = [
  { id: 1, name: "Deals", img: "deals-icon.svg", link: "/" },
  { id: 2, name: "Menu", img: "deals-icon.svg" },
  { id: 3, name: "Home", img: "deals-icon.svg", link: "/" },
  { id: 4, name: "Cart", img: "deals-icon.svg", link: "cart" },
  { id: 5, name: "Profile", img: "deals-icon.svg", link: "users" },
];
const MobileNav = () => {
  return (
    <section
      id="bottom-navigation"
      class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow lg:hidden"
    >
      <div class="flex justify-between p-5">
        {navigations.map((n) => (
          <Link href={`${n.link}`} class="">
            <div className="flex flex-col items-center ">
              <span>
                <img src={`${n.img}`} alt="" />
              </span>
              <span class="text-sm font-medium">{n.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MobileNav;
