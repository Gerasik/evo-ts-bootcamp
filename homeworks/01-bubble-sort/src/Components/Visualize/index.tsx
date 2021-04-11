import { FunctionComponent } from "react";
import styled from "styled-components";

const Wrap = styled.ul`
  display: flex;
  list-style: none;
  align-items: flex-end;
  height: 200px;
`;

const Pillar = styled.li`
  width: 15px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px 10px 0 0;
  height: ${(props: { itemHeight: number }) => props.itemHeight * 2}px;
`;

interface VisualizeProps {
  unsortedArr: number[];
}

const Visualize: FunctionComponent<VisualizeProps> = ({ unsortedArr }) => {
  return (
    <Wrap>
      {unsortedArr.map((item) => (
        <Pillar itemHeight={item} key={item} />
      ))}
    </Wrap>
  );
};

export default Visualize;
