import { ReactNode, useEffect, useState } from "react";

interface ModalProps {
  children: ReactNode;
}

interface TriggerProps {
  children: ReactNode;
  className?: string;
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
      className="modal"
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

function Trigger({ children, className = "" }: TriggerProps) {
  return <summary className={`modal-trigger ${className}`}>{children}</summary>;
}

Modal.Trigger = Trigger;

function Window({ children }: WindowProps) {
  return <div className="modal-window">{children}</div>;
}

Modal.Window = Window;

export default Modal;
