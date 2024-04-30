import { Link } from "react-router-dom";
import justinbeiber from "../../assets/justin-beiber.png";

const Artist = () => {
  return (
    <div className=" grid grid-cols-5 gap-5">
      <Link to={"/artist/1"}>
        <div className=" text-xl bg-red-600 h-56 relative rounded-tr-[150px] rounded-lg w-full">
          <div className=" absolute bottom-0  w-full h-[120%]">
            <img src={justinbeiber} className=" w-full h-full" alt="" />
            <div className=" flex justify-between items-center">
              <span className=" text-white text-sm font-bold font-roboto">
                Justin beiber
              </span>
              <small className=" text-xs font-medium font-roboto text-gray-400">
                10-2-2024
              </small>
            </div>
          </div>
        </div>
      </Link>
      <Link to={"/artist/2"}>
        <div className=" text-xl bg-red-600 h-56 relative rounded-tr-[150px] rounded-lg w-full">
          <div className=" absolute bottom-0  w-full h-[120%]">
            <img src={justinbeiber} className=" w-full h-full" alt="" />
          </div>
        </div>
      </Link>
      <Link to={"/artist/3"}>
        <div className=" text-xl bg-red-600 h-56 relative rounded-tr-[150px] rounded-lg w-full">
          <div className=" absolute bottom-0  w-full h-[120%]">
            <img src={justinbeiber} className=" w-full h-full" alt="" />
          </div>
        </div>
      </Link>
      <Link to={"/artist/4"}>
        <div className=" text-xl bg-red-600 h-56 relative rounded-tr-[150px] rounded-lg w-full">
          <div className=" absolute bottom-0  w-full h-[120%]">
            <img src={justinbeiber} className=" w-full h-full" alt="" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Artist;
