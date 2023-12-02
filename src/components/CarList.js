import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();

  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filterdCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filterdCars,
      name: form.name,
    };
  });

  const handleDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderdCars = cars.map((car) => {
    // decide if the car should be bold
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className='button is-danger' onClick={() => handleDelete(car)}>
          delete
        </button>
      </div>
    );
  });

  console.log(cars);
  return <div className='car-list'>{renderdCars}</div>;
}

export default CarList;
