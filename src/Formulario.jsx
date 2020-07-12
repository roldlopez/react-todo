import React from 'react'

const Formulario = () => {
    const [tarea, setTarea] = React.useState("");
    const [trabajos, setTrabajos] = React.useState([]);
    const [modoEdicion, setModoEdicion] = React.useState(false);
    const [id, setId] = React.useState("");
    const [error, setError] = React.useState(false);

    const agregarTarea = (e) => {
        e.preventDefault();
        if (!tarea.trim()) {
            setError(true);
            return
        }

        setError(false);
        
        setTrabajos([
            ...trabajos,
            tarea
        ]);

        setTarea("");
    }

    const registrarTarea = e => {
        setTarea(e.target.value);
    }

    const eliminar = (id) => {
        const trabajosFiltrados = trabajos.filter((item, index) => item[index] !== item[id] );
        setTrabajos(trabajosFiltrados);
    }

    const editar = (item, id) => {
        setModoEdicion(true);
        setId(id)
        setTarea(item);
    }

    const editarTarea = e => {
        e.preventDefault();
        if (!tarea.trim()) {
            setError(true);
            return
        }

        setError(false);

        const trabajosFiltrados = trabajos.map((item, index) => item[index] === item[id] ? tarea : item );
        setTrabajos(trabajosFiltrados);
        
        setModoEdicion(false);
        setTarea("");
        setId("");
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">CRUD React js</h1>
            <hr />
            <div className="row">
                <div className="col-8">
                    <h4>Tareas</h4>
                    <ul className="list-group">
                        { trabajos.length > 0 ? (

                            trabajos.map((item, index) => (
                                <li className="list-group-item" key={index}>
                                    <p className="mb-0 float-left">{item}</p>
                                    <button type="button" className="btn btn-danger float-right mr-2" onClick={() => { eliminar(index) }}>Eliminar</button>
                                    <button type="button" className="btn btn-warning float-right mr-2" onClick={() => { editar(item, index) }}>Editar</button>
                                </li>
                            ))
                        ) : (
                            <li className="list-group-item"><p className="mb-0 float-left">No hay tareas</p></li>
                        )
                     }
                    </ul>
                </div>
                <div className="col-4">
                    <h4>{modoEdicion ? "Editar Tarea" : "Agregar tarea" }</h4>
                    {error ? <div className="alert alert-danger" role="alert">Escribe una tarea</div> : ""}
                    <form onSubmit={ modoEdicion ? editarTarea : agregarTarea } >
                        <div className="form-group">
                            <input className="form-control" type="text" onChange={e => registrarTarea(e) } value={tarea}/>
                        </div>
                        {
                            modoEdicion ? (
                                <button type="submit" className="btn btn-warning btn-block">Editar Tarea</button>
                            ) : (
                                <button type="submit" className="btn btn-primary btn-block">Agregar Tarea</button>
                            )
                        }
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario
