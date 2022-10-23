import { BsCart3 } from "react-icons/bs";

const BLoggin = () => {
  return (
    <div className="flex items-center justify-end   md:ml-0 ml-1 w-16  md:w-52 ">
      <BsCart3
        className="md:w-14 md:h-[28px] w-4 md:-mr-7 h-[20px] "
        style={{ color: "#69C665" }}
      />
      <button className="flex justify-center ml-1 rounded-md w-[30px] md:h-[28px]  h-[17px]  md:w-[70px] md:ml-7 bg-base text-white text-[8px] md:text-[1rem]  items-center md:rounded-md">
        Login
      </button>
    </div>
  );
};

const ALoggin = () => {
  return (
    <div className="flex items-center justify-end   md:ml-0 ml-1 w-16  md:w-52 ">
      <BsCart3
        className="md:w-14 md:h-[28px] w-4 md:-mr-7 h-[20px]"
        style={{ color: "#69C665" }}
      />

      <img
        className=" flex justify-center ml-1  h-[17px] w-[17px]  w-10 md:w-[28px] md:h-[28px] md:ml-7 bg-base text-white   items-center  rounded-full"
        src="https://dazedimg-dazedgroup.netdna-ssl.com/592/azure/dazed-prod/1060/8/1068776.jpg"
        alt=""
      />
    </div>
  );
};

export { BLoggin, ALoggin };
