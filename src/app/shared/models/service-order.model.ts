import { ExternalReference } from "@angular/compiler";
import { Note } from "./note.model";
import { RelatedParty } from "./related-party.model";
import { ServiceOrderItem } from "./service-order-item.model";
import { ServiceOrderRelationship } from "./service-order-relationship.model";
import { ServiceOrderStateType } from "./service-order-state-type.enum";

export interface ServiceOrder {
    cancelllationDate: Date,
    cancellationReason: string,
    category: string,
    completionDate: Date,
    description: string,
    expectedCompletionDate: Date,
    externalId: string,
    externalReference: ExternalReference[],
    href: string,
    id: string,
    note: Note[],
    notificationContact: string,
    orderDate: Date,
    orderRelationship: ServiceOrderRelationship[],
    priority: string,
    relatedParty: RelatedParty[],
    requestedCompletionDate: Date,
    requestedStartDate: Date,
    serviceOrderItem: ServiceOrderItem,
    startDate: Date,
    state: ServiceOrderStateType
}
