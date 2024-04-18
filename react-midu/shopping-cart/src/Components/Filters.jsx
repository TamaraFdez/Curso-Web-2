/* eslint-disable react/prop-types */
import { useFilters } from "../hocks/useFilters";
import "./Filters.css";
import { useId } from "react";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const minProFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor={minProFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minProFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Teléfonos</option>
          <option value="groceries">Comida</option>
          <option value="skincare">Para la piel</option>
          <option value="fragrances">Perfumes</option>
          <option value="home-decoration">Decoración</option>
        </select>
      </div>
    </section>
  );
}
