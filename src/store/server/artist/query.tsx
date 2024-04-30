import { axios } from "@/api/axio";
import { useQuery } from "@tanstack/react-query";
import { ApiSelect } from "../music/typed";
import { ArtistProp } from "./typed";

const artist = async () : Promise<ApiSelect<ArtistProp>> => {
  const { data } = await axios.get("artist");
  return data;
};

export const useArtist = () => {
  return useQuery({
    queryKey: ["artist"],
    queryFn: () => artist(),
  });
};
