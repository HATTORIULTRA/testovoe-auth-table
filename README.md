# Управление товарами | Products Management System

Веб-приложение для управления товарами с функциями авторизации, сортировки, поиска и добавления новых позиций. Реализовано с использованием современного стека React + TypeScript + Ant Design.

## 📋 Содержание

- [Основные возможности](#основные-возможности)
- [Технологический стек](#технологический-стек)
- [Установка](#установка)
- [Запуск приложения](#запуск-приложения)
- [Структура проекта](#структура-проекта)
- [Функциональные требования](#функциональные-требования)
- [API](#api)
- [Демо-данные](#демо-данные)
- [Скриншоты](#скриншоты)

## ✨ Основные возможности

### Авторизация
- 📝 Форма входа с валидацией полей
- ✅ Обработка ошибок с уведомлениями
- 💾 Опция "Запомнить меня" для сохранения сессии
- 🔐 Безопасное хранение токенов (localStorage/sessionStorage)

### Управление товарами
- 📊 Таблица со списком товаров с основными параметрами
- 🔄 Сортировка по столбцам (цена, рейтинг, название)
- 🔍 Поиск товаров в реальном времени через API
- ➕ Добавление новых товаров
- ⏳ Индикатор загрузки при получении данных
- 🎨 Цветовое выделение товаров с рейтингом < 3 (красный)

## 🛠️ Технологический стек

| Категория | Технология |
|-----------|-----------|
| **Frontend Framework** | React 18+ |
| **Language** | TypeScript |
| **UI Components** | Ant Design (antd 5.x) |
| **State Management** | React Hooks (useState, useEffect, useContext) |
| **HTTP Client** | Fetch API / Axios |
| **Build Tool** | Vite / Create React App |
| **Styling** | CSS Modules / Ant Design Styles |
| **Browser** | Google Chrome (актуальная версия) |

### Обоснование выбора технологий

- **Ant Design**: Профессиональная UI библиотека с готовыми компонентами для таблиц, форм и модалов. Идеальна для business-приложений.
- **TypeScript**: Строгая типизация обеспечивает надежность и удобство разработки, особенно при работе с API.
- **React Hooks**: Простое и современное управление состоянием без необходимости в Redux для данного проекта.

## 📦 Установка

### Требования
- Node.js 16+
- npm или yarn

### Шаги установки

```bash
# Клонирование репозитория
git clone https://github.com/hattoriultra/testovoe-auth-table.git

# Установка зависимостей
npm install
# или
yarn install
```

## 🚀 Запуск приложения

### Режим разработки
```bash
npm run dev
# или
yarn dev
```
Приложение откроется на `http://localhost:5173` (Vite) или `http://localhost:3000` (CRA)

### Build для production
```bash
npm run build
# или
yarn build
```

### Preview production build
```bash
npm run preview
# или
yarn preview
```

## 📋 Функциональные требования

### 1. ✅ Форма входа
- [x] Валидация обязательности заполнения полей
- [x] Обработка ошибок от API с выводом в UI
- [x] Чекбокс "Запомнить меня"
- [x] Чистка сессии при закрытии вкладки (если чекбокс не установлен)

### 2. ✅ Управление товарами
- [x] Вывод списка товаров в виде таблицы
- [x] Столбцы: ID, Наименование, Цена, Рейтинг, Вендор, Артикул
- [x] Прогресс-бар при подгрузке данных
- [x] Загрузка с API DummyJSON

### 3. ✅ Сортировка
- [x] Возможность сортировки по основным столбцам
- [x] Сохранение состояния сортировки
- [x] Визуальное отображение направления сортировки

### 4. ✅ Добавление товара
- [x] Модальное окно с формой
- [x] Поля: Наименование, Цена, Вендор, Артикул
- [x] Toast уведомление при успешном добавлении
- [x] Без сохранения на сервер (только в UI)

### 5. ✅ Поиск
- [x] Поиск по названию товара
- [x] Использование API для поиска
- [x] Реальное время (debounce)

### 6. ✅ Дополнительно
- [x] Цветовое выделение товаров с рейтингом < 3 (красный)
- [x] Responsive дизайн
- [x] Соответствие макету Figma

## 🌐 API

Приложение использует публичное API [DummyJSON](https://dummyjson.com/).

### Endpoints

#### Авторизация
```
POST /auth/login
Content-Type: application/json

{
  "username": "atuny0",
  "password": "password"
}

Response:
{
  "id": 1,
  "username": "atuny0",
  "email": "atuny@gmail.com",
  "firstName": "Atu",
  "lastName": "Ny",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  ...
}
```

#### Получение товаров
```
GET /products?skip=0&limit=20

Response:
{
  "products": [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "price": 9.99,
      "rating": 4.94,
      "brand": "Essence",
      "sku": "COSMCK156",
      ...
    },
    ...
  ],
  "total": 194,
  "skip": 0,
  "limit": 20
}
```

#### Поиск товаров
```
GET /products/search?q=phone

Response:
{
  "products": [...],
  "total": 15,
  "skip": 0,
  "limit": 30
}
```

## 🔐 Демо-данные

Для тестирования приложения используйте любой из готовых аккаунтов:

| Username | Password | Имя |
|----------|----------|-----|
| atuny0 | password | Emily Johnson |
| hbingley1 | password | Hailey Bingley |
| rshayne20 | password | Reva Shayne |
| skypler3 | password | Skylar Brown |
| yraigatt6 | password | Yara Raigatt |

Все аккаунты используют пароль: `password`

## 📸 Скриншоты

### Экран авторизации
![Login Screen](./screenshots/login.png)
*Форма входа с валидацией и опцией "Запомнить меня"*

### Страница с товарами
![Products Page](./screenshots/products.png)
*Таблица товаров с возможностью сортировки и поиска*

### Добавление товара
![Add Product Modal](./screenshots/add-product.png)
*Модальное окно для добавления нового товара*

## 💡 Особенности реализации

### Управление сессией
```typescript
// Если чекбокс установлен - сохраняем токен в localStorage
// После закрытия браузера сессия сохранится
if (rememberMe) {
  localStorage.setItem('authToken', token);
}

// Если не установлен - используем sessionStorage
// При закрытии вкладки сессия удалится
else {
  sessionStorage.setItem('authToken', token);
}
```

### Сортировка товаров
```typescript
const [sortConfig, setSortConfig] = useState({
  key: 'title',
  direction: 'asc'
});

// Сортированные товары пересчитываются при изменении конфига
const sortedProducts = useMemo(() => {
  return [...products].sort((a, b) => {
    // логика сортировки
  });
}, [products, sortConfig]);
```

### Поиск с debounce
```typescript
const handleSearch = useCallback(
  debounce((query: string) => {
    fetchProducts(query);
  }, 300),
  []
);
```

## 📞 Контакты

- GitHub: [@username](https://github.com/hattoriultra)

## 🔗 Полезные ссылки

- [DummyJSON API](https://dummyjson.com/)
- [Figma Макет](https://drive.google.com/file/d/1_AlUzuPv7tHzd1Ri13lFICv2We24xGpm/view?usp=sharing)

---

**Последнее обновление**: 2024