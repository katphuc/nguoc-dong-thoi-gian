import styled from "styled-components";

export const HistoryGameSection = styled.div``;
export const Header = styled.h2`
  color: black;
  font-weight: bold;
  font-size: 40px;
  position: relative;
  margin: 0;
  text-align: center;
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    width: 50%;
    height: 2px;
    background-color: grey;
  }
`;
export const PeriodsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 40px;
  padding-top: 60px;
  gap: 60px;
  //   justify-content: center;
`;
export const PrehistoricPeriods = styled.button`
  border: 0px;
  background: #bb882b;
  border-radius: 20px;
  color: white;
  width: 650px;
  font-size: 30px;
  height: 100px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
export const VanLangAuLacPeriods = styled.button`
  border: 0px;
  background: #88190c;
  border-radius: 20px;
  color: white;
  width: 650px;
  font-size: 30px;
  height: 100px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
export const NorthernDominationPeriod = styled.button`
  border: 0px;
  background: #173811;
  border-radius: 20px;
  color: white;
  width: 650px;
  font-size: 30px;
  height: 100px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
