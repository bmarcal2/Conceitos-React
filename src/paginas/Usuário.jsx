import { useEffect, useState } from "react"

export default function Usuário () {
    const [contador, setContador] = useState(0)
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        document.title = 'contagem ' + contador
        const buscarUuarios = async () => {
            const resposta = await fetch ('http://localhost:3000/usuarios')
            const data = await resposta.json()
            setUsuarios(data)

            console.log(data);

        }

    }, [contador])

    return (
    <div>
        <h1>Usuário</h1>
        <h1>{contador}</h1>

        <button onClick={() => {setContador(contador + 1)}}>somar</button>

        <ul>
        {usuarios.map( (usuario) => {
            <li key ={usuario.id}>
                <b>{usuario.nome}</b>
                STATUS: { usuario.ativo ? 'Ativo' : 'Desativo'}
            </li>
        })}
        </ul>
    </div>
      
    )
}