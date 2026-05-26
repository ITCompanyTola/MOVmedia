import data from "../../../data/data";
import { useAppStore } from "../../../store/useAppStore";
import { Card, CardText } from "../Card/Card";

export function LocationStart() {
    const { person, activeLocation } = useAppStore();

    if (!person || !activeLocation) return null;

    return (
        <Card>
            {data.data.locations
                .find((l) => l.id === activeLocation)
                ?.start[
                    person.id
                ].card.blocks.map((block) => block.type === "text" && <CardText>{block.text}</CardText>)}
        </Card>
    );
}
