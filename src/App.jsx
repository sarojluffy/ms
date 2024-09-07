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

      <div className="carousel slider relative">
        {/* <div
          className={`images flex w-[100%]  -translate-x-[${leftright}*100%] `}
        > */}
        <div
          className="  overflow-hidden w-[100%]"
          style={{
            transform: ` translateX(-${leftright * 100}%)`,
          }}
        >
          {/* transform: `translateX(-${leftright * 100}%)`, */}

          {array.map((abc) => {
            return (
              <>
                <div className="w-full">
                  <img src={abc.src} alt="" />
                  <div className="slider contaienr m-5 ">
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
              </>
            );
          })}
        </div>
        {/* <div className="slider contaienr m-5">
          <div className="h-8 w-14 border bo bg-yellowsaroj flex items-center justify-center my-2">
            <p className="font-bold text-stone-900 ">New</p>
          </div>
          <p className="text-2xl font-semibold">Meet Surface Pro</p>
          <p className="my-3">
            This laptop's unrivalled flexibility and AI features like Live
            Captions and Cocreator, enable you to do more than you ever
            imagined.
          </p>
          <button className="bg-bluesaroj text-white p-2 outline-none w-28 mt-3">
            Learn more
          </button>
        </div> */}
        <div className="L&R absolute flex w-14 justify-between">
          <FaAngleLeft onClick={leftclick} />
          <FaAngleRight onClick={rightclick} />
        </div>
      </div>
    </>
  );
}

export default App;

// const [leftright, setleftright] = useState(5);
// const clickleft = () => {
//   setleftright(leftright === 0 ? array.length - 1 : leftright - 1);
//   console.log(leftright);
// };
// const clickright = () => {
//   setleftright(leftright === array.length - 1 ? 0 : leftright + 1);

//   console.log(leftright);
// };

/* <div className="overflow-hidden relative">
        <div
          className="flex"
          style={{
            transform: `translateX(-${leftright * 100}%)`,
          }}
        >
          {array.map((abc) => {
            return (
              <>
                <img src={abc.src}></img>
              </>
            );
          })}
        </div>
        <div className="absolute flex justify-between w-52">
          <div>
            <FaAngleLeft className=" " onClick={clickleft} />
          </div>
          <div>
            <FaAngleRight className=" " onClick={clickright} />
          </div>
        </div>
        <div className="slider contaienr m-5">
          <div className="h-8 w-14 border bo bg-yellowsaroj flex items-center justify-center my-2">
            <p className="font-bold text-stone-900 ">New</p>
          </div>
          <p className="text-2xl font-semibold">Meet Surface Pro</p>
          <p className="my-3">
            This laptop's unrivalled flexibility and AI features like Live
            Captions and Cocreator, enable you to do more than you ever
            imagined.
          </p>
          <button className="bg-bluesaroj text-white p-2 outline-none w-28 mt-3">
            Learn more
          </button>
        </div>
      </div> */
