import { SideBar as Self } from './SideBar'
import { connect } from "react-redux";

import {
    getCategories,
    setSelectedCategories,
} from "./SideBar.actions";
import { getCats } from '../../../pages/MainPage/MainPage.actions'


const mapStateToProps = ({ sideBar }) => ({
    getCategoriesLoading: sideBar.getCategoriesLoading,
    getCategoriesData: sideBar.getCategoriesData,
    getCategoriesError: sideBar.getCategoriesError,
})

const mapDispatchToProps ={
    setSelectedCategories,
    getCategories,
    getCats,
}

export const SideBar = connect(mapStateToProps, mapDispatchToProps)(Self)