import React, { FC, useEffect } from "react";
import { useCookies } from "react-cookie";
import PsRecentJobs from "src/components/molecules/PsRecentJobs";
import PsWalletSearchCard from "src/components/ps-wallet-search-card";
import WelcomeModal from "src/components/molecules/WelcomeModal";
import { logPageview } from "src/utils/ga";

const Home: FC = () => {
  const COOKIE_NAME = "accepted_welcome_message";

  useEffect(() => logPageview("load homepage"), []);
  const [cookies, setCookie] = useCookies([COOKIE_NAME]);

  return (
    <div className="container mx-auto pb-5">
      <PsWalletSearchCard
        walletAddrOrig={"7euRJbSQ9wwxzYHN3xicukmSjSpKcUGTV7CYhaxvYTz9"}
      />
      <PsRecentJobs />
      <WelcomeModal
        initShow={cookies[COOKIE_NAME] ? false : true}
        onAccept={() => setCookie(COOKIE_NAME, true, { path: "/" })}
      />
    </div>
  );
};

export default Home;
