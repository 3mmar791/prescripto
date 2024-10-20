import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="my-10 mt-40 flex grid-cols-[3fr_1fr_1fr] flex-col gap-14 text-sm sm:grid">
        {/* ------------------ Left Section ----------- */}
        <div>
          <img loading="lazy" className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full leading-6 text-gray-600 md:w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* ------------------ Center Section ----------- */}
        <div>
          <p className="mb-5 text-lg font-medium">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* ------------------ Right Section ----------- */}
        <div>
          <p className="mb-5 text-lg font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* -------------- Copy Right --------------*/}
      <div>
        <hr />
        <p className="py-5 text-center text-sm">
          Copyright © 2024 GreatStack - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
