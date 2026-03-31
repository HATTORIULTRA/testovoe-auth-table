import { Button } from 'antd';
import { useEffect } from 'react';
import { getProducts } from '../features/Products/model/slice.ts';
import { useAppDispatch } from '../shared/hooks.ts';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <Button>awdawda</Button>
    </>
  );
}

export default App;
