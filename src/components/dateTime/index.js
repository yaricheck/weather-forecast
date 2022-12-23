import React, { useEffect, useState } from 'react';
import { toTimeFormat } from '../../utilities/converters';
import { DateText, DateContainer, CurrentDateBlock, CurrentTimeBlock } from './styled';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const DateTime = (props) => {
  const { isNight } = props;
  const [dateObject, setDateObject] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => setDateObject(new Date()), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <DateContainer isNight={isNight}>
      <CurrentDateBlock>{days[dateObject.getDay()]}, {months[dateObject.getMonth()]} {dateObject.getDate()}</CurrentDateBlock>
      <CurrentTimeBlock>{toTimeFormat(dateObject.getHours())}:{toTimeFormat(dateObject.getMinutes())}:{toTimeFormat(dateObject.getSeconds())} </CurrentTimeBlock>
    </DateContainer>
  );
}

export default DateTime;