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
      <ExternalLink href="https://basescan.org/token/0xbeFD5C25A59ef2C1316c5A4944931171F30Cd3E4">
        <img width={socialWidth} src={etherscan} />
      </ExternalLink>
      <ExternalLink href="https://www.coingecko.com/en/coins/goldenboys">
        <img width={socialWidth} src={coingecko} />
      </ExternalLink>
      <ExternalLink href="https://www.dextools.io/app/en/base/pair-explorer/0x433f09ca08623e48bac7128b7105de678e37d988-0x833589fcd6edb6e08f4c7c32d4f71b54bda02913-0xbefd5c25a59ef2c1316c5a4944931171f30cd3e4s">
        <img width={socialWidth} src={dextools} />
      </ExternalLink>
      <ExternalLink href="https://t.me/goldenboysportal">
        <img width={socialWidth} src={telegram} />
      </ExternalLink>
      <ExternalLink href="https://discord.gg/BCanN8pVwa">
        <img width={socialWidth} src={discord} />
      </ExternalLink>
      <ExternalLink href="https://twitter.com/Gold_On_Chain">
        <img width={socialWidth} src={twitter} />
      </ExternalLink>
    </div>
  );
}

export default Socials;
