import { Characteristic } from "./characteristic.model";
import { ServiceRefOrValue } from "./service-ref-or-value.model";

export interface ServiceRelationship {
    relationshipType: string,
    service: ServiceRefOrValue,
    serviceRelationshipCharacteristic: Characteristic[]
}
