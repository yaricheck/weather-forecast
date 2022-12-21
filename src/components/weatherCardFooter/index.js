import React from "react";
import { FooterContainer, FooterUnit, FooterImage, FooterText } from "./styled";

const WeatherCardFooter = (props) => {
  const { isNight, footerData } = props;
  return (
    <FooterContainer>
      {Object.entries(footerData).map(([key, data]) => (
        <FooterUnit key={key}>
          <FooterImage key={key} src={`icons/${key}${isNight ? 'Night' : ''}.svg`}/>
          <FooterText key={key} isNight={isNight}>{data.value}{data.units}</FooterText>
        </FooterUnit>
      ))}
    </FooterContainer>
  );
}

export default WeatherCardFooter;