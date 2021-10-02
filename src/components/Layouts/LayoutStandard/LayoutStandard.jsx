import React from 'react'

import * as S from './LayoutStandard.styles'
import { SideBar } from "../SideBar";

export const LayoutStandard = ({
    children,
}) => {
    return (
        <S.LayoutStandardContainer>
            <S.SideBarWrapper>
                <SideBar />
            </S.SideBarWrapper>
            <S.ChildrenWrapper>
                {children}
            </S.ChildrenWrapper>
        </S.LayoutStandardContainer>
    )
}