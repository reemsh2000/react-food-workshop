import React from "react";
import CategoryFilter from "./components/CategoryFilter";
import PriceFilter from "./components/PriceFilter";
import DishList from "./components/DishList";

class App extends React.Component {
  state = {
    catFilter: "all", 
    priceFilter:[0.5,9]
  }

  setCatFilter = (val)=> {
    this.setState({catFilter: val})
  }
  setPriceFilter = (arr) => {
    this.setState({priceFilter: arr})

  }
  render(){
    const {priceFilter, catFilter} = this.state

    return (
      <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <h2>Filters</h2>
        <form>
          <PriceFilter
            priceFilter={priceFilter}
            setPriceFilter={this.setPriceFilter}
            />
          <CategoryFilter catFilter={catFilter} setCatFilter={this.setCatFilter} />
        </form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>
        <DishList catFilter={catFilter} priceFilter={priceFilter} />
      </section>
    </main>
  );
}
}

export default App;
