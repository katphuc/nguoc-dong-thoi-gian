import styled, { css } from "styled-components";
import DFVNGuardilostraTTF from "../../assets/fonts/DFVN Guardilostra.ttf";
import DFVNGuardilostraOTF from "../../assets/fonts/DFVN Guardilostra.otf";

export const fontFace = css`
  @font-face {
    font-family: "DFVN Guardilostra";
    src: url(${DFVNGuardilostraOTF}) format("opentype"),
      url(${DFVNGuardilostraTTF}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export const HomePageSection = styled.div`
  @media (max-width: 768px) {
    width: 60vh;
  }
`;
export const Header = styled.h2`
@media (max-width: 768px) {
    font-size:30px;
  }
${fontFace}
font-family: 'DFVN Guardilostra', sans-serif;
  color: black;
  font-size: 40px;
  margin: 0;
  text-align: center;
  user-select: none;
  }
   
`;
export const ButtonSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 40px;
  padding-top: 60px;
  gap: 30px;
  justify-content: center;
`;

export const HistoryButton = styled.button`
  border: 0px;
  background: #842b20;
  border-radius: 20px;
  color: white;
  width: 400px;
  height: 100px;
  font-size: 30px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  @media (max-width: 768px) {
    width: 40vh;
  }
`;
export const QuizButton = styled.button`
  border: 0px;
  background: #e7b63b;
  border-radius: 20px;
  color: white;
  width: 400px;
  font-size: 30px;
  height: 100px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  @media (max-width: 768px) {
    width: 40vh;
  }
`;
export const ArtButton = styled.button`
  border: 0px;
  position: relative;
  background: #3a2c1c;
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.6);
  width: 400px;
  font-size: 30px;
  height: 100px;
  cursor: not-allowed;
  opacity: 0.7;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  z-index: 10;

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  .lock-icon {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    color: white;
  }
  @media (max-width: 768px) {
    width: 40vh;
  }
`;
export const ImgSection = styled.div`
  display: block;
  flex: 1;
  padding-top: 40px;
`;
