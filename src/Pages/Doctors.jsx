import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Doctors() {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigat = useNavigate();
  const { doctors } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };
  useEffect(() => {
    applyFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speciality, doctors]);
  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="mt-5 flex flex-col items-start gap-5 sm:flex-row">
        <button
          className={`rounded border px-3 py-1 transition-all sm:hidden ${showFilter ? "bg-primary text-white" : ""}`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filter
        </button>
        <div
          className={` ${showFilter ? "flex" : "hidden"} flex-col gap-4 text-sm text-gray-600 sm:flex`}
        >
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigat("/doctors")
                : navigat("/doctors/General physician")
            }
            className={`w-[94e] cursor-pointer rounded border border-gray-300 py-1.5 pl-3 pr-16 transition-all sm:w-auto ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigat("/doctors")
                : navigat("/doctors/Gynecologist")
            }
            className={`w-[94e] cursor-pointer rounded border border-gray-300 py-1.5 pl-3 pr-16 transition-all sm:w-auto ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigat("/doctors")
                : navigat("/doctors/Dermatologist")
            }
            className={`w-[94e] cursor-pointer rounded border border-gray-300 py-1.5 pl-3 pr-16 transition-all sm:w-auto ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigat("/doctors")
                : navigat("/doctors/Pediatricians")
            }
            className={`w-[94e] cursor-pointer rounded border border-gray-300 py-1.5 pl-3 pr-16 transition-all sm:w-auto ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigat("/doctors")
                : navigat("/doctors/Neurologist")
            }
            className={`w-[94e] cursor-pointer rounded border border-gray-300 py-1.5 pl-3 pr-16 transition-all sm:w-auto ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigat("/doctors")
                : navigat("/doctors/Gastroenterologist")
            }
            className={`w-[94e] cursor-pointer rounded border border-gray-300 py-1.5 pl-3 pr-16 transition-all sm:w-auto ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="grid w-full grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => {
            return (
              <div
                onClick={() => {
                  navigat(`/appointment/${item._id}`);
                  scrollTo(0, 0);
                }}
                key={index}
                className="cursor-pointer overflow-hidden rounded-xl border border-blue-200 transition-all duration-500 hover:translate-y-[-10px]"
              >
                <img
                  loading="lazy"
                  className="bg-blue-50"
                  src={item.image}
                  alt=""
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-center text-sm text-green-500">
                    <p className="h-2 w-2 rounded-full bg-green-500"></p>
                    <p>Available</p>
                  </div>
                  <p className="text-lg font-medium text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-600">{item.speciality}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
