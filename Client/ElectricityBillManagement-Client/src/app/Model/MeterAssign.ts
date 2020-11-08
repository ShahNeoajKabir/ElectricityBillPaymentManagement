import { Customer } from "./Customer";
import { MeterTable } from "./MeterTable";

export class MeterAssign{
    MeterAssignId: number;
    CustomerId: number;
    MeterId: number;
    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
    Status: number;
    MeterTable: MeterTable;
    Customer: Customer;
}