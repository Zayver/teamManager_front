import { User } from "src/app/shared/model/user"
import { Team } from "../../dashboard/team/model/team"

export class InvitationsDetailed{
    id!: number
    user!: User
    userOwner!: User
    teamId!: Team
    message!: string
}