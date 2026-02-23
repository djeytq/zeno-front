'use client'
import { Linha_cadastro } from "@/components/Linha_cadastro"
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([])
  async function fecthData() {
    const response = await fetch('http://localhost:3001/cadastro/show');
     const data_json = await response.json();
     setData(data_json)

  }
  useEffect(()=>{
    fecthData()
  }, [])

  return (
    <div className="mt-10 mx-auto md:w-250">
      <h1 className="text-xl">Total de cadastros: <strong>{data.length}</strong></h1>
      <div className="flex flex-col gap-5 mx-auto justify-center p-4 pt-10 overflow-auto">
        {
          data.map((c, idx) => {
            return (
              <Linha_cadastro data={c} key={idx} fetch={fecthData} />
            )
          })
        }

      </div>
    </div>
  )
}