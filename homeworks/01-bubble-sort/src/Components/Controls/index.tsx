import { EventHandler, SyntheticEvent } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SolvedStatus = styled.span`
  width: 100%;
  text-align: center;
`;

interface ControlsProps {
  setNewSet: () => void;
  setAction: () => void;
  removeAction: () => void;
  changeArrLength: EventHandler<SyntheticEvent>;
  changeDelay: EventHandler<SyntheticEvent>;
  status: string;
  isSolved: boolean;
  arrLength: number;
  delay: number;
}

const Controls: React.FunctionComponent<ControlsProps> = ({
  setNewSet,
  setAction,
  removeAction,
  status,
  isSolved,
  arrLength,
  changeArrLength,
  delay,
  changeDelay,
}) => {
  return (
    <Wrap>
      <label>
        <input type="number" value={arrLength} onChange={changeArrLength} />{" "}
        Array length
      </label>
      <label>
        <input type="number" value={delay} onChange={changeDelay} /> Delay
      </label>
      <button onClick={setNewSet}>newSet</button>
      <button
        onClick={status === "Start" ? setAction : removeAction}
        disabled={isSolved}
      >
        {status === "Start" ? "Start" : "Pause"}
      </button>
      <SolvedStatus>{isSolved ? "Solved" : "Not solved"}</SolvedStatus>
    </Wrap>
  );
};

export default Controls;
