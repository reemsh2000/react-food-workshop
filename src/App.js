import React from 'react'
import RangeInput from './Components/RangeInput'
import CategoryList from './Components/CategoryList'
import dishes from './data'
import Card from './Components/Card'

class App extends React.Component {
  state = {
    minPrice: 0,
    maxPrice: 10,
    SelectedCategory: 'all',
  }

  getPrice = (e) => {
    e.target.id === 'min_input'
      ? this.setState({ minPrice: e.target.value })
      : this.setState({ maxPrice: e.target.value })
  }

  getCategory = (e) => {
    this.setState({ SelectedCategory: e.target.value })
  }
  Filter() {
    let { maxPrice, minPrice, SelectedCategory } = this.state
    return dishes.filter(
      ({ price, category }) =>
        price >= minPrice &&
        price <= maxPrice &&
        (SelectedCategory === category || SelectedCategory === 'all'),
    )
  }

  render() {
    return (
      <main>
        <section className="filters">
          <h1>Burger Place</h1>
          <h2>Filters</h2>
          <form>
            <RangeInput
              maxPrice={this.state.maxPrice}
              minPrice={this.state.minPrice}
              getPrice={this.getPrice}
            />
            <CategoryList
              chosencategory={this.state.SelectedCategory}
              getCategory={this.getCategory}
            />
          </form>
        </section>

        {/* --------------------------------main---------------------------- */}
        <section className="dishes">
          <h2>Dishes</h2>
          <ul className="grid">
            {this.Filter().map(({ id, name, price, category, description }) => {
              return (
                <Card
                  key={id}
                  name={name}
                  price={price}
                  category={category}
                  description={description}
                />
              )
            })}
          </ul>
        </section>
      </main>
    )
  }
}

export default App
