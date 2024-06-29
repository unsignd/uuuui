import { createColumnHelper } from '@tanstack/react-table';
import styled from 'styled-components';

interface TableProps<T> {
  data: T[];
}

const Wrapper = styled.div``;

export default function Table<T extends { [key: string]: any }>({
  data = [],
}: TableProps<T>) {
  const columnHelper = createColumnHelper<T>();

  const columns =
    data.length > 0
      ? Object.keys(data[0]).map((key) =>
          columnHelper.accessor(key as keyof T, {
            header: () => key,
            cell: (info) => info.renderValue(),
          })
        )
      : [];

  return <Wrapper>{data}</Wrapper>;
}
