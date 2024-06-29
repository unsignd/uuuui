import styled from 'styled-components';
import { ThemeType } from '../../types';
import { toRem } from '../../utils';
import { TableHTMLAttributes } from 'react';
import { useTheme } from '../../contexts';
import { Sans } from '../../global';

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  header?: string[];
  data: any[];
}

const Wrapper = styled.table<{
  $theme: ThemeType;
}>`
  background-color: ${(props) => props.theme[props.$theme]['base.100']};

  border: ${toRem(1)}rem solid
    ${(props) => props.theme[props.$theme]['base.300']};
  border-radius: ${toRem(7)}rem;

  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

const Header = styled.thead<{
  $theme: ThemeType;
}>`
  background-color: ${(props) => props.theme[props.$theme]['base.200']};

  border-bottom: ${toRem(1)}rem solid
    ${(props) => props.theme[props.$theme]['base.300']};

  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

const Body = styled.tbody<{
  $theme: ThemeType;
}>`
  background-color: ${(props) => props.theme[props.$theme]['base.100']};
`;

const Row = styled.tr`
  height: ${toRem(40)}rem;
`;

const ColumnWrapper = styled.th`
  height: ${toRem(40)}rem;

  margin: 0 ${toRem(14)}rem;

  display: flex;
  align-items: center;
`;

const ColumnText = styled(Sans)<{
  $theme: ThemeType;
}>`
  color: ${(props) => props.theme[props.$theme]['base.400']};

  font-size: ${toRem(14)}rem;
  font-weight: 400;
`;

const ItemWrapper = styled.td`
  height: ${toRem(40)}rem;

  margin: 0 ${toRem(14)}rem;

  display: flex;
  align-items: center;
`;

const ItemText = styled(Sans)<{
  $theme: ThemeType;
}>`
  color: ${(props) => props.theme[props.$theme]['base.500']};

  font-size: ${toRem(14)}rem;
  font-weight: 400;
`;

export default function Table({ header, data, ...attr }: TableProps) {
  const { theme } = useTheme();

  return (
    <Wrapper $theme={theme} {...attr}>
      {header ? (
        <Header $theme={theme}>
          <Row>
            {header.map((item, index) => (
              <ColumnWrapper key={index} scope="col">
                <ColumnText $theme={theme}>{item}</ColumnText>
              </ColumnWrapper>
            ))}
          </Row>
        </Header>
      ) : undefined}
      <Body $theme={theme}>
        {data.map((row, index) => (
          <Row key={index}>
            {Object.keys(row).map((key, index) => (
              <ItemWrapper key={index}>
                <ItemText $theme={theme}>{row[key]}</ItemText>
              </ItemWrapper>
            ))}
          </Row>
        ))}
      </Body>
    </Wrapper>
  );
}
