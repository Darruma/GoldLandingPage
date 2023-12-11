import goldtg from "../assets/goldtg.png";
import goldx from "../assets/goldx.png";
import golddisc from "../assets/golddisc.png";
import goldenLogo from "../assets/goldenlogo.png";

export const Footer = () => {
  return (
    <div className="flex flex-row justify-around items-center pb-8 w-full">
      <img src={goldenLogo} alt="logo" />

      <div className="flex flex-row gap-4">
        <a>
          <img src={golddisc} alt="golddisc" width={50} height={50} />
        </a>
        <a>
          <img src={goldx} alt="goldx" width={50} height={50} />
        </a>
        <a>
          <img src={goldtg} alt="goldtg" width={50} height={50} />
        </a>
      </div>
    </div>
  );
};
