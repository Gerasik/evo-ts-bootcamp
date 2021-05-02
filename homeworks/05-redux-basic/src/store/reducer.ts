interface State {
  value: number;
}

const defaultState: State = {
  value: 0,
};

export default function balance(
  state = defaultState,
  action: { type: string; payload?: number }
) {
  switch (action.type) {
    case "UPDATE_BALANCE": {
      return { value: action.payload as number };
    }
    case "CREDIT": {
      const payload = action.payload ? action.payload : 0;
      return {
        value: (state.value - payload) as number,
      };
    }
    case "DEBIT": {
      const payload = action.payload ? action.payload : 0;
      return {
        value: (state.value + payload) as number,
      };
    }
    case "SET_BALANCE_WITH_TAX": {
      const val = action.payload ? action.payload / 100 : 0;
      return {
        value: (state.value * (1 - val)) as number,
      };
    }
    default:
      return state;
  }
}
