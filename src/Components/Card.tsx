import React from "react";
import Container from "./Container.styled";
import Button from "./Button.Styled";
import Headline from "./Headline.Styled";
import Text from "./Text.Styled";
import Image from "./Image";
import Buttons   from "./Buttons.Styled";

export const Card = () => {
    return (
            <Container>
                <Image />
                <Headline>Headline</Headline>
                <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                <Buttons>
                    <Button outlined>See more</Button>
                    <Button primary>Save</Button>
                </Buttons>
            </Container>
    )
}

export default Card;