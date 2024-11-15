import styled from "styled-components";
import NotiIcon from "@mui/icons-material/Notifications";
import CalendarIcon from "@mui/icons-material/CalendarMonthOutlined";
import CheckedIcon from "@mui/icons-material/DoneAllOutlined";

export const HeaderSection = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  top: 0;
  left: 0;
  right: 0;
  background-color: #7b9d6a;
  color: white;
  z-index: 2000;
  height: 60px;
`;
export const IconWrapper = styled.div`
  color: white;
  padding-top: 5px;
  font-size: 36px;
  margin-right: 35px;
`;
export const NotificationIcon = styled(NotiIcon)``;
export const StyledCalendarIcon = styled(CalendarIcon)`
  cursor: pointer;
`;
export const StyledCheckedIcon = styled(CheckedIcon)``;
export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 1400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;
export const CloseButton = styled.button`
  background: lightblue;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: auto;
  align-self: center;
`;
export const HeaderPopup = styled.h2`
  text-align: center;
  user-select: none;
`;
export const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-top: 15px;
  height: 200px;
`;

export const DayBox = styled.div`
  padding: 10px;
  background-color: #e0f7fa;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  color: #00796b;
  cursor: pointer;

  &:hover {
    background-color: #b2ebf2;
  }
`;
