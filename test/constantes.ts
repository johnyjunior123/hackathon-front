import { formatDate } from "@/functions/formatDate";
import { DocumentEnumBasic } from "@/types/Document";
import { Edital } from "@/types/Editais";
import { Project } from "@/types/Project";
import { User, UserTypesEnum } from "@/types/User";

export const user: User = {
    id: 1,
    cpf: '14000179470',
    email: 'johnyjunior64@gmail.com',
    name: 'Johny Carlos Soares Matias Junior',
    phone: '82994123002',
    type: UserTypesEnum.FISICA,
    haveDocuments: [DocumentEnumBasic.certidao_estadual, DocumentEnumBasic.certidao_federal]
}

export const projectTest: Project[] = [{
    id: 1,
    name: 'O tolo sendo louco',
    description: 'A vida de um tolo, considerado louco talvez nem só um pouco',
    icon: 'https://www2.ifsc.usp.br/portal-ifsc/site-antigo/images/stories/UNIVERSO-350.jpg',
    recommendations: 5,
    user: user,
    volunteers: 6,

}]

export const edital: Edital[] = [{
    id: 1,
    name: 'EDITAL DE CHAMAMENTO PÚBLICO Nº 08/2024',
    description: 'FOMENTO À EXECUÇÃO DE AÇÕES CULTURAIS, COM APOIO DIRETO AOS PROJETOS DE FESTIVAIS E CAPACITAÇÕES AUDIOVISUAIS',
    inicio: formatDate(new Date(new Date().setDate(1))),
    fim: formatDate(new Date(new Date().setDate(29))),
    documents: [DocumentEnumBasic.certidao_estadual, DocumentEnumBasic.certidao_federal, DocumentEnumBasic.certidao_municipal, DocumentEnumBasic.cnpj, DocumentEnumBasic.documento_identificacao],
    valor: 50000.00,
    orgao: 'Secretaria de Estado da Cultura e Economia Criativa (SECULT)',
    foco: [UserTypesEnum.PJ, UserTypesEnum.FISICA, UserTypesEnum.MEI]
},
{
    id: 2,
    name: 'EDITAL DE CHAMAMENTO PÚBLICO Nº 09/2024',
    description: 'FOMENTO À EXECUÇÃO DE AÇÕES CULTURAIS, COM APOIO DIRETO AOS PROJETOS DE FESTIVAIS E CAPACITAÇÕES AUDIOVISUAIS',
    inicio: formatDate(new Date(new Date().setDate(1))),
    fim: formatDate(new Date(new Date().setDate(29))),
    email_contato: 'secretaria@cultura.com.br',
    email_inscricao: 'secretaria@mk.com.br',
    documents: [DocumentEnumBasic.certidao_estadual, DocumentEnumBasic.certidao_federal, DocumentEnumBasic.certidao_municipal, DocumentEnumBasic.cnpj, DocumentEnumBasic.documento_identificacao],
    valor: 1000000.00,
    orgao: 'Secretaria de Estado da Cultura e Economia Criativa (SECULT)',
    foco: [UserTypesEnum.PJ]
},
]