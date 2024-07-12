import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export interface IntercomState {
  correctValue: string;
  value: string;
  hiddenValue: string;
}
const initialState: IntercomState = {
  correctValue: '1234',
  value: '',
  hiddenValue: ''
};
export const IntercomSlice = createSlice({
  name: 'intercom',
  initialState,
  reducers: {
    addSymbol: (state, action: PayloadAction<string>) => {
      if (state.value.length < 4) {
        state.value += action.payload;
        state.hiddenValue += '*';
      }
    },
    deleteSymbol: (state) => {
     state.value = state.value.slice(0, -1);
      state.hiddenValue = state.hiddenValue.slice(0, -1);
    },
    checkPinCode: (state) => {
      const display = document.querySelector('#display');
      if (state.value === state.correctValue) {
        display.className = 'displayCorrect';
        setTimeout(() => {
          alert('Access Granted');
          display.className = 'display';
        }, 200);
      } else {
        display.className = 'displayIncorrect';
        setTimeout(() => {
          alert('Access Denied');
          display.className = 'display';
        }, 200);
      }
    },
    resetValue: (state) => {
      state.value = '';
      state.hiddenValue = '';
    }
  },
});

export const intercomReducer = IntercomSlice.reducer;
export const {
 addSymbol,
  deleteSymbol,
  checkPinCode,
  resetValue
} = IntercomSlice.actions;
