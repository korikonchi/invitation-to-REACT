import * as React from "react";
import Icon from "../icon/Icon";
import { countDown } from "./utils";
import "./CountDown.scss";

export function CountDown({ title, targetDate }) {
  const [time, setTime] = React.useState({
    d: 0,
    h: 0,
    m: 0,
    s: 0,
  });

  // didMount
  React.useEffect(() => {
    const intervalId = countDown(targetDate, (d) => {
      setTime(d);
    });

    // willUnmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="count-down">
      <p className="paragraph-sec2">
        <em>{title}</em>
      </p>
      <div className="counter">
        <CounterItem time={time.d} label="Dias" />
        <CounterItem time={time.h} label="Horas" />
        <CounterItem time={time.m} label="Minutos" />
        <CounterItem time={time.s} label="Segundos" />
      </div>
    </div>
  );
}

const CounterItem = ({ time, label }) => {
  return (
    <div className="counter-item">
      <div className="circle color--primary">
        <Icon i="circle" />
        <p className="counter-time">{`${time}`.padStart(2, "0")}</p>
      </div>
      <p className="counter-text">{label}</p>
    </div>
  );
};

export default CountDown;
