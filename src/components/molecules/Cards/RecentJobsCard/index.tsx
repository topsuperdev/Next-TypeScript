import { FC } from "react";
import { Card } from "react-bootstrap";
import WalletAddressText from "src/components/atoms/common/WalletAddressText";
import moment from "src/utils/moment-with-locale";
interface Props {
  isEven: boolean;
  recentJob: Solana.AnalyzePortfolioJobState;
}

// @todo This isn't a card -- more like a row. Can we rename to `RecentJobRow` and move to different folder?
const RecentJobsCard: FC<Props> = ({ recentJob, isEven }) => {
  const bgColorClassName = isEven ? "bg-app-background" : "bg-app-primary-light";
  return (
    <tr className={bgColorClassName}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="flex  items-center">
          <div className="flex-initial flex-shrink-0">
            <a
              className="hover:underline text-sm text-blue-500"
              href={`/portfolio/${recentJob.walletAddr}`}
            >
              <Card className="mx-auto rounded-md">
                <Card.Img
                  className="rounded w-8 h-8"
                  variant="top"
                  src={recentJob.oldestTokenImage || "/Jases-square.png"}
                />
              </Card>
            </a>
          </div>
          <div className="flex-initial ml-2 justify-center">
            <WalletAddressText walletAddr={recentJob.walletAddr} href={`/portfolio/${recentJob.walletAddr}`} />
          </div>
        </div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        {recentJob.itemCount}
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap text-sm text-primary-dark">
        <time dateTime={recentJob.updatedAt.toString()}>
          {moment(recentJob.updatedAt).fromNow()}
        </time>
      </td>
    </tr>
  );
};

export default RecentJobsCard;
