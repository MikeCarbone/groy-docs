import React from 'react';
import {
    Header,
    HeaderNav,
    Wrapper
} from 'groy';
import HeaderLink from './header-link';

const HeaderAssembled = props => (
    <Wrapper>
        <Header>
            <HeaderNav>
                <HeaderLink to="/">Home</HeaderLink>
                <HeaderLink to="/components">components</HeaderLink>
                <HeaderLink to="/components">Docs</HeaderLink>
                <HeaderLink to="https://github.com/carbonology/groy-source">github</HeaderLink>
            </HeaderNav>
        </Header>
    </Wrapper>
);

export default HeaderAssembled;
