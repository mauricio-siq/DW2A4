interface RepositoryItemProps{
    repository:{
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps){
    return(
        <li>
            <strong>{props.repository?.name ?? 'Repositório padrão'}</strong>
            <p>{props.repository?.description}</p>
            <a href={props.repository?.html_url}>Acesso ao repositório</a>
        </li>
    )
}