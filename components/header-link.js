import React from 'react';
import Link from 'next/link'

import { HeaderListItem } from 'groy';

const HeaderLink = props => (
    <HeaderListItem>
        <Link href={props.to}>
            <a className={`ds-header__nav-link ${props.className || ''}`}>{props.children}</a>
        </Link>
    </HeaderListItem>
);

export default HeaderLink;
