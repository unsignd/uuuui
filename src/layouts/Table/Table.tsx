import styled from 'styled-components';

interface TableProps {
  data: Object[];
}

const Wrapper = styled.div``;

export default function Table({ data: [] }: TableProps) {
  return <Wrapper></Wrapper>;
}
