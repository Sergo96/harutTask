import React from 'react'

import * as S from './Button.styles'

export const Button = ({
   title,
   children,
   isSecondary,
   onClick,
}) => {
    return (
        <S.Button isSecondary={isSecondary} onClick={onClick}>
            {title || children}
        </S.Button>
    )
}