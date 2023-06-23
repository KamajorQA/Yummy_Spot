import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import ProductCard from '../ProductCard/ProductCard';
import dishes from '../../assets/dishes.json';
import '../../styles/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {dishes.map((dish) => {
              return <ProductCard {...dish} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
