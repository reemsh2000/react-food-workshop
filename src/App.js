import React from "react";
import Filter from "./Filter";

// const categories = [
//   "all",
//   "burger",
//   "hot dog",
//   "sandwich",
//   "fries",
//   "topping",
//   "drink",
//   "extra",
// ];

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
            <div className="bowl_price">
              <fieldset>
                <legend>price</legend>
                <div className="range_input">
                  <label htmlFor="min_input">Min prive</label>
                  <input
                    type="range"
                    onChange={this.getPrice}
                    value={this.state.minPrice}
                    min="0"
                    max="10"
                    name=""
                    id="min_input"
                    step='0.25'
                  />
                </div>
                <div className="range_input">
                  <label htmlFor="max_input">Max prive</label>
                  <input
                    type="range"
                    onChange={this.getPrice}
                    value={this.state.maxPrice}
                    min="0"
                    max="10"
                    name=""
                    id="max_input"
                    step='0.25'
                  />
                </div>
              </fieldset>
            </div>

            <div className="bowl_category">
              <fieldset>
                <legend>Category</legend>
                <div className="sellect_option">
                  <label htmlFor="all">all</label>
                  <input
                    type="radio"
                    name="category"
                    defaultChecked={this.state.category === "all"}
                    onClick={this.getCategory}
                    value="all"
                    id="all"
                  />
                </div>
                <div className="sellect_option">
                  <label htmlFor="burger">burger</label>
                  <input
                    type="radio"
                    name="category"
                    onClick={this.getCategory}
                    value="burger"
                    id="burger"
                  />
                </div>
                <div className="sellect_option">
                  <label htmlFor="hot_dog">hot dog</label>
                  <input
                    type="radio"
                    name="category"
                    onClick={this.getCategory}
                    value="hot dog"
                    id="hot_dog"
                  />
                </div>
                <div className="sellect_option">
                  <label htmlFor="sandwich">sandwich</label>
                  <input
                    type="radio"
                    name="category"
                    onClick={this.getCategory}
                    value="sandwich"
                    id="sandwich"
                  />
                </div>
                <div className="sellect_option">
                  <label htmlFor="fries">fries</label>
                  <input
                    type="radio"
                    name="category"
                    onClick={this.getCategory}
                    value="fries"
                    id="fries"
                  />
                </div>
                <div className="sellect_option">
                  <label htmlFor="topping">topping</label>
                  <input
                    type="radio"
                    name="category"
                    onClick={this.getCategory}
                    value="topping"
                    id="topping"
                  />
                </div>
                <div className="sellect_option">
                  <label htmlFor="drink">drink</label>
                  <input
                    type="radio"
                    name="category"
                    onClick={this.getCategory}
                    value="drink"
                    id="drink"
                  />
                </div>
                <div className="sellect_option">
                  <label htmlFor="extra">extra</label>
                  <input
                    type="radio"
                    name="category"
                    onClick={this.getCategory}
                    value="extra"
                    id="extra"
                  />
                </div>
              </fieldset>
            </div>
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
