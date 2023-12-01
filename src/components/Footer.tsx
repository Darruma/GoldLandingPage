import goldtg from "../assets/goldtg.png";
import goldx from "../assets/goldx.png";
import golddisc from "../assets/golddisc.png";

export const Footer = () => {
  return (
    <div className="flex flex-row justify-around items-center pb-8 w-full">
      <div className="small-pixel-7 text-6xl no-underline flex flex-row">
        <span className="text-secondary">GOLDEN </span>{" "}
        <span className="text-tertiary"> BOYS</span>
      </div>
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
