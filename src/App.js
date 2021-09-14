import React from "react";
import Filter from "./Filter";
import RangeInput from "./Components/RangeInput";
import CategoryList from "./Components/CategoryList";



class App extends React.Component {
  state = {
    minPrice: 0,
    maxPrice: 10,
    category: "all",
  };

  getPrice = (e) => {
    e.target.id === "min_input"
      ? this.setState({ minPrice: e.target.value })
      : this.setState({ maxPrice: e.target.value });
  };

  getCategory = (e) => {
    this.setState({ category: e.target.value });
  };

  render() {
    return (
      <main>
        <section className="filters">
          <h1>Burger Place</h1>
          <h2>Filters</h2>
          <form>
         <RangeInput maxPrice={this.state.maxPrice} minPrice={this.state.minPrice}getPrice={this.getPrice} />
           <CategoryList chosencategory={this.state.category} getCategory={this.getCategory} />
          </form>
        </section>

        {/* --------------------------------main---------------------------- */}
        <section className="dishes">
          <h2>Dishes</h2>
          <ul className="grid">
            <Filter query={this.state} />
          </ul>
        </section>
      </main>
    );
  }
}

export default App;
