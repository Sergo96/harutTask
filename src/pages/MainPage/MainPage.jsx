import React from 'react'

import * as S from './MainPage.styles'
import { LayoutStandard } from "../../components/Layouts";
import { Button } from "../../components/ui";

const MainPage = ({
    getCatsLoading,
    selectedCategoryId,
    getCatsData,
    getCats,
}) => {
    const handleLoadMore = () => {
        getCats({
            limit: 10,
            page: 1,
            categoryIds: selectedCategoryId,
        })
    }

    const isLoaded = !getCatsLoading && !!getCatsData.length

    return (
        <LayoutStandard>
            <S.MainPageContainer>
                { !isLoaded &&
                    <S.InitMessage>Select a category</S.InitMessage>
                }
                { isLoaded &&
                    getCatsData.map(el => (
                        <S.CatImage key={el.id} src={el.url} />
                    ))
                }
            </S.MainPageContainer>
            <S.ButtonWrapper>
                { isLoaded &&
                    <Button
                        // isSecondary
                        title='Load more'
                        onClick={handleLoadMore}
                    />
                }
            </S.ButtonWrapper>
        </LayoutStandard>
    )
}

export default MainPage