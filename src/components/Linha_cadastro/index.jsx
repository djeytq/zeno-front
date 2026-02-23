'use client'
import { useState } from "react";
import { Button } from "../Button";
import { ModalDetails, ModalDelete, ModalEditeOrRegister } from "../Modal";

export function Linha_cadastro({ data, fetch }) {
    const [showDetail, setShowDetail] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showEdite, setShowEdite] = useState(false);
    const [overlay, setOverlay] = useState(false);

    return (
        <div className="card border-1 border-transparent hover:border-blue-500 min-w-50 bg-gray-200 p-5 rounded-2xl relative">
            <div className="content gap-3 flex justify-between items-center">
                <div className="inf">
                    <p><strong>Nome:</strong> {data.first_name + ' ' + data.last_name}</p>
                    <p><strong>Telefone:</strong> {data.phone}</p>
                </div>
                <div className="actions flex gap-3">
                    <Button 
                    onClick={() => { setOverlay(true); setShowDetail(true) }} 
                    title="ver" cor={"bg-blue-500"}
                    >
                    </Button>
                    <Button 
                    onClick={() => { setOverlay(true); setShowDelete(true) }}
                    cor={"bg-red-500"}
                    title={"apagar"}
                    >
                    </Button>
                    <Button 
                    onClick={() => { setOverlay(true); setShowEdite(true) }} 
                    cor={"bg-green-700"}
                    title={"editar"}
                    >
                    </Button>
                </div>
            </div>

            {overlay && //overlay com os modais
                <>
                    {/* ver datalhes*/}
                    {showDetail && (
                        <div className="fixed gap-3 inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
                            <button onClick={() => { setOverlay(false); setShowDetail(false) }} className="mt-4 bg-blue-600 font-bold text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
                            > Fechar </button>
                            <ModalDetails data={data} />
                        </div>
                    )}

                    {/* apagr cadastro*/}
                    {showDelete && (
                        <div className="fixed gap-3 inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
                            <button onClick={() => { setOverlay(false); setShowDelete(false) }} className="mt-4 bg-blue-600 font-bold text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
                            > Fechar </button>
                            <ModalDelete id={data.id} fetch={fetch} finish={() => { { setOverlay(false); setShowDetail(false) } }} />
                        </div>
                    )}

                    {/* editar cadastro*/}
                    {showEdite && (
                        <div className="fixed gap-3 inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
                            <button onClick={() => { setOverlay(false); setShowEdite(false) }} className="mt-4 bg-blue-600 font-bold text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
                            > Fechar </button>
                            <ModalEditeOrRegister data={data} fetch={fetch} finish={() => { { setOverlay(false); setShowEdite(false) } }} />
                        </div>
                    )}
                </>
            }
        </div >
    )
}