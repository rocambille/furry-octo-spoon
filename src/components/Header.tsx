import Modal from "./Modal";

interface Props {
  className?: string;
}

function Header({ className = "" }: Props) {
  return (
    <header className={`flex flex-row ${className}`}>
      <h1>TL</h1>
      <Modal>
        <Modal.Trigger>?</Modal.Trigger>
        <Modal.Window>Lorem ipsum.</Modal.Window>
      </Modal>
    </header>
  );
}

export default Header;
