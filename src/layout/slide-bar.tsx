import { slideNav } from "@/assets/slide-nav";
import { Link, useLocation } from "react-router-dom";

const SlideBar = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className="  ">
      <h4 className="  pl-6 pt-5 text-white text-2xl">Logo</h4>
      <div className=" space-y-4 mt-10">
        {slideNav.map((nav) => (
          <Link
            to={nav.path}
            className={`w-full pl-6 py-2  flex items-center gap-3  relative ${
              pathname === nav.path
                ? " before:absolute before:left-0 before:w-1 before:h-full before:bg-red-600 before:text-red-600 text-red-600"
                : "text-gray-400"
            }`}
            key={nav.id}
          >
            {nav.icon}
            <p>{nav.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SlideBar;
