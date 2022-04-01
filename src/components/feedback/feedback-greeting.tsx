import Image from "next/image";
import React, { FC } from "react";

interface Props {}

const FeedbackGreeting: FC<Props> = () => {
  return (
    <div className="p-4 text-center mb-4 flex flex-col items-center rounded-md">
      <span className="text-primary-dark text-6xl">Thank You!</span>
      <Image alt="feedback-thank-you" className="w-16 h-16 mt-4" src="/images/thumbsup_green.png" />
      <span className="text-primary-dark mt-6 text-md">
        Your feedback has been submitted successfully.
      </span>
    </div>
  );
};

export default FeedbackGreeting;
