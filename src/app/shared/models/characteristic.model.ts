import { CharacteristicRelationship } from "./characteristic-relationship.model";

export interface Characteristic {
    characteristicRelationship: CharacteristicRelationship[],
    id: string,
    name: string,
    value: any,
    valueType: string
}
