import { GiHamburgerMenu } from "react-icons/gi";
import { VscSearch } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
function App() {
  const array = [
    {
      src: "../public/images/aa.avif",
      srcb: "../public/images/a1.avif",
      srcx: "../public/images/ax.avif",
      title: "Meet Surface Laptop",
      desc: "Unlock AI features like Live Captions and Cocreator with this exceptionally powerful laptop.",
    },

    {
      src: "../public/images/bb.avif",
      title: "Meet Surface Pro",
      desc: "This laptop's unrivalled flexibility and AI features like Live Captions and Cocreator, enable you to do more than you ever imagined",
    },
  ];
  const [leftright, setleftright] = useState(0);
  const leftclick = () => {
    setleftright(leftright === 0 ? array.length - 1 : leftright - 1);
    console.log(leftright);
  };

  const rightclick = () => {
    setleftright(leftright === array.length - 1 ? 0 : leftright + 1);
    console.log(leftright);
  };
  return (
    <>
      <div className="nav flex justify-between p-3  ">
        <div className="left flex justify-between w-20 md:order-2 ">
          <div className="ham md:hidden">
            <GiHamburgerMenu className="size-6" />
          </div>
          <div className="search pt-1 md:hidden">
            <VscSearch className="size-4" />
          </div>
        </div>
        <div className="middle w-28 flex justify-around md:order-1 md:w-auto">
          <div className="w-28">
            <img src="../public/images/ms.png" className="w-28"></img>
          </div>
          <div className="  hidden md:flex ml-9 ">
            <div className="mx-1">home</div>
            <div className="mx-1">sdad</div>
            <div className="mx-1">dsd</div>
            <div className="mx-1">dsad</div>
            <div className="mx-1">dsad</div>
            <div className="mx-1">dsad</div>
            <div className="mx-1">dsad</div>
          </div>
        </div>

        <div className="right flex justify-between w-20 md:order-3 md:w-32">
          <div className="search hidden pt-1 md:block">
            {/* block refers to display of block */}
            <VscSearch className="size-4" />
          </div>
          <div className="cart pt-1">
            <BsCart3 />
          </div>
          <div className="profile ">
            <VscAccount className="size-6" />
          </div>
        </div>
      </div>

      <div className="carousel slider relative overflow-hidden md:pb-80">
        <div
          className="  flex  "
          style={{
            transform: ` translateX(-${leftright * 100}%)`,
          }}
        >
          {array.map((abc, index) => (
            <div key={index} style={{}} className="w-full shrink-0 relative ">
              {/*by default shrink 1 huncha , so parent div kai width diyeni shrink vayera adjust huncha */}
              <div>
                <img src={abc.src} alt="" className="block lg:hidden " />
                <img
                  src={abc.srcb}
                  alt=" "
                  className="hidden lg:block xl:hidden "
                />
                <img src={abc.srcx} alt=" " className="hidden xl:block  " />
              </div>
              <div className="slider container w-full mb-6 p-5 shadow-md md:shadow-md  md:absolute top-[450px] md:m-5 md:bg-white md:p-10 lg:bg-transparent lg:top-0 lg:w-[50%] lg:shadow-none">
                <div className="h-8 w-14 border bo bg-yellowsaroj flex items-center justify-center my-2">
                  <p className="font-bold text-stone-900 ">New</p>
                </div>
                <p className="text-2xl font-semibold">{abc.title}</p>
                <p className="my-3">{abc.desc}</p>
                <button className="bg-bluesaroj text-white p-2 outline-none w-28 mt-3">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex relative justify-center">
        <div className="L&R  flex space-x-32 justify-between ">
          <FaAngleLeft onClick={leftclick} />
          <FaAngleRight onClick={rightclick} />
        </div>
        <div className="flex  absolute top-0 space-x-5">
          {array.map((abc, i) => (
            <div
              key={i}
              className={`rounded-full w-4 h-4 cursor-pointer ${
                i == leftright ? "bg-slate-700" : "bg-slate-200"
              }`}
              onClick={() => {
                setleftright(i);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
