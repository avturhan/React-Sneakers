import Cards from "../components/Card";

function Home({
  items,
  cartItems,
  onAddToCart,
  onAddToFavorite,
  searchValue,
  onChangeSearchInput,
  setSearchValue,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : `Все кроссовки`}
        </h1>
        <div className="search-block d-flex">
          <img src="../img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items
          .filter(
            (item) =>
              item.name &&
              item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <Cards
              key={item.id}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              isAdded={cartItems.some((cartItem) => cartItem.id === item.id)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
