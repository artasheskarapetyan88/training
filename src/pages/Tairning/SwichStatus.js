import {StatusType} from "./utils";
export const SwitchStatus = (status) => {
    switch (status) {
        case StatusType.ONLINE:
            return {color:"success", text: "Online"}
        case StatusType.OFFLINE:
            return {color:"default", text: "Offline"}
        default:
            return {color:"warning", text: "Away"}
    }
}