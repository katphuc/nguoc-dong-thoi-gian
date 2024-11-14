// import { Link } from "react-router-dom";
import {
  HistoryGameSection,
  Header,
  PeriodsSection,
  PrehistoricPeriods,
  VanLangAuLacPeriods,
  NorthernDominationPeriod,
} from "./style";
import { Helmet } from "react-helmet";

function HistoryGame() {
  return (
    <HistoryGameSection>
      <Helmet>
        <title>Học Lịch Sử | Ngược Dòng Thời Gian</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Helmet>
      <Header>KHÁM PHÁ CÁC THỜI KỲ CỦA LỊCH SỬ VIỆT NAM</Header>
      <PeriodsSection>
        <PrehistoricPeriods>
          Kỳ Tiền Sử ( Trước năm 2879 TCN)
        </PrehistoricPeriods>
        <VanLangAuLacPeriods>
          Kỳ Văn Lang - Âu Lạc (2879 TCN - 258 TCN)
        </VanLangAuLacPeriods>
        <NorthernDominationPeriod>
          Kỳ Bắc Thuộc (179 TCN - 938)
        </NorthernDominationPeriod>
      </PeriodsSection>
    </HistoryGameSection>
  );
}
export default HistoryGame;
