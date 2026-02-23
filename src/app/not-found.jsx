import Link from "next/link"

export default function notFound(){

    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-20">Pagine 404 Not Found</h1>
            <p>This page that try to access does nott exist</p>
            <Link href="/" className="text-blue-500">voltar para home</Link>
        </div>
    )
}