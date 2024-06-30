import styled from 'styled-components';
import { ThemeType } from '../../types';
import { toRem } from '../../utils';
import { HTMLAttributes, useState } from 'react';
import { useTheme } from '../../contexts';
import { Sans } from '../../global';

import { ReactComponent as ArrowDownSVG } from '../../assets/arrow_down_8.svg';

interface HeaderProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  sortable?: boolean;
}

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  header?: {
    [key: string]: HeaderProps;
  };
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
  $sortable: boolean;

  $theme: ThemeType;
}>`
  color: ${(props) => props.theme[props.$theme]['base.400']};

  font-size: ${toRem(14)}rem;
  font-weight: 400;
  text-decoration-color: ${(props) => props.theme[props.$theme]['base.400']};

  cursor: ${(props) => (props.$sortable ? 'pointer' : 'auto')};

  &:hover {
    text-decoration: ${(props) => (props.$sortable ? 'underline' : undefined)};
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

const ItemText = styled(Sans)<{
  $theme: ThemeType;
}>`
  color: ${(props) => props.theme[props.$theme]['base.500']};
  font-size: ${toRem(14)}rem;
  font-weight: 400;
`;

export default function Table({ header, data, ...attr }: TableProps) {
  const [sortedIndex, setSortedIndex] = useState<number | undefined>(
    header
      ? Object.keys(header).findIndex((key) => header[key].sortable)
      : undefined
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
            {Object.keys(header).map((key, index) => (
              <ColumnWrapper key={index} scope="col">
                <Column {...header[key]} onClick={undefined}>
                  <ColumnText
                    $sortable={header[key].sortable ? true : false}
                    $theme={theme}
                    onClick={(event) => {
                      header[key].onClick
                        ? header[key].onClick(event)
                        : undefined;

                      if (header[key].sortable) {
                        setSortedMethod(
                          sortedIndex !== Object.keys(header).indexOf(key) ||
                            sortedMethod === null
                            ? 'ascending'
                            : sortedMethod === 'ascending'
                            ? 'descending'
                            : null
                        );
                        setSortedIndex(Object.keys(header).indexOf(key));
                      }
                    }}
                  >
                    {header[key].text}
                  </ColumnText>
                  <ArrowIcon
                    $theme={theme}
                    $sortedIndex={
                      sortedIndex === Object.keys(header).indexOf(key)
                    }
                    $sortedMethod={sortedMethod}
                  />
                </Column>
              </ColumnWrapper>
            ))}
          </Row>
        </Header>
      ) : undefined}
      <Body $theme={theme}>
        {data
          .toSorted((a, b) =>
            sortedIndex !== undefined && sortedMethod !== null
              ? sortedMethod === 'ascending'
                ? typeof a[sortedIndex] === 'string' &&
                  typeof b[sortedIndex] === 'string'
                  ? a[sortedIndex].localeCompare(b[sortedIndex])
                  : a[sortedIndex] >= b[sortedIndex] || b[sortedIndex]
                  ? 1
                  : -1
                : typeof a[sortedIndex] === 'string' &&
                  typeof b[sortedIndex] === 'string'
                ? b[sortedIndex].localeCompare(a[sortedIndex])
                : a[sortedIndex] >= b[sortedIndex] || b[sortedIndex]
                ? -1
                : 1
              : 0
          )
          .map((row, index) => (
            <Row key={index}>
              {row.map((key, index) => (
                <ItemWrapper key={index}>
                  <Item>
                    {typeof key === 'string' || typeof key === 'number' ? (
                      <ItemText $theme={theme}>{key}</ItemText>
                    ) : (
                      key
                    )}
                  </Item>
                </ItemWrapper>
              ))}
            </Row>
          ))}
      </Body>
    </Wrapper>
  );
}
