import React, { ReactElement } from 'react';
import Styled from './PageHeader.styles';

interface IProps {
  title: string;
}

const PageHeader = (props: IProps): ReactElement => {
  const { title } = props;

  return (
    <Styled.Root>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Root>
  );
};

export default PageHeader;
