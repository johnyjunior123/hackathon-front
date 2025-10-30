import { DocumentEnumBasic } from "./Document"

export type Edital = {
    id: number
    name: string
    orgao: string
    description: string
    inicio: string
    fim: string
    email_inscricao?: string
    email_contato?: string
    contato?: string
    foco: string[]
    documents: DocumentEnumBasic[]
    valor: number
}
