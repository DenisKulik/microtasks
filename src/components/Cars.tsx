type CarsType = {
    cars: CarType[]
}

type CarType = {
    manufacturer: string
    model: string
}

const Cars = ({ cars }: CarsType) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>model</th>
            </tr>
            </thead>
            <tbody>
            {cars.map((car, idx) => (
                <tr key={idx}>
                    <td>{car.manufacturer}</td>
                    <td>{car.model}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Cars;