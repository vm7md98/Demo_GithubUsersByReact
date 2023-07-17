// We create a list of those `Card` components in a `CardList` component in `src/components/CardList.jsx`.

// A parent component will provide it a list of cards using props, and `CardList` will take care of iterating over them and render a `Card` component for each one.
import Card from "./Card";

function CardList(props) {
    return (
        <div className="mt-10">
            {props.cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    )
}

export default CardList