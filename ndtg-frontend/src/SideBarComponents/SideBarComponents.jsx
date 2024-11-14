import React, { useState } from "react";

import {
  SideBarSection,
  UserName,
  UserSection,
  UserAvt,
  UserTiers,
  Tiers,
  SmallCoin,
  CoinNumber,
  Settings,
  StyledSettingIcon,
  StyledUserIcon,
  Separator,
  StyledLogoutIcon,
  StyledUl,
  StyledShoppingCartIcon,
  StyledLi,
  Logout,
  StyledIndexIcon,
  UserNickname,
  UserDetails,
  ProfileDetails,
  Store,
  PopupOverlay,
  PopupContent,
  CloseButton,
  TabButton,
  TabContainer,
  TabContent,
  HeaderPopup,
  SliderContainer,
  Slider,
  VolumeValue,
  Label,
} from "./style";
import avt from "../assets/img/avt.png";
import smallCoin from "../assets/img/small-coin.png";

function SideBar() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [volume, setVolume] = useState(50);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };
  return (
    <>
      <SideBarSection>
        <UserSection>
          <UserDetails>
            <UserName>Thiên Phúc</UserName>
            <UserNickname>Chiến thần lịch sử</UserNickname>
          </UserDetails>
          <UserAvt src={avt} alt="avt"></UserAvt>
        </UserSection>
        <UserTiers>
          <Tiers type="primary" size="large">
            VIP
          </Tiers>
          <CoinNumber>1000</CoinNumber>
          <SmallCoin src={smallCoin} alt="coin"></SmallCoin>
        </UserTiers>
        <Separator />

        <StyledUl>
          <StyledLi>
            <Settings href="/">
              Trang chủ
              <StyledIndexIcon></StyledIndexIcon>
            </Settings>
          </StyledLi>
          <StyledLi>
            <ProfileDetails to="/thong-tin-ca-nhan">
              Thông Tin Cá Nhân
              <StyledUserIcon></StyledUserIcon>
            </ProfileDetails>
          </StyledLi>
          <StyledLi>
            <Store to="/cua-hang">
              Cửa Hàng
              <StyledShoppingCartIcon></StyledShoppingCartIcon>
            </Store>
          </StyledLi>
          <Separator></Separator>
          <StyledLi>
            <Settings onClick={togglePopup}>
              Cài Đặt
              <StyledSettingIcon></StyledSettingIcon>
            </Settings>
          </StyledLi>
          <Separator></Separator>
          <Logout>
            <Settings href="">
              Đăng xuất
              <StyledLogoutIcon></StyledLogoutIcon>
            </Settings>
          </Logout>
        </StyledUl>
      </SideBarSection>
      {/* Popup */}
      {showPopup && (
        <PopupOverlay>
          <PopupContent>
            <HeaderPopup>Cài Đặt</HeaderPopup>
            <div style={{ display: "flex" }}>
              {/* Tabs (dọc) */}
              <TabContainer>
                <TabButton
                  active={activeTab === "tab1"}
                  onClick={() => changeTab("tab1")}
                >
                  Giao Diện
                </TabButton>
                <TabButton
                  active={activeTab === "tab2"}
                  onClick={() => changeTab("tab2")}
                >
                  Tab 2
                </TabButton>
                <TabButton
                  active={activeTab === "tab3"}
                  onClick={() => changeTab("tab3")}
                >
                  Tab 3
                </TabButton>
              </TabContainer>

              {/* Nội dung tab */}
              <div style={{ flex: 1 }}>
                {activeTab === "tab1" && (
                  <>
                    <TabContent>Giao Diện Chính</TabContent>

                    <SliderContainer>
                      <Label>Âm lượng:</Label>
                      <Slider
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                      />
                      <VolumeValue>{volume}%</VolumeValue>
                    </SliderContainer>
                  </>
                )}
                {activeTab === "tab2" && (
                  <TabContent>Nội dung Tab 2</TabContent>
                )}
                {activeTab === "tab3" && (
                  <TabContent>Nội dung Tab 3</TabContent>
                )}
              </div>
            </div>
            <CloseButton onClick={togglePopup}>Đóng</CloseButton>
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  );
}
export default SideBar;
