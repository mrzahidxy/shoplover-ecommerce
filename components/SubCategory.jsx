import Link from "next/link";

let subcat = [
  "Jacket & Coats",
  "Hijabs",
  "Abaya/ Borka",
  "Swimwear",
  "Night Wear",
  "Women’s Unstiched Fab",
  "Plazzo & Pajamas",
  "Shrugs & Skirts",
  "Joggers & Leggings",
  "Sarees",
  "Women Sweaters",
  "Women Hoodies`t",
  "T-Shirts & Shirts",
];

const SubCategory = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <span>Boys Clothing</span>
        <ul>
          <li>Boys Winter Wear</li>
          <li>Boys Polo, Shirts & Tshirts</li>
          <li>Other Accessories</li>
          <li>Boys Pants</li>
          <li>Boys Ethnic Wear</li>
        </ul>
      </div>
      <span>Hello</span>
      <span>Hello</span>
      <span>Hello</span>
      <span>Hello</span>
      <span>Hello</span>
    </div>
    // <div className="grid grid-cols-3 gap-16 ">
    //   <div className="">
    //     <span className="text-sm font-medium text-left">Women Clothing</span>
    //     <div className="flex flex-col">
    //       {subcat.map((s, index) => (
    //         <Link href="/categories/subcategories/:id">
    //           <button className="text-sm text-[#979797] hover:text-red-400 mt-4 text-left underline">
    //             {s}
    //           </button>
    //         </Link>
    //       ))}
    //     </div>
    //   </div>

    //   <div>
    //     <span className="text-sm font-medium">Women Jwellery</span>
    //     <div className="flex flex-col">
    //       {subcat.map((s, index) => (
    //         <Link href="/categories/subcategories/:id">
    //           <button className="text-sm text-[#979797] hover:text-red-400 mt-4 text-left underline">
    //             {s}
    //           </button>
    //         </Link>
    //       ))}
    //     </div>
    //   </div>

    //   <div>
    //     <span className="text-sm font-medium">Women Accessories</span>
    //     <div className="flex flex-col">
    //       {subcat.map((s, index) => (
    //         <Link href="/categories/subcategories/:id">
    //           <button className="text-sm text-[#979797] hover:text-red-400 mt-4 text-left underline">
    //             {s}
    //           </button>
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default SubCategory;
