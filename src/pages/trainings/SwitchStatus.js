import {StatusType} from "./utils";
export const SwitchStatus = (status) => {
    switch (status) {
        case StatusType.LIVE:
            return {color:"success", text: "Live"}
        case StatusType.PENDING:
            return {color:"warning", text: "Pending"}
        default:
            return {color:"default", text: "Draft"}
    }
}