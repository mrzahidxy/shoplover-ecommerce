const flashsales = [
  { id: 1, name: "Books Collection" },
  { id: 2, name: "Books Collection" },
  { id: 3, name: "Books Collection" },
  { id: 4, name: "Books Collection" },
  { id: 5, name: "Books Collection" },
  { id: 6, name: "Books Collection" },
  { id: 7, name: "Books Collection" },
  { id: 8, name: "Books Collection" },
  { id: 9, name: "Books Collection" },
  { id: 10, name: "Books Collection" },
  { id: 11, name: "Books Collection" },
  { id: 12, name: "Books Collection" },
  { id: 13, name: "Books Collection" },
  { id: 14, name: "Books Collection" },
  { id: 15, name: "Books Collection" },
  { id: 16, name: "Books Collection" },
  { id: 17, name: "Books Collection" },
  { id: 18, name: "Books Collection" },
];

const flashsale = () => {
  return (
    <div>
      <div className="container">
        <img src="/flashsale-main.png" className="w-full my-14" />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {flashsales.map((f) => (
          <div className="mb-14">
            <img src="/flashsale-sub.png" alt="" srcset="" />
            <div className="flex justify-between pt-2">
              <span className="font-medium text-lg"> {f.name}</span>
              <div className="flex gap-1 mr-2">
                <div className="bg-black text-white w-6 h-6 p-1 text-center rounded-sm">1</div>:
                <div className="bg-black text-white w-6 h-6 p-1 text-center rounded-sm">1</div>:
                <div className="bg-black text-white w-6 h-6 p-1 text-center rounded-sm">1</div>:
                <div className="bg-black text-white w-6 h-6 p-1 text-center rounded-sm">1</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default flashsale;
