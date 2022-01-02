import { Member } from "../group/member.model";

export class AttendanceList {

    public constructor(
        public listId: number,
        public header: string,
        public message: string,
        public dateTime: Date,
        public attenders: Member[]) { }
}