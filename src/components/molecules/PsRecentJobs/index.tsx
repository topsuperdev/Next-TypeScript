import React, { FC, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import RecentJobsCard from "src/components/molecules/Cards/RecentJobsCard";
import { Text } from "src/components/atoms/Text";
import { Table } from "src/components/atoms/Table";

const PsRecentJobs: FC = () => {
  const [recentJobs, setRecentJobs] =
    useState<Solana.AnalyzePortfolioJobState[]>();

  useEffect(() => {
    async function getAndSet() {
      try {
        const res = await fetch(
          `https://ouo4ylg48g.execute-api.us-east-2.amazonaws.com/prod/derive-current-portfolio/recent-jobs`
        );
        const tt = await res.json();
        const rj = tt && (tt["recentJobs"] as Solana.AnalyzePortfolioJobState[]);
        if (rj) setRecentJobs(rj);  
      } catch(error: any) {
        throw new Error(`Error | Recent Jobs | ${error?.message}`)
      }
    }

    getAndSet();
  }, []);

  const inner =
    !recentJobs || recentJobs.length < 1 ? (
      <div className="py-2 text-center">
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      </div>
    ) : (
      <Table columns={["Wallet", "Tokens", "Analyzed"]}>
        {recentJobs.map((rj, index) => (
          <RecentJobsCard
            key={rj.jobId}
            isEven={index % 2 === 0}
            recentJob={rj}
          />
        ))}
      </Table>
    );

  return (
    <div className="mt-5 flex flex-col max-w-md container mx-auto">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="relative flex justify-center">
            <Text className="px-2 text-sm text-primary-dark">
              Recently analyzed portfolios
            </Text>
          </div>
          <div className="shadow-sm overflow-hidden border-b bg-background-color sm:rounded-lg">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full"></div>
              </div>
            </div>
            {inner}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsRecentJobs;
