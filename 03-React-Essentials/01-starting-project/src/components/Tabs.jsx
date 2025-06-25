import { Fragment } from "react";

export default function Tabs({ children, buttons, buttonsContainer = 'menu' }) {
    const ButtonsContainer = buttonsContainer;
    //ButtonsContainer를 따로 지정하지 않고 속성을 받을때 애초에 첫 문자를 대문자로 시작하여 선언할 수도 있다. ButtonsContainer 처럼.
    return (
        <Fragment>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </Fragment>
    );
}