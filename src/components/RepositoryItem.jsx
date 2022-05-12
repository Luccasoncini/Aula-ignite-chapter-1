export function RepositoryItem({ repository }) {
    return (
        <li>
            <strong>{repository?.name ?? 'Default'}</strong>
            <p>{repository?.description ?? 'Default'}</p>''
            <a href={repository?.link ?? 'Default'}>Acessar repositório</a>
        </li>
    )
}