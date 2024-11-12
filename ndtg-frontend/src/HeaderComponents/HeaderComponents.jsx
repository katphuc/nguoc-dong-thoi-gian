import { HeaderSection, IconWrapper } from "./style";
// import "antd/dist/reset.css";
import { BellFilled, CalendarOutlined } from "@ant-design/icons";

function Header() {
  return (
    <HeaderSection>
      <IconWrapper>
        <CalendarOutlined />
      </IconWrapper>
      <IconWrapper>
        <BellFilled />
      </IconWrapper>
    </HeaderSection>
  );
}
export default Header;
