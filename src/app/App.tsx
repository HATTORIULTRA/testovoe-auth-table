import { useCallback, useState } from 'react';
import { Button } from 'antd';
import Products from '@/features/Products';
import Search from '@/features/Products/components/Search.tsx';
import useProducts from '@/features/Products/model/useProducts.tsx';
import ProgressBar from '@/widgets/ProgressBar/ProgressBar.tsx';
import UserButtons from '@/widgets/UserButtons/UserButtons.tsx';
import AddProductModal from '@/features/Products/components/AddProductModal';

function App() {
  const { searchValue, setSearchValue, handleTableChange, handleResetTable } =
    useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetBtn = <img src="/reset.png" alt="reset-button" />;
  const plusBtn = <img src="/plus.png" alt="plus-button" />;

  const hanldeAddProduct = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseAddProduct = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div>
      <ProgressBar />
      <UserButtons />
      <Search value={searchValue} onChange={setSearchValue} />
      <AddProductModal open={isModalOpen} onClose={handleCloseAddProduct} />
      <div className="buttons_wrapper">
        <h2>Все позиции</h2>
        <div className="buttons_inner">
          <Button onClick={handleResetTable}>{resetBtn}</Button>
          <Button onClick={hanldeAddProduct} type="primary">
            {plusBtn} Добавить
          </Button>
        </div>
      </div>
      <Products handleTableChange={handleTableChange} />
    </div>
  );
}

export default App;
