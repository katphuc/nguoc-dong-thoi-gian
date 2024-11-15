import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  CollectionSection,
  Header,
  TabContent,
  SliderContainer,
  Label,
  TabContainer,
  TabButton,
  Tabs,
  Historical,
  CharacterCard,
  PopupContent,
  PopupOverlay,
  HeaderPopup,
  CloseButton,
  HistoricalBiography,
  HistoricalImages,
  HistoricalContent,
} from "./style";
import BaTrac from "../../assets/img/ba-trac.png";
import BaTrungNhi from "../../assets/img/ba-trung-nhi.png";
import baTrungTracImg from "../../assets/img/ba-trung-trac-img.png";

function Collection() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    setShowPopup(true);
  };
  return (
    <>
      <Helmet>
        <title>Bộ Sưu Tập | Ngược Dòng Thời Gian</title>
      </Helmet>
      <CollectionSection>
        <Header>Bộ Sưu Tập</Header>
      </CollectionSection>
      <Tabs style={{ display: "flex" }}>
        {/* Tabs (dọc) */}
        <TabContainer>
          <TabButton
            active={activeTab === "tab1"}
            onClick={() => changeTab("tab1")}
          >
            Nhân Vật Lịch Sử
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
              <SliderContainer>
                <CharacterCard
                  onClick={() => handleCharacterClick("Bà Trưng Trắc")}
                >
                  <Historical src={BaTrac} />
                  <Label>Bà Trưng Trắc</Label>
                </CharacterCard>
                <CharacterCard
                  onClick={() => handleCharacterClick("Bà Trưng Nhị")}
                >
                  <Historical src={BaTrungNhi} />
                  <Label>Bà Trưng Nhị</Label>
                </CharacterCard>
              </SliderContainer>
            </>
          )}
          {activeTab === "tab2" && <TabContent>Nội dung Tab 2</TabContent>}
          {activeTab === "tab3" && <TabContent>Nội dung Tab 3</TabContent>}
        </div>
      </Tabs>
      {/* Popup */}
      {showPopup && selectedCharacter === "Bà Trưng Trắc" && (
        <PopupOverlay onClick={togglePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <HeaderPopup>{selectedCharacter}</HeaderPopup>
            <HistoricalContent>
              <HistoricalImages src={baTrungTracImg}></HistoricalImages>
              <HistoricalBiography>
                <strong>Tiểu sử: </strong> Bà Trưng Trắc là một trong hai vị nữ
                anh hùng của dân tộc Việt Nam, cùng với em gái là Bà Trưng Nhị.
                Hai chị em, thường gọi là Hai Bà Trưng, nổi tiếng vì đã lãnh đạo
                cuộc khởi nghĩa chống lại sự đô hộ của nhà Hán vào năm 40 SCN.
                Sinh ra trong một gia đình quý tộc ở Mê Linh (nay thuộc Hà Nội),
                Trưng Trắc được nuôi dưỡng trong tinh thần yêu nước, không cam
                chịu cảnh mất nước, nhà tan. Cuộc khởi nghĩa của Hai Bà Trưng đã
                thu hút nhiều tướng sĩ, đặc biệt là phụ nữ, tham gia để đánh
                đuổi quân Hán. Họ giành được nhiều thắng lợi và đã khôi phục lại
                nền độc lập cho một số vùng đất trong một thời gian. Trưng Trắc
                sau đó được tôn làm vua, trị vì một đất nước tự do. Dù khởi
                nghĩa cuối cùng bị thất bại sau cuộc phản công của nhà Hán, tinh
                thần bất khuất của Hai Bà Trưng đã trở thành biểu tượng của lòng
                yêu nước và sức mạnh của phụ nữ Việt Nam.
              </HistoricalBiography>
            </HistoricalContent>
            <CloseButton onClick={togglePopup}>Đóng</CloseButton>
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  );
}
export default Collection;
