import { SIDEBAR_TYPES } from "./SideBar.types";
import { errorHandler, FetchApi } from "../../../helpers";

export const getCategories = () => async dispatch => {
    try {
        dispatch({
            type: SIDEBAR_TYPES.GET_CATEGORIES_REQUEST
        })

        const { data } = await FetchApi.get('https://api.thecatapi.com/v1/categories')

        dispatch({
            type: SIDEBAR_TYPES.GET_CATEGORIES_SUCCESS,
            data
        })
    } catch (e) {
        dispatch({
            type: SIDEBAR_TYPES.GET_CATEGORIES_FAIL,
            error: errorHandler(e)
        })
    }

}

export const setSelectedCategories = (categoryId) => ({
    type: SIDEBAR_TYPES.SET_SELECTED_CATEGORIES,
    categoryId
})