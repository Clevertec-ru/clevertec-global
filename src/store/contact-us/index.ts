import { TYPES } from '../action-types';

type StateType = {
    isLoading: boolean,
    isError: boolean,
    isSuccess: boolean,
    isShowModal: boolean
}

type ActionType = {
    type: string,
}

export const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    isShowModal: false
};

export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case TYPES.CONTACT_US_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
                isShowModal: false
            };
        }

        case TYPES.CONTACT_US_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isShowModal: false
            };
        }

        case TYPES.CONTACT_US_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: true,
                isShowModal: false
            };
        }

        case TYPES.SET_MODAL: {
            return {
                ...state,
                isShowModal: !state.isShowModal,

            };
        }

        case TYPES.CONTACT_US_CLEAR: {
            return initialState;
        }

        default:
            throw new Error();
    }
};