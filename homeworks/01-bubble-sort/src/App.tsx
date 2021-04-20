import Header from "./Components/Header";
import Visualize from "./Components/Visualize";
import Controls from "./Components/Controls";
import { Component, EventHandler, SyntheticEvent } from "react";
import styled from "styled-components";
import { customArr } from "./helpers";
import { DELAY, LENGTH } from "./constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

interface State {
  unsortedArr: number[];
  status: string;
  currentItem: number;
  sortedCount: number;
  interval: number | undefined;
  isSolved: boolean;
  arrLength: number;
  delay: number;
}

class App extends Component {
  state: State = {
    arrLength: LENGTH,
    unsortedArr: [],
    status: "Start",
    currentItem: 1,
    sortedCount: 1,
    interval: undefined,
    isSolved: false,
    delay: DELAY,
  };

  setNewSet = (): void => {
    if (this.state.interval) clearInterval(this.state.interval);
    this.setState({
      unsortedArr: customArr(this.state.arrLength),
      currentItem: 1,
      sortedCount: 1,
      isSolved: false,
      status: "Start",
    });
  };

  sort = () => {
    const { currentItem, sortedCount, unsortedArr, interval } = this.state;
    if (sortedCount === unsortedArr.length) {
      clearInterval(interval);
      this.setState({ isSolved: true });
    } else if (
      currentItem === 0 ||
      unsortedArr[currentItem] > unsortedArr[currentItem - 1]
    ) {
      this.setState({
        currentItem: sortedCount + 1,
        sortedCount: sortedCount + 1,
      });
    } else if (unsortedArr[currentItem] < unsortedArr[currentItem - 1]) {
      const newUnsortedArr = [...unsortedArr];
      newUnsortedArr[currentItem] = unsortedArr[currentItem - 1];
      newUnsortedArr[currentItem - 1] = unsortedArr[currentItem];
      this.setState({
        unsortedArr: newUnsortedArr,
        currentItem: currentItem - 1,
      });
    }
  };

  setAction = () => {
    this.setState({
      status: "Pause",
      interval: setInterval(() => {
        this.sort();
      }, this.state.delay),
    });
  };

  removeAction = () => {
    clearInterval(this.state.interval);
    this.setState({
      status: "Start",
    });
  };

  changeDelay: EventHandler<SyntheticEvent> = (e) => {
    const newDelay = +(e.target as HTMLInputElement).value;
    console.log(this.state.interval);
    if (this.state.interval) {
      clearInterval(this.state.interval);
      this.setState({
        delay: newDelay,
        interval: setInterval(() => {
          this.sort();
        }, newDelay),
      });
    } else {
      this.setState({
        delay: newDelay,
      });
    }
  };

  changeArrLength: EventHandler<SyntheticEvent> = (e) => {
    const newLength = +(e.target as HTMLInputElement).value;
    if (this.state.interval) clearInterval(this.state.interval);
    this.setState({
      unsortedArr: customArr(newLength),
      currentItem: 1,
      sortedCount: 1,
      isSolved: false,
      status: "Start",
      arrLength: newLength,
    });
  };

  componentDidMount() {
    this.setNewSet();
  }

  componentWillUnmount() {
    if (this.state.interval) clearInterval(this.state.interval);
  }

  render() {
    const {
      state,
      setNewSet,
      setAction,
      removeAction,
      changeArrLength,
      changeDelay,
    } = this;
    const { status, unsortedArr, isSolved, arrLength, delay } = state;
    return (
      <Container>
        <Header />
        <Visualize unsortedArr={unsortedArr} />
        <Controls
          setNewSet={setNewSet}
          status={status}
          setAction={setAction}
          removeAction={removeAction}
          isSolved={isSolved}
          arrLength={arrLength}
          changeArrLength={changeArrLength}
          delay={delay}
          changeDelay={changeDelay}
        />
      </Container>
    );
  }
}

export default App;
