import React, { useEffect } from 'react'

import * as S from "./SideBar.styles";

export const SideBar = ({
    setSelectedCategories,
    getCategoriesData,
    getCategoriesLoading,
    getCategories,
    getCats
}) => {
    useEffect(() => {
        getCategories()
    }, [getCategories])

    const handleChageCategory = (categoryId) => {
        setSelectedCategories(categoryId)
        getCats({
            limit: 10,
            page: 1,
            categoryIds: categoryId,
            init: true,
        })
    }
    return (
        <S.SideBarContainer>
            <S.SideBarItemWrapper>
                { getCategoriesData.map(item => (
                    <S.SideBarItem
                        key={item.id}
                        onClick={() => handleChageCategory(item.id)}
                    >
                        { item.name }
                    </S.SideBarItem>
                ))}
            </S.SideBarItemWrapper>
        </S.SideBarContainer>
    )
}