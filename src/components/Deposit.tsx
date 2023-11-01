import Modal from "./Modal";

function Deposit({
  close,
  auraPrice,
}: {
  close: () => void;
  auraPrice: number;
}) {
  return <Modal close={close} auraPrice={auraPrice} />;
}
export default Deposit;
