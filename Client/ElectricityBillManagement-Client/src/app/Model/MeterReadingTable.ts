import { BillTable } from "./BillTable";
import { MeterAssign } from "./MeterAssign";

export class MeterReadingTable{
    MeterRaedingId: number;
    MeterAssignId: number;
    CustomerId: number;
    MeterId: number;
    CurrentUnit: number;
    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
    Status: number;
    BillTable: BillTable;
    MeterAssign:MeterAssign;
}