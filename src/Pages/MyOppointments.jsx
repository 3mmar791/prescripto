import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
function MyOppointments() {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p className="mt-12 border-b pb-3 font-medium text-zinc-700">
        My appointments
      </p>
      <div>
        {doctors.slice(0, 3).map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_2fr] gap-4 border-b py-2 sm:flex sm:gap-6"
            >
              <img
                loading="lazy"
                className="w-32 bg-indigo-50"
                src={item.image}
                alt=""
              />
              <div className="flex-1 text-sm text-gray-600">
                <p className="font-semibold text-neutral-800">{item.name}</p>
                <p className="mt-1 font-medium text-zinc-700">
                  {item.speciality}
                </p>
                <p className="font-medium text-zinc-700">Address:</p>
                <p className="text-xs">{item.address.line1}</p>
                <p className="text-xs">{item.address.line2}</p>
                <p className="mt-1 text-sm">
                  <span className="text-sm font-medium text-neutral-700">
                    Date & Time:
                  </span>
                  25, July, 2024 | 8:30 PM
                </p>
              </div>
              <div className="flex flex-col justify-end gap-2">
                <button className="rounded py-2 text-center text-sm text-stone-500 transition-all duration-300 hover:bg-primary hover:text-white sm:min-w-48">
                  Pay Online
                </button>
                <button className="rounded py-2 text-center text-sm text-stone-500 transition-all duration-300 hover:bg-red-600 hover:text-white sm:min-w-48">
                  Cancel appointment
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOppointments;
