import Modal from "./Modal";

interface Props {
  className?: string;
}

function Header({ className = "" }: Props) {
  return (
    <header
      className={`flex flex-row justify-center items-center p-4 ${className}`}
    >
      <h1 className="mr-2">TL</h1>
      <Modal>
        <Modal.Trigger className="flex flex-row justify-center items-center w-8 h-8">
          ?
        </Modal.Trigger>
        <Modal.Window>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            euismod facilisis ligula, eget viverra elit ultricies sed. Aliquam
            mi neque, dignissim nec scelerisque vel, eleifend vel ex. Sed
            sagittis fermentum ex, vitae varius dolor fringilla ut. Sed
            bibendum, lorem quis molestie placerat, diam augue maximus libero,
            in convallis eros turpis in sem. Sed malesuada, ante a accumsan
            rhoncus, velit dui cursus ligula, sed volutpat quam risus at ante.
            Maecenas id pharetra tellus, vel mollis est. Fusce eget ex a dolor
            eleifend pharetra in id ligula. Cras mattis arcu purus, sit amet
            molestie enim malesuada ut. In elementum fermentum ante, lacinia
            fermentum urna commodo vitae.
          </p>
        </Modal.Window>
      </Modal>
    </header>
  );
}

export default Header;
