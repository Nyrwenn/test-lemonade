import { useDispatch, useSelector } from "react-redux";
import { timeState } from "../Redux/Actions/timeAction";

type Props = {
  idA: string;
  idB: string;
  title: string;
};

function Time(props: Props) {
  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.timeState.value);
  const { idA, idB, title } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(timeState(e.target.id, parseInt(e.target.value)));
  };

  return (
    <div className="time_wrapper">
      <h2>{title}</h2>
      <input
        id={idA}
        type="number"
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <input
        id={idB}
        type="number"
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Time;
