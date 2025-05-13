import { atom } from 'recoil';

export const chatBubbleOpenState = atom<boolean>({
  key: 'chatBubbleOpenState',
  default: false,
});