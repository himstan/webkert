import { TimePeriod } from "./time-period.model";

export interface FeatureRelationship {
    id: string,
    name: string,
    relationshipType: string,
    validFor: TimePeriod
}
