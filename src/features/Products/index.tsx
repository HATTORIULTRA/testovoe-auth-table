import { type Key, memo, useState } from 'react';
import { Button, Table, type TableProps } from 'antd';
import { useAppSelector } from '../../shared/hooks.ts';
import type { Product } from './model/types.ts';
import { columns } from './columns.tsx';
import s from './Products.module.scss';

type ProductsProps = {
  handleTableChange: NonNullable<TableProps<Product>['onChange']>;
};

const MemoizedProducts = memo(function Products({
  handleTableChange,
}: ProductsProps) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  const data = useAppSelector((state) => state.products.data);
  const total = useAppSelector((state) => state.products.total);

  const resetBtn = <img src="/reset.png" alt="reset-button" />;

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
      <div className={s.title}>
        <h2>Все позиции</h2>
        <div className={s.buttons}>
          <Button>{resetBtn}</Button>
          <Button>Добавить</Button>
        </div>
      </div>
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
