import React from 'react'

const CategoryList = () => {

  const category = [
    {
        id: 1,
        name: "Mens Lifestyle",
        subcategory: [
            {
                id: 1 - 1,
                name: "Boys Accessorries",
                items: [
                    {
                        id: 1 - 1 - 1,
                        name: "sunglass"
                    },
                    {
                        id: 1 - 1 - 2,
                        name: "Shoe"
                    },
                    {
                        id: 1 - 1 - 3,
                        name: "Bag"
                    },
                ]
            },
            {
                id: 1 - 2,
                name: "Boys Clothing",
                items: [
                    {
                        id: 1 - 2 - 1,
                        name: "Boys T-shirt"
                    },
                    {
                        id: 1 - 2 - 3,
                        name: "Boys Pant"
                    },
                ]
            },
            {
                id: 1 - 3,
                name: "Boys Accessorries",
                items: [
                    {
                        id: 1 - 3 - 1,
                        name: "sunglass"
                    },
                    {
                        id: 1 - 3 - 2,
                        name: "Shoe"
                    },
                    {
                        id: 1 - 3 - 3,
                        name: "Bag"
                    },
                ]
            },
            {
                id: 1 - 4,
                name: "Boys Clothing",
                items: [
                    {
                        id: 1 - 4 - 1,
                        name: "Boys T-shirt"
                    },
                    {
                        id: 1 - 4 - 2,
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
                id: 2 - 1,
                name: "Womens Accessorries",
                items: [
                    {
                        id: 2 - 1 - 1,
                        name: "sunglass"
                    },
                    {
                        id: 2 - 2 - 2,
                        name: "Bag"
                    },
                ]
            },
            {
                id: 2 - 2,
                name: "Womens Clothing",
                items: [
                    {
                        id: 2 - 2 - 1,
                        name: "Saree"
                    },
                    {
                        id: 2 - 2 - 2,
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
                id: 3 - 1,
                name: "Toys",
                items: [

                ]
            },
            {
                id: 3 - 2,
                name: "Kids Clothing",
                items: [
                    {
                        id: 3 - 2 - 1,
                        name: "Shirt"
                    },
                    {
                        id: 3 - 3 - 2,
                        name: "Pant"
                    },
                ]
            }
        ]
    }
]

  return (
    <>
      <ul className=" block bg-white text-black w-[273px] h-[400px] pt-1 z-40 shadow-xl rounded-md group-hover/main:block">
        {
          category.map((c) => (
            <li className="group/sub active:bg-slate-200" key={c.id}>
              <div className="text-sm font-normal py-2 px-4 whitespace-no-wrap flex flex-row justify-between items-center hover:bg-yellow-100  hover:shadow-lg" >
                <span>{c.name}</span>
                <span> <img src="/icons/arrow-r.svg" alt="" /></span>
              </div>
              <div className="absolute hidden bg-white w-[1000px] h-full top-0 left-full py-6 px-9 z-10 rounded-md group-hover/sub:block shadow-lg">
                <div className="grid grid-cols-3 gap-10">
                  {
                    c.subcategory.map((s) => (
                      <div key={s.id}>
                        <span className="font-medium text-base ">{s.name}</span>
                        <ul className="font-base text-base">
                          {
                            s.items.map((i) => (
                              <li className=" text-[#979797] text-sm py-1 pl-2 mb-1 hover:bg-yellow-100 hover:shadow-lg" key={i.id}>{i.name}</li>
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
    </>
  )
}

export default CategoryList