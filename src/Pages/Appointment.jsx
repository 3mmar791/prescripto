import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../Components/RelatedDoctors";

function Appointment() {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = await doctors.find((doc) => {
      return doc._id === docId;
    });
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    // getting current date
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting end time and date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10,
        );
        endTime.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        endTime.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleDateString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // add slots to array
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });

        // increment time by 30 minitus
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        {/* --------- Doctors Details --------- */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div>
            <img
              loading="lazy"
              className="w-full rounded-lg bg-primary sm:max-w-72"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="mx-2 flex-1 rounded-lg border border-gray-400 bg-white p-8 py-7 sm:mx-0">
            {/* Doc Info : name , degree , experience */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img
                loading="lazy"
                className="w-5"
                src={assets.verified_icon}
                alt=""
              />
            </p>
            <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="rounded-full border px-2 py-0.5 text-xs">
                {docInfo.experience}
              </button>
            </div>
            {/* Doctor About */}
            <div>
              <p className="mt-3 flex items-center gap-1 text-sm font-medium">
                About <img loading="lazy" src={assets.info_icon} alt="" />
              </p>
              <p className="mt-1 max-w-[700px] text-sm text-gray-500">
                {docInfo.about}
              </p>
            </div>
            <p className="mt-4 font-medium text-gray-500">
              Appointment fee:
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        {/* Booking Slots */}
        <div className="mt-4 font-medium text-gray-700 sm:ml-72 sm:pl-4">
          <p>Booking slots</p>
          <div className="mt-4 flex w-full items-center gap-3 overflow-x-scroll">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  key={index}
                  className={`min-w-16 cursor-pointer rounded-full py-6 text-center ${slotIndex === index ? "bg-primary text-white" : "border border-gray-200"}`}
                  onClick={() => {
                    setSlotIndex(index);
                  }}
                >
                  <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                  <p>{item[0] && item[0].dateTime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="mt-4 flex w-full items-center gap-3 overflow-x-scroll">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => {
                    setSlotTime(item.time);
                  }}
                  key={index}
                  className={`flex-shrink-0 cursor-pointer rounded-full px-5 py-2 text-sm font-light ${item.time === slotTime ? "bg-primary text-white" : "border border-gray-300 text-gray-300"}`}
                >
                  {item.time.toLowerCase().split(",")[1]}
                </p>
              ))}
          </div>
          <button className="my-6 rounded-full bg-primary px-14 py-3 text-sm font-light text-white">
            Book an appointment
          </button>
        </div>
        {/* Listing Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
}

export default Appointment;
