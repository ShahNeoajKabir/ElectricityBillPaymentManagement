import { MeterReadingTable } from "./MeterReadingTable";
import { Payment } from "./Payment";

export class BillTable{
    BillId: number;
    MeterReadingId: number;
    CustomerId: number;
    MeterId: number;
    PreviousUnit: number;
    CurrentUnit: number;
    BillAmount: number;
    CurrentMonth: number;
    PreviousMonth: number;
    BillStatus: number;
    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
    Status: number;
    MeterReadingTable: MeterReadingTable;
    Payment: Payment;

}