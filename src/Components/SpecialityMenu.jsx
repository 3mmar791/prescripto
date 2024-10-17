import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";
function SpecialityMenu() {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
    >
      <h1 className="text-3xl font-medium">Find by Speciality </h1>
      <p className="text-center text-sm sm:w-1/3">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>

      <div className="sm:justify- flex w-full gap-4 overflow-scroll pt-5 sm:justify-center">
        {specialityData.map((item, index) => {
          return (
            <Link
              onClick={() => {
                scrollTo(0, 0);
              }}
              className="flex flex-shrink-0 cursor-pointer flex-col items-center text-xs transition-all duration-500 hover:translate-y-[-10px]"
              key={index}
              to={`/doctors/${item.speciality}`}
            >
              <img
                loading="lazy"
                className="mb-2 w-16 sm:w-24"
                src={item.image}
                alt=""
              />
              <p>{item.speciality}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SpecialityMenu;
