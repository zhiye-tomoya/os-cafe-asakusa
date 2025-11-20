export default function Home() {
  return (
    <div className="flex flex-col justify-center ">
      <header className=" flex flex-row justify-center items-center  pt-16 bg-[#fff4e5] text-[#5d3510] text-6xl">
        OTHER Space Cafe
      </header>

      <div className="flex flex-row justify-center items-center pb-32 bg-[#fff4e5] text-[#5d3510] text-2xl">
        A delightful mix of Japanese and Western
      </div>
      <div className="flex flex-row justify-between max-w-full  ">
        <img className="w-[1600px]" src="/images/cafeBG.jpg" />
        <div className="bg-[#5d3510] text-[#fff4e5] w-full >
        <h2>Opening Hours</h2>
        <p>Daily: 7:00-22:00 (Last order: 21:30) </p>
        </div>
       
      </div>
      <div className="bg-amber-500 h-[300px] flex justify-center items-center text-4xl  ">
        Check Out our menu!
      </div>
    </div>
  );
}
