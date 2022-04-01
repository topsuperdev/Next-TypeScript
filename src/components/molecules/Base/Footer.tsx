import React, { FC } from "react";
import { Container } from "react-bootstrap";
import { Discord, Twitter } from "react-bootstrap-icons";
import { Button } from "src/components/atoms/Button";
import FeedbackModal from "src/components/feedback/feedback-modal";
import Image from "next/image"

const Footer: FC = React.memo(() => {
  const [showFeedbackform, setShowFeedbackForm] = React.useState(false);
  const handleFeedbackForm = (type: "show" | "hide") => () => {
    switch (type) {
      case "show":
        setShowFeedbackForm(true);
        break;
      case "hide":
        setShowFeedbackForm(false);
        break;
      default:
        break;
    }
  };
  return (
    <div
      className="border-t w-full border-plain-contrast-medium"
    >
      <Container>
        <footer className="mt-8">
          <div className="flex">
            <div className="w-1/3">
              <a
                className="text-primary-dark text-base no-underline"
                href="https://twitter.com/Jases_the_monke"
                rel="noopener noreferrer"
                target="_blank"
                title="Jases"
              >
                <Image
                  alt="Jases"
                  src="/footer-logo.png"
                  width="80"
                  height="25"
                />
                {/* &copy block height 82857263 */}
              </a>
            </div>
            <section className="w-1/3 flex justify-center items-center">
              <div className="mr-2">
                <a
                  href="https://discord.gg/u4dJbETUHS"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Discord className="w-6 h-6" color="#777" />
                </a>
              </div>
              <div className="ml-2">
                <a
                  href="https://twitter.com/Jases_the_monke"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter className="w-6 h-6" color="#777" />
                </a>
              </div>
            </section>
            <div className="w-1/3">
              <Button
                className="-mt-2 float-right"
                onClick={handleFeedbackForm("show")}
              >
                Feedback
              </Button>
            </div>
          </div>
          <div className="pt-4 pb-4 text-secondary text-sm">
            <p>
              Jases does not guarantee the accuracy or reliability of the info
              provided on this site. The information is provided `as is` without
              warranty of any kind. We do not accept any responsibility or
              liability for the accuracy, content, completeness, legality, or
              reliability of the information contained on this website. No
              warranties, promises and/or representations of any kind, expressed
              or implied, are given as to the nature, standard, accuracy or
              otherwise of the information provided in this website nor to the
              suitability or otherwise of the information to your particular
              circumstances. We test in prod, NFA, etc.
            </p>
            <p className="mt-4">
              Real-time quotes via IEX and{" "}
              <a href="https://pyth.network/" target="_blank" rel="noreferrer">
                Pyth
              </a>
              .
            </p>
          </div>
        </footer>
      </Container>
      <FeedbackModal
        show={showFeedbackform}
        onAccept={handleFeedbackForm("hide")}
      />
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;
