import React, { Dispatch, FC, SetStateAction } from "react";
import { Form } from "react-bootstrap";
import { TFeedbackDefault } from "./type";

interface Props {
  checkValidate: boolean;
  feedbackValues: TFeedbackDefault;
  setFeedbackValues: Dispatch<SetStateAction<TFeedbackDefault>>;
}

const FeedbackForm: FC<Props> = ({
  checkValidate,
  feedbackValues,
  setFeedbackValues,
}) => {
  const handleFormChange = (type: "question" | "feedback") => (event: any) => {
    switch (type) {
      case "question":
        setFeedbackValues({
          ...feedbackValues,
          nextNewFeature: event.target.value,
        });
        break;
      case "feedback":
        setFeedbackValues({
          ...feedbackValues,
          feedback: event.target.value,
        });
        break;
    }
  };

  return (
    <>
      <div className="p-4 w-96 text-center bg-green-100 mb-4 flex flex-col rounded-md">
        {/* <span className="text-2xl text-gray-600">We value your feedback</span> */}
        <span className="text-sm text-gray-600">
          Please help Jases improve!
        </span>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="chooseNextFeature">
          <Form.Label className="text-primary-dark">
            Which feature should we make next? *
          </Form.Label>
          <Form.Select
            placeholder="Combine Wallets"
            onChange={handleFormChange("question")}
            defaultValue=""
            className="bg-app-background-plain border-plain-contrast-light text-primary-dark"
          >
            <option className="text-muted" value="" disabled>
              Select one
            </option>
            <option value="1">Combine Wallets</option>
            <option value="2">Taxes</option>
            <option value="3">Whale Watching</option>
          </Form.Select>
          {checkValidate && !feedbackValues.nextNewFeature && (
            <Form.Text className="text-red-700">
              Please select one option.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-primary-dark">Feedback *</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            className="bg-app-background-plain border-plain-contrast-light text-primary-dark"
            onChange={handleFormChange("feedback")}
          />
          {checkValidate && !feedbackValues.feedback && (
            <Form.Text className="text-red-700">
              Feedback is a required field.
            </Form.Text>
          )}
        </Form.Group>
      </Form>
    </>
  );
};

export default FeedbackForm;
