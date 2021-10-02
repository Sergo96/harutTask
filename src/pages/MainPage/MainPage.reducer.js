import { MAIN_PAGE_TYPES } from "./MainPage.types";

const initialState = {
    getCatsLoading: true,
    getCatsData: [],
    getCatsError: '',
}

export const mainPage = (state = initialState, action) => {
    switch (action.type) {
        case MAIN_PAGE_TYPES.GET_CATS_REQUEST:
            return {
                ...state,
                getCatsLoading: action.init | false,
                getCatsError: '',
            }
        case MAIN_PAGE_TYPES.GET_CATS_SUCCESS:
            return {
                ...state,
                getCatsLoading: false,
                getCatsData: action.init
                    ? action.data
                    : [
                        ...state.getCatsData,
                        ...action.data
                    ],
                getCatsError: '',
            }
        case MAIN_PAGE_TYPES.GET_CATS_FAIL:
            return {
                ...state,
                getCatsLoading: false,
                getCatsError: action.error,
            }
        default:
            return state
    }
}