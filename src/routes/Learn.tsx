import debank from "../assets/Debank.png";
import lore from "../assets/Lore.png";
import news from "../assets/News.png";
import mirror from "../assets/mirror.png";
import Socials from "../components/SocialsBar";
import NavWithLogo from "../components/NavWithLogo";
export function Learn() {
  return (
    <div className="">
      <div className="flex flex-col h-full overflow-hidden">
        <NavWithLogo />
        <div className="mx-16 basis-full">
          <h1 className="press-start-2p text-secondary text-4xl text-center pt-8">
            MEET HUMPY
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center pt-32 pb-32">
            <div className="flex flex-col gap-8">
              <img src={debank} alt="debank" width={250} />
              <div className="flex flex-row justify-center items-center gap-4">
                <a
                  href="https://debank.com/profile/0x36cc7b13029b5dee4034745fb4f24034f3f2ffc6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary py-2 w-48 text-center rounded-lg text-black font-bold text-2xl roboto-bold"
                >
                  Wallet
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <img src={news} alt="news" width={250} />
              <div className="flex flex-row justify-center items-center gap-8">
                <a
                  href="https://messari.io/report/governor-note-the-vebal-wars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary py-2 w-48 text-center rounded-lg text-black font-bold text-2xl roboto-bold"
                >
                  News
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <img src={lore} alt="lore" width={250} />
              <div className="flex flex-row justify-center items-center">
                <a
                  href="https://mirror.xyz/0xEb23BAacd279fD08248101804A6c8222C26768AF/figX7_2ek5YEfsfgNjCb_vIOoasmCgnc2rtH9cE0jzc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary py-2 w-48 text-center rounded-lg text-black font-bold text-2xl roboto-bold"
                >
                  Lore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black md:h-40 flex flex-col gap-8 pt-8 pb-8  justify-around items-center">
        <div className="text-4xl italic text-center ">
          {" "}
          “main tumhaara dil jeet loonga”{" "}
        </div>
        <div className="text-xl">Humpy</div>
      </div>
      <div className="bg-primary flex flex-col gap-8 justify-center items-center pt-8 pb-32">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/D_hWuyWjzb0?si=4i2mJ9-brHWCK_U0"
          title="GOLD"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-xl w-full"
        ></iframe>

        <div className="pt-12 pb-">
          <Socials />
        </div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mirror.xyz/0xEb23BAacd279fD08248101804A6c8222C26768AF"
        >
          <img src={mirror} alt="mirror" width={250} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mirror.xyz/0xEb23BAacd279fD08248101804A6c8222C26768AF"
        >
          <div className="text-4xl border-b-2 text-center ">
            Read Gold Blog{" "}
          </div>
        </a>
      </div>
    </div>
  );
}
