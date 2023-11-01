import Modal from "./Modal";

function Withdraw({
  close,
  auraPrice,
}: {
  close: () => void;
  auraPrice: number;
}) {
  return <Modal close={close} auraPrice={auraPrice} />;
}
export default Withdraw;
