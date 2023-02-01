import { Slider as Range } from "antd";

const Filters = () => {
  const categories = [
    { id: 1, name: "Mobile & Devices" },
    { id: 2, name: " Consumer electronics" },
    { id: 3, name: "Grocery & Food" },
    { id: 4, name: "IT Products" },
    { id: 5, name: "Men Lifestyle" },
    { id: 6, name: "Women Lifestyle" },
    { id: 7, name: "Health & Beauty" },
    { id: 8, name: "Home & Living" },
    { id: 9, name: "CATEGORIES" },
    { id: 10, name: "Kids & mom" },
    { id: 11, name: "Digital Goods" },
  ];

  const brands = [
    { id: 1, name: "Apple  (465)" },
    { id: 2, name: "Asus  (344)" },
    { id: 3, name: "Audio-Technica  (136)" },
    { id: 4, name: "Belkin  (121)" },
    { id: 5, name: "BlueStone  (258)" },
    { id: 6, name: "Brother  (119)" },
    { id: 7, name: "Canon  (205)" },
    { id: 8, name: "China OEM  (113)" },
    { id: 9, name: "Comet  (330)" },
  ];

  const sizes = [
    { id: 1, name: "S" },
    { id: 2, name: "M" },
    { id: 3, name: "L" },
    { id: 4, name: "XL" },
    { id: 5, name: "XXL" },
    { id: 6, name: "XXXL" },
  ];

  const colors = [
    { id: 1, name: "#ABB2BE" },
    { id: 2, name: "#CEC4A5" },
    { id: 3, name: "#ABB2BE" },
    { id: 4, name: "#F8CACD" },
    { id: 5, name: "#904A00" },
    { id: 6, name: "#F8EBD6" },
  ];

  return (
    <>
      <div className="border border-[#E9E9E9] rounded-md mr-7 mb-7 p-6">
        <h3 className="text-lg font-bold capitalize">categories</h3>
        <ul className="space-y-2">
          {categories.map((c) => (
            <li key={c.id} className="text-sm xl:text-base font-normal text-[#6C6C6C]">
              {c.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-[#E9E9E9] rounded-md mr-7 mb-7 p-6">
        <h3 className="text-lg font-bold capitalize">brands</h3>
        <ul className="space-y-2">
          {brands.map((c) => (
            <li key={c.id} className="text-sm xl:text-base font-normal text-[#6C6C6C]">
              <input type="checkbox" name="" className="mr-2" /> {c.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-[#E9E9E9] rounded-md mr-7 mb-7 p-6 space-y-8">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold capitalize">price</h3>
          <Range
            range
            min={0}
            max={1000}
            defaultValue={[50, 350]}
            trackStyle={{ backgroundColor: "#000" }}
            handleStyle={{ borderColor: "#000" }}
          />
          <span className="text-sm xl:text-base font-normal text-[#6C6C6C]">
            Range: $50 - $350{" "}
          </span>
          <hr className="mt-8" />
        </div>
        <div>
          <h3 className="text-lg font-bold capitalize">color</h3>
          <div className="flex flex-row flex-wrap gap-2">
            {colors.map((c) => (
              <div
                key={c.id}
                className="h-4 w-4"
                style={{ backgroundColor: `${c.name}` }}
              ></div>
            ))}
          </div>
          <hr className="mt-8" />
        </div>
        <div>
          <h3 className="text-lg font-bold capitalize">size</h3>
          <ul className="space-y-2">
            {sizes.map((s) => (
              <li key={s.id} className="text-sm xl:text-base font-normal text-[#6C6C6C]">
                <input type="checkbox" name="" className="mr-2" />
                {s.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filters;
