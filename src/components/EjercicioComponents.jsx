import React, { useState } from "react";
import PropTypes from "prop-types";

const EjercicioComponents = ({ year }) => {
  const [yearNow, setYearNow] = useState(year);

  const siguiente = () => {
    setYearNow(yearNow + 1);
  };

  const anterior = () => {
    setYearNow(yearNow - 1);
  };

  const cambiarYear = (e) => {
    let dato = parseInt(e.target.value);

    setYearNow(dato);
  };

  return (
    <div>
      <h2>Ejercicio con eventos y useState</h2>
      <strong className="label label-green">{yearNow}</strong>
      <p>
        <button onClick={anterior}>Back</button>
        <button onClick={siguiente}>Next</button>
      </p>
      <p>
        Cambiar anio:
        <br />
        <input
          onChange={cambiarYear}
          type="text"
          placeholder="Cambia el anio"
        />
      </p>
    </div>
  );
};

EjercicioComponents.propTypes = {
  year: PropTypes.number.isRequired,
};

export default EjercicioComponents;
