import React, { FC, useState } from "react";
import { Image } from "react-bootstrap";
import Modal from "src/components/molecules/Modal/Modal";
import { Button } from "src/components/atoms/Button";
import {Text} from 'src/components/atoms/Text';
import { logEvent } from "src/utils/ga";

interface Props {
  initShow: boolean;
  onAccept: () => void;
}

const WelcomeModal: FC<Props> = ({ initShow, onAccept }) => {
  const [show, setShow] = useState(initShow);

  const handleClose = () => {
    logEvent({ category: "Welcome modal", action: "accept" });
    onAccept();
    setShow(false);
  };

  return (
    <Modal
      open={show}
      onClose={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      className="bg-app-background"
    >
      <Modal.Header>
          <div className="flex">
            <div className="flex-initial">
              <Image
                className="rounded"
                alt="ProfileImage"
                src="/images/7PWvrpIe_400x400.png"
                height={64}
                width={64}
              />
            </div>
            <div className="flex-initial -mt-1 ml-2 text-primary-dark">
              <Text size="sm" type="div" className="text-primary-dark">@Jases_the_monke</Text>
              <Text size="xl" type="div">GM!</Text>
            </div>
          </div>
      </Modal.Header>
      <Modal.Body className="text-primary-dark">
        <Text size="md" type="div">
          You`re <em>super</em> early. Like, OG early. There will be bugs! 🙈
        </Text>
        <Text size="md" type="div" className="mt-4">
          Also, Jases uses cookies for remembering preferences etc.
        </Text>
      </Modal.Body>
      <Modal.Footer className="flex justify-end">
        <Button appearance="secondary" onClick={handleClose}>
          Cool
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WelcomeModal;
