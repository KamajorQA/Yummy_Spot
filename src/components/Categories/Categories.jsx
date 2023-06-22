import { useState } from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => {
          return (
            <li
              onClick={() => {
                setActiveCategory(index);
              }}
              className={activeCategory === index ? 'activeCategory' : ''}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
