import React from 'react';
import Link from 'next/link';

const Button = props => {
  const classTitle = 'ds-button';
  const spaceClass = props.space ? `${classTitle}--spaced` : null;
  const className = props.className ? `${classTitle} ${props.className}` : `${classTitle} ${spaceClass}`;
  return (
    <Link href={props.to}>
        <a className={className}>{props.children}</a>
    </Link>
  );
}

export default Button;