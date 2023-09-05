const Bienvenida = (prop) => {
    return (
        <>
            <h1>Hola, {prop.usuario.nombre}</h1>
            <p>Sabemos que tenes {prop.usuario.edad} años.</p>
        </>
    )
}

export default Bienvenida