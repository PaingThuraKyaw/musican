import { useArtist } from "@/store/server/artist/query";

const Artist = () => {
  const { data } = useArtist();

  console.log(data?.data);

  return (
    <div className=" grid grid-cols-12">
      {data?.data.map((art) => (
        <div key={art.id} className=" col-span-3">
          <img
            src={art.artist_image}
            className=" mx-auto w-[150px] object-cover rounded-full h-[150px]"
            alt={art.artist}
          />
          <div className=" mt-2">
            <h3 className=" text-white/80 text-lg text-center font-bold " >{art.artist}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Artist;
