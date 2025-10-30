import { Edital } from "@/types/Editais";
import { User } from "@/types/User";

export function checkUserProfile(user: User, edital: Edital) {
    edital.foco.includes(user.type)

    return edital.foco.includes(user.type)
}