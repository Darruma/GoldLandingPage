import etherscan from "../assets/etherscan.svg";
import coingecko from "../assets/coingecko.svg";
import dextools from "../assets/dextools.svg";
import telegram from "../assets/tg.svg";
import discord from "../assets/discord.svg";
import twitter from "../assets/twitter.svg";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
function Socials() {
  const socialWidth = 50;
  return (
    <div className="flex mx-auto flex-row gap-8 bg-black justify-center items-center w-fit p-2 px-4 svgWhite ">
      <ExternalLink href="https://basescan.org/address/0xbeFD5C25A59ef2C1316c5A4944931171F30Cd3E4">
        <img width={socialWidth} src={etherscan} />
      </ExternalLink>
      <ExternalLink href="https://www.coingecko.com/en/coins/goldenboys">
        <img width={socialWidth} src={coingecko} />
      </ExternalLink>
      <ExternalLink href="https://www.dextools.io/app/en/base/pair-explorer/0xe40cbccba664c7b1a953827c062f5070b78de868-0x4200000000000000000000000000000000000006-0xbefd5c25a59ef2c1316c5a4944931171f30cd3e4">
        <img width={socialWidth} src={dextools} />
      </ExternalLink>
      <ExternalLink href="https://t.me/goldenboysportal">
        <img width={socialWidth} src={telegram} />
      </ExternalLink>
      <ExternalLink href="https://discord.gg/Dr5T464wYA4">
        <img width={socialWidth} src={discord} />
      </ExternalLink>
      <ExternalLink href="https://twitter.com/GoldOnBaseChain">
        <img width={socialWidth} src={twitter} />
      </ExternalLink>
    </div>
  );
}

export default Socials;
