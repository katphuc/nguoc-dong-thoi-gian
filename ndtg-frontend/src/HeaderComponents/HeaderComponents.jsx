import { useState } from "react";
import {
  HeaderSection,
  IconWrapper,
  NotificationIcon,
  StyledCalendarIcon,
  PopupContent,
  PopupOverlay,
  HeaderPopup,
  CloseButton,
  DayBox,
  DayGrid,
} from "./style";
// import "antd/dist/reset.css";

function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <HeaderSection>
        <IconWrapper>
          <StyledCalendarIcon onClick={togglePopup}></StyledCalendarIcon>
        </IconWrapper>
        <IconWrapper>
          <NotificationIcon></NotificationIcon>
        </IconWrapper>
      </HeaderSection>
      {showPopup && (
        <PopupOverlay onClick={togglePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <HeaderPopup>Điểm Danh Hằng Ngày</HeaderPopup>
            <DayGrid>
              {Array.from({ length: 7 }).map((_, index) => (
                <DayBox key={index}>Ngày {index + 1}</DayBox>
              ))}
            </DayGrid>
            <CloseButton onClick={togglePopup}>Đóng</CloseButton>
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  );
}
export default Header;
