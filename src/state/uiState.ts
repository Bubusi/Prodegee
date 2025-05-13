// src/state/uiState.ts
import { atom } from 'recoil';

export const isChatOpenState = atom<boolean>({
  key: 'isChatOpen',
  default: false,
});
