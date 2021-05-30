import { ServiceOrderItemRef } from "./service-order-item-ref.model";

export interface ServiceOrderItemRelationship {
    orderItem: ServiceOrderItemRef,
    relationshipType: string
}
