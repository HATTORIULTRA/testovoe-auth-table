import Products from '@/features/Products';
import Search from '@/features/Products/components/Search.tsx';
import useProducts from '@/features/Products/model/useProducts.tsx';
import ProgressBar from '@/widgets/ProgressBar/ProgressBar.tsx';
import UserButtons from '@/widgets/UserButtons/UserButtons.tsx';

function App() {
  const { searchValue, setSearchValue, handleTableChange } = useProducts();

  return (
    <div>
      <ProgressBar />
      <UserButtons />
      <Search value={searchValue} onChange={setSearchValue} />
      <Products handleTableChange={handleTableChange} />
    </div>
  );
}

export default App;
