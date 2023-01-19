import Link from "next/link";

const navigations = [
  { id: 1, name: "Deals", img: "", link: "/" },
  { id: 2, name: "Menu", img: "" },
  { id: 3, name: "Home", img: "", link: "/" },
  { id: 4, name: "Cart", img: "cart-bw-icon.svg", link: "cart" },
  { id: 5, name: "Profile", img: "profile-icon.svg", link: "users" },
];
const MobileNav = () => {
  return (
    <section
      id="bottom-navigation"
      class="block fixed inset-x-0 bottom-0 z-10 bg-white drop-shadow-2xl lg:hidden"
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
