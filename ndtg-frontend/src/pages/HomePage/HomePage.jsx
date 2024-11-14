import { Link } from "react-router-dom";
import {
  HomePageSection,
  HistoryButton,
  QuizButton,
  ImgSection,
  ButtonSection,
  ArtButton,
  Header,
} from "./style";
import { Helmet } from "react-helmet";
import { LockOutlined } from "@ant-design/icons";

function HomePage() {
  return (
    <HomePageSection>
      <Helmet>
        <title>Ngược Dòng Thời Gian</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Helmet>
      <Header>Ngược Dòng Thời Gian</Header>
      <ButtonSection>
        <Link to="/hoc-lich-su">
          <HistoryButton>Học Lịch Sử</HistoryButton>
        </Link>
        <Link to="/hoi-va-dap">
          <QuizButton>Hỏi & Đáp</QuizButton>
        </Link>
        <ArtButton>
          Khám Phá Nghệ Thuật
          <LockOutlined className="lock-icon" />
        </ArtButton>
      </ButtonSection>
      <ImgSection></ImgSection>
    </HomePageSection>
  );
}
export default HomePage;
