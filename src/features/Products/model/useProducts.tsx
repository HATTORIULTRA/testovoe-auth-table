import { useAppDispatch, useAppSelector } from '../../../shared/hooks.ts';
import { useCallback, useEffect, useState } from 'react';
import useDebounce from '../../../shared/useDebounce.tsx';
import { getProducts } from './slice.ts';
import type { Product } from './types.ts';
import type { TableProps } from 'antd';

type HandleTableChange = NonNullable<TableProps<Product>['onChange']>;

function useProducts() {
  const [searchValue, setSearchValue] = useState('');
  const [sortBy, setSortBy] = useState<string | undefined>('');
  const [order, setOrder] = useState<string | undefined>('');

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.products.isLoading);
  const progress = useAppSelector((state) => state.products.progress);
  const data = useAppSelector((state) => state.products.data);
  const total = useAppSelector((state) => state.products.total);
  const debouncedSearch = useDebounce(searchValue, 400);

  useEffect(() => {
    dispatch(getProducts({ search: debouncedSearch.trim(), sortBy, order }));
  }, [debouncedSearch, sortBy, order]);

  const handleTableChange: HandleTableChange = useCallback((_, __, sorter) => {
    const s = Array.isArray(sorter) ? sorter[0] : sorter;
    setSortBy(s.field as string | undefined);
    setOrder(
      s.order === 'ascend' ? 'asc' : s.order === 'descend' ? 'desc' : undefined,
    );
  }, []);

  return {
    data,
    total,
    isLoading,
    progress,
    searchValue,
    setSearchValue,
    handleTableChange,
  };
}

export default useProducts;
