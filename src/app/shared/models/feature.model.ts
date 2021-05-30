import { Characteristic } from "./characteristic.model";
import { ConstraintRef } from "./constraint-ref.model";
import { FeatureRelationship } from "./feature-relationship.model";

export interface Feature {
    constraint: ConstraintRef[],
    featureCharacteristic: Characteristic[],
    featureRelationship: FeatureRelationship[],
    id: string,
    isBundle: boolean,
    isEnabled: boolean,
    name: string
}
