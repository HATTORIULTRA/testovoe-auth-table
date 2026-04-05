import { useAppDispatch, useAppSelector } from '../../shared/hooks.ts';
import { useEffect } from 'react';
import { setProgress } from '../../features/Products/model/slice.ts';
import { Progress } from 'antd';

function ProgressBar() {
  const dispatch = useAppDispatch();
  const progress = useAppSelector((state) => state.products.progress);

  useEffect(() => {
    if (progress !== 100) return;
    const timer = setTimeout(() => {
      dispatch(setProgress(0));
    }, 500);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div
      style={{
        opacity: progress === 100 ? 1 : 0,
      }}
    >
      <Progress
        percent={progress}
        status={progress < 100 ? 'active' : 'success'}
        showInfo={false}
      />
    </div>
  );
}

export default ProgressBar;
