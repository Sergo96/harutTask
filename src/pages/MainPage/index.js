import { connect } from "react-redux";

import MainPage from './MainPage'
import { getCats } from "./MainPage.actions";

const mapStateToProps = ({ mainPage, sideBar }) => ({
    getCatsLoading: mainPage.getCatsLoading,
    getCatsData: mainPage.getCatsData,
    selectedCategoryId: sideBar.selectedCategoryId
})

const mapDispatchToProps = {
    getCats
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)