import { SIDEBAR_TYPES } from './SideBar.types'

const initialState = {
    getCategoriesLoading: true,
    getCategoriesData: [],
    getCategoriesError: '',
    selectedCategoryId: null,
}

export const sideBar = (state = initialState, action) => {
    switch (action.type) {
        case SIDEBAR_TYPES.GET_CATEGORIES_REQUEST:
            return {
                ...state,
                getCategoriesLoading: true,
                getCategoriesError: '',
            }
        case SIDEBAR_TYPES.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                getCategoriesLoading: false,
                getCategoriesData: action.data,
                getCategoriesError: '',
            }
        case SIDEBAR_TYPES.GET_CATEGORIES_FAIL:
            return {
                ...state,
                getCategoriesLoading: false,
                getCategoriesError: action.error
            }
        case SIDEBAR_TYPES.SET_SELECTED_CATEGORIES:
            return {
                ...state,
                selectedCategoryId: action.categoryId
            }
        default:
            return state
    }
}