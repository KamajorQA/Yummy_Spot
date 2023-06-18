import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';
import ProductCard from '../ProductCard/ProductCard';
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
            <ProductCard title="Маргарита" price="500" />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
