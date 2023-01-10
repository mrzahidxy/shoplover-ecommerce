const Navbar = () => {
  const nav = [
    { id: 1, name: "Home" },
    { id: 2, name: "Winter Sale" },
    { id: 3, name: "Flash Sale" },
    { id: 4, name: "Blogs" },
    { id: 5, name: "Order Track" },
  ];
  return (
    <div className="bg-[#1b1b1bf7] text-white h-11  ">
      <div className="h-full mx-24 flex justify-between items-center">
        <div className="font-base font-medium flex gap-2 ">
          <img src="/category-icon.svg" alt="" />
          All Category
        </div>
        <nav className="flex gap-7">
          {nav.map((n) => (
            <span className="font-base font-normal" key={n.id}>
              {n.name}
            </span>
          ))}
        </nav>
        <span className="font-base font-normal">
          Download the App & get 20% OFF
        </span>
      </div>
    </div>
  );
};

export default Navbar;
