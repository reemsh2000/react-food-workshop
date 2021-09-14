import React from 'react'
 
function RangeInput(props) {
   const {getPrice,minPrice,maxPrice} =props;
    return (
        <div className="bowl_price">
        <fieldset>
          <legend>price</legend>
          <div className="range_input">
            <label htmlFor="min_input">Min prive</label>
            <input
              type="range"
              onChange={getPrice}
              value={minPrice}
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
              onChange={getPrice}
              value={maxPrice}
              min="0"
              max="10"
              name=""
              id="max_input"
              step='0.25'
            />
          </div>
        </fieldset>
      </div> )   
}
export default RangeInput