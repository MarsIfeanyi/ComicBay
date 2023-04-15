import { logo, facebook, insta, youtube, twitch, twitter } from "../../assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black">
      <div
        className="flex flex-row
 mx-20 justify-between  text-white py-10 "
      >
        <div className="flex flex-col  ">
          <img src={logo} alt="logoImage" className="w-[170px]" />
          <div className="mt-6">
            <p>6 bentlane, off shoprite, GRA , Enugu</p>
            <p className="mt-2">09038340349, 08177823829</p>
            <div className="flex col gap-4">
              <img src={facebook} alt="facebook" />

              <img src={twitter} alt="twitter" />
              <img src={insta} alt="" />

              <img src={youtube} alt="youtube" />

              <img src={twitch} alt="" />
            </div>
          </div>
        </div>

        <div className=" flex flex-col ">
          <h2 className="text-xl font-semibold">Our company</h2>
          <div className="mt-6">
            <p>About us</p>
            <p>Store locator</p>
            <p>Device financing</p>
          </div>
        </div>

        <div className="flex  flex-col">
          <h2 className="text-xl font-semibold">Help and support</h2>
          <div className="mt-6">
            <p>Privacy policy</p>
            <p>Warranty & return policy</p>
            <p>Terms of servis</p>
            <p>FAQs</p>
          </div>
        </div>

        <div className=" flex flex-col">
          <h2 className="text-xl font-semibold">Find it fast</h2>
          <div className="mt-6">
            <p>Best Selling Comics</p>
            <p>Latest Comics</p>
          </div>
        </div>
      </div>

      <p className="text-white  text-center">
        Copyright {currentYear} ComicBay | All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
