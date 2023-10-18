import humpybg from "../assets/humpybackground.svg";
import Socials from "../components/SocialsBar";
import NavWithLogo from "../components/NavWithLogo";

function Vault() {
  return (
    <div className="h-full">
      <div
        style={{
          backgroundImage: `url(${humpybg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 100%",
        }}
        className="flex flex-col h-full overflow-hidden"
      >
        <NavWithLogo />
        <div className="mx-16 basis-full">
          <div className="md:flex md:flex-row items-center md:h-full">
            goldAura Vault
          </div>
        </div>
      </div>

      <Socials />
    </div>
  );
}

export default Vault;
