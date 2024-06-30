import styled from 'styled-components';
import { ThemeType } from '../../types';
import { toRem } from '../../utils';
import { TableHTMLAttributes, useState } from 'react';
import { useTheme } from '../../contexts';
import { Sans } from '../../global';

import { ReactComponent as ArrowDownSVG } from '../../assets/arrow_down_8.svg';

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  header?: (
    | string
    | {
        text: string;
        sortable?: boolean;
        onClick?: (
          event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
        ) => void;
      }
  )[];
  data: any[][];
}

const Wrapper = styled.table<{
  $theme: ThemeType;
}>`
  background-color: ${(props) => props.theme[props.$theme]['base.100']};

  border: ${toRem(1)}rem solid
    ${(props) => props.theme[props.$theme]['base.300']};
  border-radius: ${toRem(7)}rem;
  border-spacing: 0;

  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

const Header = styled.thead<{
  $theme: ThemeType;
}>`
  padding: 0 ${toRem(14)}rem;

  background-color: ${(props) => props.theme[props.$theme]['base.200']};
`;

const Body = styled.tbody<{
  $theme: ThemeType;
}>`
  padding: 0 ${toRem(14)}rem;

  background-color: ${(props) => props.theme[props.$theme]['base.100']};
`;

const Row = styled.tr`
  height: ${toRem(40)}rem;
`;

const ColumnWrapper = styled.th`
  height: ${toRem(40)}rem;

  padding: 0;
`;

const Column = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 ${toRem(14)}rem;

  display: flex;
  align-items: center;
  gap: ${toRem(7)}rem;
`;

const ColumnText = styled(Sans)<{
  $theme: ThemeType;
}>`
  color: ${(props) => props.theme[props.$theme]['base.400']};

  font-size: ${toRem(14)}rem;
  font-weight: 400;
  text-decoration-color: ${(props) => props.theme[props.$theme]['base.400']};

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ArrowIcon = styled(ArrowDownSVG)<{
  $sortedIndex?: boolean;
  $sortedMethod: null | 'ascending' | 'descending';

  $theme: ThemeType;
}>`
  width: ${toRem(8)}rem;
  height: ${toRem(8)}rem;

  color: ${(props) => props.theme[props.$theme]['base.400']};

  transform: ${(props) =>
    props.$sortedMethod === 'descending' ? 'rotate(180deg)' : undefined};
  opacity: ${(props) => (props.$sortedIndex && props.$sortedMethod ? 1 : 0)};
`;

const ItemWrapper = styled.td`
  height: ${toRem(40)}rem;

  padding: 0;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 ${toRem(14)}rem;

  display: flex;
  align-items: center;
`;

export default function Table({ header, data, ...attr }: TableProps) {
  const [sortedIndex, setSortedIndex] = useState<number | undefined>(
    header?.findIndex((item) => typeof item === 'object' && item.sortable)
  );
  const [sortedMethod, setSortedMethod] = useState<
    null | 'ascending' | 'descending'
  >(null);

  const { theme } = useTheme();

  return (
    <Wrapper $theme={theme} {...attr}>
      {header ? (
        <Header $theme={theme}>
          <Row>
            {header.map((item, index) => (
              <ColumnWrapper key={index} scope="col">
                <Column>
                  <ColumnText
                    $theme={theme}
                    onClick={(event) => {
                      if (typeof item === 'object' && item.onClick) {
                        item.onClick(event);
                      }

                      setSortedIndex(header.indexOf(item));
                      setSortedMethod(
                        sortedMethod === null
                          ? 'ascending'
                          : sortedMethod === 'ascending'
                          ? 'descending'
                          : null
                      );
                    }}
                  >
                    {typeof item === 'string' ? item : item.text}
                  </ColumnText>
                  <ArrowIcon
                    $theme={theme}
                    $sortedIndex={header.indexOf(item) === sortedIndex}
                    $sortedMethod={sortedMethod}
                  />
                </Column>
              </ColumnWrapper>
            ))}
          </Row>
        </Header>
      ) : undefined}
      <Body $theme={theme}>
        {data.map((row, index) => (
          <Row key={index}>
            {row.map((key, index) => (
              <ItemWrapper key={index}>
                <Item>{key}</Item>
              </ItemWrapper>
            ))}
          </Row>
        ))}
      </Body>
    </Wrapper>
  );
}
