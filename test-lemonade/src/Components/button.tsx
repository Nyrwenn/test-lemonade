import { useSelector, useDispatch } from "react-redux";
import { calculate } from "../Services/calculate";
import { intervalState } from "../Redux/Actions/intervalAction";

function Button() {
  const timeState = useSelector((state: any) => state.timeState);
  const dispatch = useDispatch();

  const onCalculate = () => {
    dispatch(
      intervalState(
        calculate(
          timeState.minA,
          timeState.maxA,
          timeState.minB,
          timeState.maxB
        )
      )
    );
  };

  return (
    <div className="button_wrapper">
      <button onClick={() => onCalculate()}>Valider</button>
    </div>
  );
}

export default Button;
