import { RootReducerName } from '@reduxs/reducers/type';
import { ModalPendingListType } from '@reduxs/types';

export const modalPendingSelector = (state: { root: { [RootReducerName.modalPending]: ModalPendingListType } }) => state.root.modalPending.modalsPending;