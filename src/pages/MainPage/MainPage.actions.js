import { MAIN_PAGE_TYPES } from './MainPage.types'
import { FetchApi, errorHandler } from "../../helpers";

export const getCats = ({
    limit,
    page,
    categoryIds,
    init,
}) => async dispatch => {
    try {
        dispatch({
            type: MAIN_PAGE_TYPES.GET_CATS_REQUEST,
            init
        })
        const { data } = await FetchApi.get('https://api.thecatapi.com/v1/images/search', {
            limit,
            page,
            category_ids: categoryIds
        })

        dispatch({
            type: MAIN_PAGE_TYPES.GET_CATS_SUCCESS,
            data,
            init
        })
    } catch (e) {
        dispatch({
            type: MAIN_PAGE_TYPES.GET_CATS_FAIL,
            error: errorHandler(e)
        })
    }
}