import { Characteristic } from "./characteristic.model";
import { Feature } from "./feature.model";
import { Note } from "./note.model";
import { RelatedEntityRefOrValue } from "./related-entity-ref-or-value.model";
import { RelatedParty } from "./related-party.model";
import { RelatedPlaceRefOrValue } from "./related-place-ref-or-value.model";
import { RelatedServiceOrderItem } from "./related-service-order-item.model";
import { ResourceRef } from "./resource-ref.model";
import { ServiceRelationship } from "./service-relationship.model";
import { ServiceSpecificationRef } from "./service-specification-ref.model";
import { ServiceStateType } from "./service-state-type.enum";

export interface ServiceRefOrValue {
    name: string,
    id: string,
    category: string,
    description: string,
    endDate: Date,
    hasStarted: boolean,
    isBundle: boolean,
    isServiceEnabled: boolean,
    isStateful: boolean,
    serviceDate: string,
    serviceType: string,
    startDate: Date,
    startMode: string,
    feature: Feature[],
    note: Note[],
    place: RelatedPlaceRefOrValue[],
    relatedEntity: RelatedEntityRefOrValue[],
    relatedParty: RelatedParty[],
    serviceCharacteristic: Characteristic[],
    serviceOrderItem: RelatedServiceOrderItem[],
    serviceRelationship: ServiceRelationship[],
    serviceSpecification: ServiceSpecificationRef,
    state: ServiceStateType,
    supportingResource: ResourceRef[],
    supportingService: ServiceRefOrValue[]
}
