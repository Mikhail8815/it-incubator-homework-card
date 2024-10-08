import styled, {css} from "styled-components";

type StaledBtnPropsType = {
    primary?: boolean,
    outlined?: boolean
}
kgrkggkjjk

const Button = styled.button<StaledBtnPropsType> `
    width: 86px;
    height: 30px;
    margin-right: 12px;
    border-radius: 5px;
    
    ${props => props.outlined && css<StaledBtnPropsType>`
        background-color: blue;
        color: white;
        border: none;
        &:hover {
            border-color: #58ff25;
            color: #58ff25;
            background-color: transparent;
            cursor: pointer;
        }
    `}

    ${props => props.primary && css<StaledBtnPropsType>`
        background-color: white;
        color: blue;
        border-color: blue;
        
        &:hover {
            background-color: #58ff25;
            cursor: pointer;
        }
    `}
`
export default Button
