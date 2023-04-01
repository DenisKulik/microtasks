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
            <tr>
                <th>Manufacturer</th>
                <th>model</th>
            </tr>
            {cars.map((car) => (
                <tr>
                    <td>{car.manufacturer}</td>
                    <td>{car.model}</td>
                </tr>
            ))}
        </table>
    );
};

export default Cars;