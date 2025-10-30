import { User } from "./User"

export type Project = {
    id: number
    icon: string
    name: string
    description: string
    recommendations: number
    volunteers: number
    user: User
}