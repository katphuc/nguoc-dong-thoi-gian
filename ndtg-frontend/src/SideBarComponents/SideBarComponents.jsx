import React, { useState, useEffect } from "react";

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
  StyledBookIcon,
  CollectionDetails,
  ComparisonContainer,
  Column,
  ColumnHeader,
  ListItem,
  ToggleButton,
  HideIcon,
  ShowIcon,
} from "./style";
import avt from "../assets/img/avt.png";
import smallCoin from "../assets/img/small-coin.png";

function SideBar() {
  const [showPopup, setShowPopup] = useState(false);
  const [showVipPopup, setShowVipPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [volume, setVolume] = useState(50);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const toggleVipPopup = () => {
    setShowVipPopup(!showVipPopup);
  };
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false); // Automatically hide sidebar when screen is small
      } else {
        setIsOpen(true); // Show sidebar when screen is large
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Run on initial render to check the screen size
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <SideBarSection isOpen={isOpen}>
        <UserSection>
          <UserDetails>
            <UserName>Thiên Phúc</UserName>
            <UserNickname>Chiến thần lịch sử</UserNickname>
          </UserDetails>
          <UserAvt src={avt} alt="avt"></UserAvt>
        </UserSection>
        <UserTiers>
          <Tiers type="primary" size="large" onClick={toggleVipPopup}>
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
          <Separator />
          <StyledLi>
            <CollectionDetails to="/bo-suu-tap">
              Bộ Sưu Tập
              <StyledBookIcon></StyledBookIcon>
            </CollectionDetails>
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
      {/* Nút Toggle Sidebar trên màn hình nhỏ */}
      <ToggleButton onClick={toggleSidebar}>
        {isOpen ? <HideIcon /> : <ShowIcon />}
      </ToggleButton>
      {/* Popup */}
      {showPopup && (
        <PopupOverlay onClick={togglePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
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
      {showVipPopup && (
        <PopupOverlay onClick={toggleVipPopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <HeaderPopup>Hội Viên</HeaderPopup>
            <ComparisonContainer>
              {/* Cột Thành Viên Thường */}
              <Column>
                <ColumnHeader>Thành Viên Thường</ColumnHeader>
                <ul>
                  <ListItem>Truy cập nội dung cơ bản</ListItem>
                  <ListItem>Không tích lũy điểm thưởng</ListItem>
                  <ListItem>Hỗ trợ trong giờ làm việc</ListItem>
                </ul>
              </Column>
              {/* Cột Thành Viên VIP */}
              <Column>
                <ColumnHeader>Thành Viên VIP</ColumnHeader>
                <ul>
                  <ListItem>Truy cập toàn bộ nội dung</ListItem>
                  <ListItem>Tích lũy điểm thưởng nhanh hơn</ListItem>
                  <ListItem>Hỗ trợ ưu tiên 24/7</ListItem>
                  <ListItem>Ưu đãi giảm giá khi mua sắm</ListItem>
                </ul>
              </Column>
            </ComparisonContainer>
            <CloseButton onClick={toggleVipPopup}>Đóng</CloseButton>
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  );
}
export default SideBar;
