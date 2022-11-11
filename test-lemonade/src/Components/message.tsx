import { useSelector } from "react-redux";

function Message() {
  const interval = useSelector((state: any) => state.intervalState.intervals);
  return (
    <div className="message_wrapper">
      {interval.length > 0 && (
        <p>
          Vous pouvez commander vos menus sur cette tranche horaire:{" "}
          {interval[0]}h - {interval[1]}h
        </p>
      )}
    </div>
  );
}

export default Message;
