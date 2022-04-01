import axios from "axios";
import React, { FC } from "react";
import { BASE_API_URL } from "src/utils/api";
import { Button } from "src/components/atoms/Button";
import Modal from "src/components/molecules/Modal/Modal";
import FeedbackForm from "./feedback-form";
import FeedbackGreeting from "./feedback-greeting";
import { TFeedbackDefault } from "./type";
import Image from "src/components/atoms/Image";

const defaultFeedbackValues: TFeedbackDefault = {
  nextNewFeature: "Whale Watching",
  feedback: "",
};

const defaultFormSubmit = {
  isSubmit: false,
  isSuccess: false,
  isFail: false,
  isProgress: false,
};

interface Props {
  show: boolean;
  onAccept: () => void;
}

const FeedbackModal: FC<Props> = ({ show, onAccept }) => {
  const [formSubmitCalled, setFormSubmitCalled] = React.useState(false);
  const [feedbackValues, setFeedbackValues] = React.useState<TFeedbackDefault>(
    defaultFeedbackValues
  );

  const [formSubmit, setFormSubmit] = React.useState(defaultFormSubmit);

  // Reset Values to Default
  const resetDefault = () => {
    setFeedbackValues(defaultFeedbackValues);
    setFormSubmitCalled(false);
    setFormSubmit(defaultFormSubmit);
  };

  const handleClose = () => {
    resetDefault();
    onAccept();
  };

  const submitFeedback = async () => {
    const response = await axios
      .post(`${BASE_API_URL}/feedback`, feedbackValues)
      .catch((error) => {
        throw new Error(error);
      });
    return response;
  };

  const handleSendFeedback = async () => {
    setFormSubmitCalled(true);
    if (!feedbackValues.nextNewFeature || !feedbackValues.feedback) return;
    setFormSubmit({ ...formSubmit, isSubmit: true });
    const response = await submitFeedback();
    if (response)
      setFormSubmit({ ...formSubmit, isSubmit: true, isSuccess: true });
  };

  return (
    <Modal
      open={show}
      onClose={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      className="bg-app-background"
    >
      <Modal.Header
        className="bg-black"
        closeIcon={true}
        onClosePress={handleClose}
      >
        <Image
          alt="Jases.IO"
          width={81.34} height={24}
          className="cursor-pointer h-6"
          src="/logo-small.png"
        />
      </Modal.Header>
      <Modal.Body>
        {formSubmit.isSubmit && formSubmit.isSuccess ? (
          <FeedbackGreeting />
        ) : (
          <FeedbackForm
            feedbackValues={feedbackValues}
            setFeedbackValues={setFeedbackValues}
            checkValidate={formSubmitCalled}
          />
        )}
      </Modal.Body>

      <Modal.Footer className="flex justify-end">
        {formSubmit.isSubmit && formSubmit.isSuccess ? (
          <Button appearance="secondary" onClick={handleClose}>
            Close
          </Button>
        ) : (
          <Button appearance="secondary" onClick={handleSendFeedback}>
            Send
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default FeedbackModal;
