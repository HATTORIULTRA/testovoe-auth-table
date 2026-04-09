import { Input } from 'antd';
import s from './Search.module.scss';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

function Search({ value, onChange }: Props) {
  const searchIcon = <img src="/search.png" alt="search" />;

  return (
    <div className={s.wrapper}>
      <h1>Товары</h1>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={s.input}
        prefix={searchIcon}
        placeholder="Найти"
      />
    </div>
  );
}

export default Search;
