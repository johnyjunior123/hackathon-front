type headerprops = {
    url: string,
    nome: string
}

export const header: headerprops[] = [
    {
        url: 'editais',
        nome: 'Editais'
    },
    {
        url: 'projetos',
        nome: 'Projetos'
    },
    {
        url: 'Participantes',
        nome: 'Participantes'
    }
];


export const headerAuthenticated: headerprops[] = [
    {
        url: '/auth/editais',
        nome: 'Editais'
    },
    {
        url: '/auth/projetos',
        nome: 'Projetos'
    },
    {
        url: '/auth/cursos',
        nome: 'Cursos'
    }
];

