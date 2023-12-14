import { useState } from "react";
import logo from "../assets/logo.png";
import { useHumpyQuery } from "../utils/data";
export const HumpyChat = () => {
  const [value, setValue] = useState("");
  const { data, isLoading, refetch } = useHumpyQuery(value);
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
      <div className="flex-grow press-start-2p">
        {isLoading ? " Waiting for humpy..." : data}
      </div>
      <div className="flex flex-row gap-4">
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="p-2 text-black fira basis-full"
          placeholder="Talk to humpy!"
        />
        <button
          onClick={() => {
            refetch();
          }}
          className="bg-tertiary hover:bg-tertiaryLight p-2 text-white fira  "
        >
          Send
        </button>
      </div>
    </div>
  );
};
