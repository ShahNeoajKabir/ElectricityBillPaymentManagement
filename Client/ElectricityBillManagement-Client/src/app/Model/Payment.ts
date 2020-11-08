import { BillTable } from "./BillTable";

export class Payment{
    PaymentId: number;
    BillId: number;
    CustomerId: number;
    MeterId: number;
    PaymentMethod: string;
    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
    Status: number;
    BillTable: BillTable;
}