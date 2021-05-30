import { AppointmentRef } from "./appointment-ref.model";
import { OrderItemActionType } from "./order-item-action-type.enum";
import { ServiceOrderItemRelationship } from "./service-order-item-relationship.model";
import { ServiceOrderItemStateType } from "./service-order-item-state-type.enum";
import { ServiceRefOrValue } from "./service-ref-or-value.model";

export interface ServiceOrderItem {
    action: OrderItemActionType,
    appointment: AppointmentRef,
    id: string,
    quantity: number,
    service: ServiceRefOrValue,
    serviceOrderItem: ServiceOrderItem[],
    serviceOrderItemRelationship: ServiceOrderItemRelationship[],
    state: ServiceOrderItemStateType
}
