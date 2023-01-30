import Link from "next/link";

const Navbar = () => {
  const nav = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Winter Sale", link: "wintersale" },
    { id: 3, name: "Flash Sale", link: "/flash_sale" },
    { id: 4, name: "Blogs", link: "/blogs" },
    { id: 5, name: "Order Track", link: "/users/trackOrders" },
  ];

  const category = [
    {
      id: 1,
      name: "Mens Lifestyle",
      subcategory: [
        {
          id: 1,
          name: "Boys Accessorries",
          items: [
            {
              id: 1,
              name: "sunglass"
            },
            {
              id: 2,
              name: "Shoe"
            },
            {
              id: 3,
              name: "Bag"
            },
          ]
        },
        {
          id: 2,
          name: "Boys Clothing",
          items: [
            {
              id: 1,
              name: "Boys T-shirt"
            },
            {
              id: 3,
              name: "Boys Pant"
            },
          ]
        },
        {
          id: 3,
          name: "Boys Accessorries",
          items: [
            {
              id: 1,
              name: "sunglass"
            },
            {
              id: 2,
              name: "Shoe"
            },
            {
              id: 3,
              name: "Bag"
            },
          ]
        },
        {
          id: 4,
          name: "Boys Clothing",
          items: [
            {
              id: 1,
              name: "Boys T-shirt"
            },
            {
              id: 2,
              name: "Boys Pant"
            },
          ]
        }

      ]
    },
    {
      id: 2,
      name: "Womens Lifestyle",
      subcategory: [
        {
          id: 1,
          name: "Womens Accessorries",
          items: [
            {
              id: 1,
              name: "sunglass"
            },
            {
              id: 2,
              name: "Bag"
            },
          ]
        },
        {
          id: 2,
          name: "Womens Clothing",
          items: [
            {
              id: 1,
              name: "Saree"
            },
            {
              id: 2,
              name: "T-shirt"
            },
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Kids",
      subcategory: [
        {
          id: 1,
          name: "Toys",
          items: [
            
          ]
        },
        {
          id: 2,
          name: "Kids Clothing",
          items: [
            {
              id: 1,
              name: "Shirt"
            },
            {
              id: 2,
              name: "Pant"
            },
          ]
        }
      ]
    }
  ]

  return (
    <div className="bg-[#1b1b1bf7] text-white h-11  hidden lg:block">
      <div className="h-full mx-24 flex justify-between items-center">
        <div className="inline-block relative group/main">
          <div className="font-base font-medium flex gap-2">
            <img src="/icons/category.svg" alt="" />
            <span>All Categories</span>
          </div>
          <ul className="absolute hidden bg-white text-black w-[273px] h-[400px] pt-1 z-40 shadow-xl rounded-md group-hover/main:block">
            {
              category.map((c) => (
                <li className="group/sub active:bg-slate-200" key={Math.random()}>
                  <div className="text-sm font-normal py-2 px-4 whitespace-no-wrap flex flex-row justify-between items-center hover:bg-yellow-100  hover:shadow-lg" >
                    <span>{c.name}</span>
                    <span> <img src="/icons/arrow-r.svg" alt="" /></span>
                  </div>
                  <div className="absolute hidden bg-white w-[1000px] h-full top-0 left-full py-6 px-9 z-10 rounded-md group-hover/sub:block shadow-lg">
                    <div className="grid grid-cols-3 gap-10">
                      {
                       c.subcategory.map((s) => (
                          <div key={Math.random()}>
                            <span className="font-medium text-base ">{s.name}</span>
                            <ul className="font-base text-base">
                              {
                                s.items.map((i) => (
                                  <li className=" text-[#979797] text-sm py-1 pl-2 mb-1 hover:bg-yellow-100 hover:shadow-lg" key={Math.random()}>{i.name}</li>
                                ))}
                            </ul>
                          </div>
                        ))}
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      
        <nav className="flex gap-7">
          {nav.map((n) => (
            <Link
              href={`${n.link}`}
              className="font-base font-normal"
              key={n.id}
            >
              {n.name}
            </Link>
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
