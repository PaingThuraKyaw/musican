import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onSearch = () => {
    navigate(`/search/${search}`);
  };

  return (
    <div className=" mr-8 mt-5 flex justify-between items-center">
      <div className=" bg-zinc-800 px-4 rounded-full overflow-hidden flex items-center">
        <IconSearch className=" text-zinc-400" size={18} />
        <form onSubmit={() => onSearch()} action="">
          <Input
            onChange={(e) => setSearch(e.target.value)}
            className=" w-[300px] outline-none border-none bg-zinc-800 placeholder:text-zinc-400 text-gray-400 "
            placeholder="Search..."
          />
        </form>
      </div>
      <div>
        <Popover>
          <PopoverTrigger>
            <div className=" gap-2 bg-red-600 rounded-full w-[120px] h-[45px] px-2 flex items-center">
              <img
                src="https://ui.shadcn.com/avatars/02.png"
                alt="img"
                className=" w-8 h-8 rounded-full"
              />
              <div>
                <p className=" font-semibold text-[12px] text-white">Lucas</p>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent>This is some</PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
