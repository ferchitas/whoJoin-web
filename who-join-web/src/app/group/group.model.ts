import { AttendanceList } from "../attendance-list/attendance.model";
import { Member } from "./member.model";

export class Group {

    constructor(
        public groupId: number,
        public name: string,
        public attendanceLists: AttendanceList[],
        public members: Member[],
        public adminMember: Member[]) {

    }
}