import { AttendanceList } from "../attendance-list/attendance.model";
import { Group } from "./group.model";

export class Member {

    constructor(
        public memberId: number,
        public name: string,
        public attendanceLists: AttendanceList[],
        public groups: Group[],
        public adminGroups: Group[]
        ) { }
}