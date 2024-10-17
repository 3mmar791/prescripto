import { assets } from "../assets/assets";

function Header() {
  return (
    <div className="flex h-[75vh] flex-col flex-wrap rounded-lg bg-primary px-6 md:flex-row md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="mx-auto flex flex-col items-start justify-center gap-4 py-10 md:mb-[-30px] md:w-1/2 md:py-[10vh]">
        <p className="text-3xl font-semibold leading-tight text-white md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="fex-col flex items-center gap-3 text-sm font-light text-white md:flex-row">
          <img
            loading="lazy"
            className="w-28"
            src={assets.group_profiles}
            alt=""
          />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="mx-auto flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm text-gray-600 transition-all duration-300 hover:scale-105 md:m-0"
        >
          Book appointment
          <img loading="lazy" className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* Right Side */}
      <div className="relative md:w-1/2">
        <img
          loading="lazy"
          className="bottom-0 h-auto w-full rounded-lg md:absolute"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
