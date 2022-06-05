import Modal from "./Modal";

function Header() {
  return (
    <header>
      <h1>TL</h1>
      <Modal>
        <Modal.Trigger>?</Modal.Trigger>
        <Modal.Window>Lorem ipsum.</Modal.Window>
      </Modal>
    </header>
  );
}

export default Header;
