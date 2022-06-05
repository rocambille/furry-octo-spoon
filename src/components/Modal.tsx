import { ReactNode, useEffect, useState } from "react";

interface ModalProps {
  children: ReactNode;
}

interface TriggerProps {
  children: ReactNode;
}

interface WindowProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  const [keyDownListener, setKeyDownListener] =
    useState<EventListener | null>();

  useEffect(() => {
    keyDownListener && window.addEventListener("keydown", keyDownListener);

    return () => {
      keyDownListener && window.removeEventListener("keydown", keyDownListener);
    };
  }, [keyDownListener]);

  return (
    <details
      className="modal group"
      onToggle={(event) => {
        const details = event.target as HTMLDetailsElement;

        if (details.open) {
          setKeyDownListener(() => (event: Event) => {
            const key = (event as KeyboardEvent).key;

            if (key === "Escape") {
              details.open = false;
              setKeyDownListener(null);
            }
          });
        } else {
          setKeyDownListener(null);
        }
      }}
    >
      {children}
    </details>
  );
}

function Trigger({ children }: TriggerProps) {
  return <summary className="modal-trigger">{children}</summary>;
}

Modal.Trigger = Trigger;

function Window({ children }: WindowProps) {
  return <div className="modal-window">{children}</div>;
}

Modal.Window = Window;

export default Modal;
