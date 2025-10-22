import { MassScheduleModel } from "./massScheduleModel"
import { ServerModel } from "./serverModel"
 type ScheduleModel = {
    id:number,
    mass:MassScheduleModel,
    servers:ServerModel[]
}
export {type ScheduleModel}