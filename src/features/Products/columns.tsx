import type { Product } from '@/features/Products/model/types.ts';

export const columns = [
  {
    title: 'Наименование',
    dataIndex: 'title',
    key: 'title',
    render: (value: string, record: Product) => (
      <div>
        <div style={{ fontWeight: 600 }}>{value}</div>
        <div style={{ color: '#999', fontSize: 12 }}>{record.category}</div>
      </div>
    ),
    sorter: true,
  },
  {
    title: 'Вендор',
    dataIndex: 'brand',
    key: 'brand',
    render: (value: string) => <div style={{ fontWeight: 600 }}>{value}</div>,
    sorter: true,
  },
  {
    title: 'Артикул',
    dataIndex: 'sku',
    key: 'sku',
    sorter: true,
  },
  {
    title: 'Оценка',
    dataIndex: 'rating',
    key: 'rating',
    sorter: true,
    render: (value: number) => {
      const lowRating = value < 3 ? 'red' : 'inherit';
      return <div style={{ color: lowRating }}>{value}</div>;
    },
  },
  {
    title: 'Цена, ₽',
    dataIndex: 'price',
    key: 'price',
    sorter: true,
  },
];
