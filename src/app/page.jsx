import { Linha_cadastro } from "@/components/Linha_cadastro"

export default async function Home() {

  const response = await fetch('http://localhost:3001/cadastro/show');
  const data = await response.json();

  console.log(data)

  return (
    <div className="mt-10 mx-auto md:w-250">
      <h1 className="text-xl">Total de cadastros: <strong>{data.length}</strong></h1>
      <div className="flex flex-col gap-5 mx-auto justify-center p-4 pt-10 overflow-auto">
        {
          data.map((c, idx) => {
            return (
              <Linha_cadastro data={c} key={idx} />
            )
          })
        }

      </div>
    </div>
  )
}