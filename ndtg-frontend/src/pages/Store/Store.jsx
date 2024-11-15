import { Header, StoreSection, Announce } from "./style";
import { Helmet } from "react-helmet";

function Store() {
  return (
    <>
      <Helmet>
        <title>Cửa Hàng | Ngược Dòng Thời Gian</title>
      </Helmet>
      <StoreSection>
        <Header>Cửa Hàng</Header>
        <Announce>
          Cửa hàng hiện không hoạt động. <br></br>Vui lòng quay trở lại sau.
        </Announce>
      </StoreSection>
    </>
  );
}
export default Store;
