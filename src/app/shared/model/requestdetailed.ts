import { Team } from "src/app/dashboard/team/model/team"
import { User } from "./user"

export class RequestDetailed{
    id!: number
    user!: User
    team!: Team
    message!: string 
}