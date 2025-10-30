import { DocumentEnumBasic } from "./Document"

export enum UserTypesEnum {
    FISICA = "Pessoa Fisica",
    MEI = "MEI",
    PJ = "PJ em Geral"
}

export type User = {
    id: number
    name: string
    cpf: string
    type: string
    email: string
    phone: string
    haveDocuments?: DocumentEnumBasic[]
    documents?: string[]
}
