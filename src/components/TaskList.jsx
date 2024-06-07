export const TaskList = ({ tasks }) => {
    return (
        <div className="mt-4">
            <ul>
                {
                    tasks.map(({ id, title }) => {
                        return <li key={id}>
                            <div className="is-flex is-justify-content-space-between is-align-items-center">
                                <div className="is-flex">
                                    <input type="checkbox" name="" id="" />
                                    <div className="is-flex is-flex-direction-column ml-4">
                                        <h2 className="title is-3">{title}</h2>
                                        <h3 className="subtitle">Nothing</h3>
                                    </div>
                                </div>
                                <p className="buttons">
                                    <button className="button is-link is-small">Editar</button>
                                    <button className="button is-danger is-small">Elimnar</button>
                                </p>
                            </div>
                            <hr />
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
