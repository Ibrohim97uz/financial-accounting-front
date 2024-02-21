import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PropsWithChildren, useState } from "react";

const Modal: React.FC<PropsWithChildren<any>> = ({ children, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

const useModal = (initialVisible = false) => {
  const [visible, setVisible] = useState(initialVisible);
  function showModal() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }
  return { visible, showModal, closeModal };
};

export { Modal, useModal };
