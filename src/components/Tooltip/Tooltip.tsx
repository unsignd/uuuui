import styled from 'styled-components';
import { ThemeType } from '../../types';
import { useTheme } from '../../contexts';
import { ReactNode } from 'react';
import ReactTooltip from 'rc-tooltip';

interface TooltipProps {
  children: ReactNode;

  text: string;
}

const Wrapper = styled(ReactTooltip)<{
  $theme: ThemeType;
}>``;

const ChildrenWrapper = styled.div``;

export default function Tooltip({ children, text }: TooltipProps) {
  const { theme } = useTheme();

  return (
    <Wrapper
      $theme={theme}
      placement="left"
      trigger={['click']}
      overlay={<span>{text}</span>}
    >
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
}
