import { type Key, memo, useState } from 'react';
import { Table, type TableProps } from 'antd';
import { useAppSelector } from '@/shared/hooks.ts';
import type { Product } from '@/features/Products/model/types.ts';
import { columns } from '@/features/Products/columns.tsx';
import s from '@/features/Products/Products.module.scss';

type ProductsProps = {
  handleTableChange: NonNullable<TableProps<Product>['onChange']>;
};

const MemoizedProducts = memo(function Products({
  handleTableChange,
}: ProductsProps) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const data = useAppSelector((state) => state.products.data);
  const total = useAppSelector((state) => state.products.total);

  console.log('таблица перерисовалась');

  const onSelectChange = (newSelectedRowKeys: Key[]) => {
    console.log('selectedRowKeys:', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableProps<Product>['rowSelection'] = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className={s.wrapper}>
      <Table<Product>
        rowSelection={rowSelection}
        onChange={handleTableChange}
        columns={columns}
        rowKey="id"
        dataSource={data}
      />
      <h3>Total: {total}</h3>
    </div>
  );
});

export default MemoizedProducts;
