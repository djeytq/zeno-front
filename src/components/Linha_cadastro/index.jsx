
export function Linha_cadastro({data}) {

    return (
        <div className="card min-w-50 bg-blue-300 p-5 rounded-2xl">
            <div className="content gap-3 flex justify-between items-center">
                <div className="inf">
                    <p><strong>Nome:</strong> {data.first_name + ' '+ data.last_name}</p>
                    <p><strong>Email:</strong> {data.phone}</p>
                </div>
                <div className="actions flex gap-3">
                    <span className="py-1 px-4 rounded-lg hover:brightness-75 text-white font-medium text-lg bg-green-200">ver</span>
                    <span className="py-1 px-4 rounded-lg hover:brightness-75 text-white font-medium text-lg bg-green-200">apgar</span>
                    <span className="py-1 px-4 rounded-lg hover:brightness-75 text-white font-medium text-lg bg-green-200">editar</span>
                </div>
            </div>
        </div>
    )
}