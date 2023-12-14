import goldtg from "../assets/goldtg.png";
import goldx from "../assets/goldx.png";
import golddisc from "../assets/golddisc.png";
import goldenLogo from "../assets/goldenlogo.png";

export const Footer = () => {
  return (
    <div className="flex flex-row justify-around items-center pb-8 w-full">
      <img src={goldenLogo} alt="logo" />

      <div className="flex flex-row gap-4">
        <a
          href="https://discord.gg/Dr5T464wYA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={golddisc} alt="golddisc" width={50} height={50} />
        </a>
        <a
          href="https://twitter.com/Gold_On_Chain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={goldx} alt="goldx" width={50} height={50} />
        </a>
        <a
          href="https://t.me/+YUKhdQVv8KBmMjNk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={goldtg} alt="goldtg" width={50} height={50} />
        </a>
      </div>
    </div>
  );
};
