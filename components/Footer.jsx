const Footer = () => {
  const Informations = [
    { id: 1, name: "About Us" },
    { id: 2, name: "Warranty Policy" },
    { id: 3, name: "Term & Conditions" },
    { id: 4, name: " Privacy Policy" },
    { id: 5, name: "   Legal Documents" },
    { id: 6, name: "FAQ" },
    { id: 7, name: "   Career" },
    { id: 8, name: " Return Policy" },
  ];
  const links = [
    { id: 1, name: "Home" },
    { id: 2, name: "Flash Sale" },
    { id: 3, name: "All brands" },
    { id: 4, name: " Blogs" },
  ];
  return (
    <div className="bg-[#1B1B1B] text-white pt-20 pb-11">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-36 ">
        <div className="space-y-9 text-base font-normal">
          <div>
            <img src="/images/sl-logo.svg" alt="" />
          </div>
          <div className="space-y-5">
            <div className=" text-justify">
              <span className="font-bold">Shoplover </span> is your nearby
              e-commerce solution for everything you need to buy in Bangladesh.
              Shoplover e-commerce is the sister concern of{" "}
              <span className="font-bold"> US-Bangla Airlines</span>.
            </div>
            <div className="text-justify">
              Now you can choose from a wide range of branded products including
              home appliances, apparel items, cosmetics products, electronics
              gadgets, health, and medicine items, food and groceries items,
              smart and feature phones, laptop & computer accessories, cameras,
              and much more at our online store.
            </div>
          </div>
          <div className="flex gap-3">
            <img src="/fb-icon.svg" alt="" />
            <img src="/twitter-icon.svg" alt="" />
            <img src="/youtube-icon.svg" alt="" />
            <img src="/linkedin-icon.svg" alt="" />
            <img src="/instagram-icon.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center gap-10 md:gap-44">
          <div className="space-y-4">
            <div className="font-bold text-lg ">INFORMATIONS</div>
            <div className="space-y-2">
              {Informations.map((i) => (
                <div className="font-normal text-base" key={i.id}>{i.name}</div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <span className="font-bold text-lg">QUICK LINKS</span>
            <div className="space-y-2">
              {links.map((l) => (
                <div className="font-normal text-base" key={l.id}>{l.name}</div>
              ))}
            </div>
            <div>
              <span className="text-lg font-bold">Be A Seller</span>
              <div className="border border-primary rounded-md bg-black w-36 py-3 mt-5 flex justify-center items-center hover:bg-primary ease-in-out duration-300">
                <span className="font-bold text-lg ">Apply here</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-7">
          <span className="font-bold text-lg">CONTACT</span>
          <div className="space-y-3">
            <div className="flex flex-col">
              <span className="text-base font-bold">Address:</span>
              <span className="fonnt-base font-normal">
                Corporate Office: Road no-1A, House No-32, Baridhara J Block,
                Dhaka.
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold">Phone:</span>
              <span className="text-base font-normal">+880 9678-161161</span>
              <span className="text-base font-normal">
                (Saturday to Thursday, 9:30 AM to 6:30 PM).
              </span>
            </div>
          </div>
          <div className="mt-6 space-y-5">
            <span className="text-base text-normal italic">
              Get the App Now for exiting offers.
            </span>
            <div className="flex gap-5">
              <img src="playstore-icon.svg" alt="" />
              <img src="appstore-icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
