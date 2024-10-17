import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function RelatedDoctors({ speciality, docId }) {
  const { doctors } = useContext(AppContext);
  const navigat = useNavigate();
  const [relDoc, setRelDoc] = useState([]);
  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId,
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);
  return (
    <div className="my-16 flex flex-col items-center gap-4 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="text-center text-sm sm:w-1/3">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="grid w-full grid-cols-auto gap-4 gap-y-6 px-3 pt-5 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => {
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
                <p className="text-lg font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">{item.speciality}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          navigat(`/doctors`);
          scrollTo(0, 0);
        }}
        className="mt-10 rounded-full bg-blue-50 px-12 py-3 text-gray-600 hover:bg-blue-100"
      >
        more
      </button>
    </div>
  );
}

export default RelatedDoctors;
