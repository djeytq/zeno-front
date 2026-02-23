'use client'
import { Linha_cadastro } from "@/components/Linha_cadastro";
import { ModalEditeOrRegister } from "@/components/Modal";
import { useState, useEffect } from "react";
import { Button } from "@/components/Button";
import { URL_BASE } from "@/service/url";

export default function Home() {
  const [data, setData] = useState([]);
  const [showRegister, setShowRegister] = useState(false);
  const [overlay, setOverlay] = useState(false);

  async function fecthData() {
    const response = await fetch(URL_BASE + '/cadastro/show');
    const data_json = await response.json();
    setData(data_json)

  }
  useEffect(() => {
    fecthData()
  }, [])

  return (
    <div className="mt-10 mx-auto md:w-250">
      <div className="header flex justify-between px-4">
        <h1 className="text-xl">Total de cadastros: <strong>{data.length}</strong></h1>
        <div className="btns flex gap-3">
        <Button title={"Refresh"} cor="bg-green-700" onClick={()=> fecthData()} />
        <Button title={"Novo cadastro"} cor="bg-blue-500" onClick={()=>{setOverlay(true); setShowRegister(true)}} />
        </div>
      </div>
      <div className="flex flex-col gap-5 mx-auto justify-center p-4 pt-10 overflow-auto">
        {
          data.map((c, idx) => {
            return (
              <Linha_cadastro data={c} key={idx} fetch={fecthData} />
            )
          })
        }
      </div>
      {
        overlay && showRegister && (
          <div className="fixed gap-3 inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
            <button onClick={() => { setOverlay(false); setShowRegister(false) }} className="mt-4 bg-blue-600 font-bold text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
            > Fechar </button>
            <ModalEditeOrRegister data={null} update={false} fetch={fecthData} finish={() => { { setOverlay(false); setShowRegister(false) } }} />
          </div>
        )
      }
    </div>
  )
}