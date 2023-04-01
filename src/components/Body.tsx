type BodyType = {
    titleForBody: string
}

const Body = ({ titleForBody }: BodyType) => {
    return (
        <div>{titleForBody}</div>
    );
};

export default Body;