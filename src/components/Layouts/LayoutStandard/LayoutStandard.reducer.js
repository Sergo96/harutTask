import { LAYOUT_STANDARD_TYPES } from './LayoutStandard.types'

const initialState = {
    getCategoriesLoading: true,
    getCategoriesData: [],
    getCategoriesError: '',
}

export const layoutStandard = (state = initialState, action) => {
    switch (action.type) {
        case LAYOUT_STANDARD_TYPES.GET_CATEGORIES_REQUEST:
            return {
                ...state,
                getCategoriesLoading: true,
                getCategoriesError: '',
            }
        case LAYOUT_STANDARD_TYPES.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                getCategoriesLoading: false,
                getCategoriesData: action.data,
                getCategoriesError: '',
            }
        case LAYOUT_STANDARD_TYPES.GET_CATEGORIES_FAIL:
            return {
                ...state,
                getCategoriesLoading: false,
                getCategoriesError: action.error
            }
        default:
            return state
    }
}