import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  AppstoreOutlined,
  LogoutOutlined,
  SettingFilled,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const SideBarSection = styled.div`
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #eaeaea;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 60px;
`;
export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const UserName = styled.p`
  color: black;
  font-weight: bold;
  margin: 0px 20px 0px 0px;
  text-align: end;
`;
export const UserNickname = styled.p`
  font-size: 14px;
  margin: 0px 20px 0px 0px;
  text-align: end;
  color: red;
`;

export const UserAvt = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;
export const UserTiers = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  * {
    // flex: 1;
    text-align: center;
  }
`;
export const Tiers = styled.button`
  border: 0px;
  border-radius: 10px;
  width: 60px;
  height: 30px;
  background: linear-gradient(to right, #fffcda, #efaf11);
  transition: transform 0.2s, background 0.2s;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #ffeaa7, #f0932b);
  }
`;
export const SmallCoin = styled.img`
  width: 30px;
  height: 30px;
`;
export const CoinNumber = styled.p`
  margin: 3px;
  font-weight: bold;
  text-align: right;
  width: 80px;
`;
export const Settings = styled.a`
  position: absolute;
  right: 20px;
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 80%;
  text-decoration: none;
  color: black;
  justify-content: flex-end;
`;
export const Store = styled(Link)`
  position: absolute;
  right: 20px;
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 80%;
  text-decoration: none;
  color: black;
  justify-content: flex-end;
`;
export const ProfileDetails = styled(Link)`
  position: absolute;
  right: 20px;
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 80%;
  text-decoration: none;
  color: black;
  justify-content: flex-end;
`;
export const StyledSettingIcon = styled(SettingFilled)`
  margin-left: 8px;
  font-size: 20px;
`;
export const StyledUserIcon = styled(UserOutlined)`
  margin-left: 8px;
  font-size: 20px;
`;
export const StyledShoppingCartIcon = styled(ShoppingCartOutlined)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Separator = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 5px 0;
`;
export const StyledLogoutIcon = styled(LogoutOutlined)`
  margin-left: 8px;
  font-size: 20px;
`;
export const StyledIndexIcon = styled(AppstoreOutlined)`
  margin-left: 8px;
  font-size: 20px;
`;
export const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  height: 75%;
`;
export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  height: 45px;
  cursor: pointer;
  &:hover {
    background: #bfbfbf;
  }
`;
export const Logout = styled.li`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  &:hover {
    background: #bfbfbf;
  }
`;
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
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  border-right: 1px solid #ddd;
  padding-right: 10px;
`;

export const TabButton = styled.button`
  background: ${(props) => (props.active ? "#ae6a30" : "transparent")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  text-align: left;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0;
  &:hover {
    background: ${(props) => (props.active ? "#ae6a30" : "#f0f0f0")};
  }
`;

export const TabContent = styled.div`
  padding: 20px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  flex: 1;
`;

export const CloseButton = styled.button`
  background: #f44336;
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
`;
export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  width: 500px;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
  width: 130px;
`;

export const Slider = styled.input`
  width: 100%;
  -webkit-appearance: none;
  height: 8px;
  background: #ddd;
  border-radius: 5px;
  outline: none;
  transition: background 0.2s;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #007bff;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #007bff;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const VolumeValue = styled.span`
  font-size: 16px;
`;
