import styled from "styled-components";

export const CollectionSection = styled.div`
  @media (max-width: 768px) {
    width: 60vh;
  }
`;

export const Header = styled.h2`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  position: relative;
  margin: 0;
  user-select: none;
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    width: 10%;
    height: 2px;
    background-color: grey;
  }
`;
export const SliderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  align-items: center;
  gap: 16px;
  padding: 20px;
  //   width: 500px;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: bold;
  width: 130px;
  text-align: center;
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
export const TabContent = styled.div`
  padding: 20px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  flex: 1;
  text-align: center;
`;
export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
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
export const Tabs = styled.div`
  padding-top: 60px;
  @media (max-width: 768px) {
    width: 60vh;
  }
`;
export const Historical = styled.img`
  height: 250px;
  width: 200px;
  cursor: pointer;
`;
export const CharacterCard = styled.div`
  text-align: center;
  border: none;
  padding: 8px;
  border-radius: 8px;
  width: 200px;
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
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;
export const HeaderPopup = styled.h2`
  text-align: center;
  user-select: none;
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
export const HistoricalBiography = styled.p``;
export const HistoricalImages = styled.img`
  width: 800px;
  height: 400px;
`;
export const HistoricalContent = styled.div`
  display: "grid";
  overflowy: "auto";
  maxheight: "80vh";
  padding: "16px";
  place-items: center;
`;
