import { Customer } from "./Customer";

export class Zone{
    ZoneId: number;
    ZoneName: string;
    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
    Status: number;
    Customer: Customer;
}