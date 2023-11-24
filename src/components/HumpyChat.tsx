import logo from "../assets/logo.png";
export const HumpyChat = () => {
  return (
    <div className="gradient-border flex flex-col h-full">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row small-pixel-7 text-5xl">
          <span className="text-secondary">HUMPY </span>{" "}
          <span className="text-tertiary pr-2"> CHAT</span>
          <img src={logo} alt="logo" width={40} height={40} />
        </div>
        <div>X</div>
      </div>
      <div className="flex-grow"></div>
      <input className="p-2" placeholder="Hi, How are you?" />
    </div>
  );
};
