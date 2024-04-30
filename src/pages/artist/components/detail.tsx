import justinbeiber from "../../../assets/justin-beiber.png";

const Detail = () => {
  return (
    <div className=" w-full h-full grid grid-cols-3 gap-5">
      <div className=" text-xl bg-red-600 h-72 relative rounded-tr-[150px] rounded-lg">
        <div className=" absolute bottom-0  w-full h-[120%]">
          <img src={justinbeiber} className=" w-full h-full" alt="" />
        </div>
      </div>
      <div className=" text-xl text-white col-span-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo
          animi ipsam libero itaque hic alias ex, dolorum provident, aperiam
          repellendus aliquam error. Temporibus asperiores officia odio aperiam
          recusandae aut!
        </p>
      </div>
    </div>
  );
};

export default Detail;
