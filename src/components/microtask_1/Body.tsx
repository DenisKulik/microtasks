import Cars from '../microtask_2/Cars';

type BodyType = {
    titleForBody: string
}

const Body = ({ titleForBody }: BodyType) => {
    const topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' }
    ];

    return (
        <>
            <div>{ titleForBody }</div>
            <Cars cars={ topCars } />
        </>

    );
};

export default Body;