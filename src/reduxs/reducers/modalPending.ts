import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalPendingListType, TypeOfModalPendingType } from '@reduxs/types';
import { RootReducerName } from './type';

const defaultModalPendingState: ModalPendingListType = {
  modalsPending: {}
};  

const modalPendingSlice = createSlice({
    name: RootReducerName.modalPending,
    initialState: defaultModalPendingState,
    reducers: {
      addModalPending(state: ModalPendingListType, action: PayloadAction<TypeOfModalPendingType>){
        state.modalsPending = {...state.modalsPending,  [action.payload.type]: true}
      },
      removeModalPending(state: ModalPendingListType, action: PayloadAction<TypeOfModalPendingType>){
        // const newModals = state.modalsPending.filter(modal => modal.type !== action.payload.type)
        delete state.modalsPending[action.payload.type]
      },
    },
});

export const { addModalPending, removeModalPending } = modalPendingSlice.actions;
export const ModalPendingReducer = modalPendingSlice.reducer;
