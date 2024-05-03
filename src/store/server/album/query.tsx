import { axios } from "@/api/axio";
import { useQuery } from "@tanstack/react-query";
import { ApiSelect } from "../music/typed";
import { AlbumProp } from "./typed";

const album = async (): Promise<ApiSelect<AlbumProp>> => {
  const { data } = await axios.get("album");
  return data;
};

export const useAlbum = () => {
  return useQuery({
    queryKey: ["album"],
    queryFn: () => album(),
  });
};
