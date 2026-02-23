import Link from "next/link"

export function Header(){

    return(
        <header className="w-full h-20 bg-gray-700 flex items-center justify-between px-5">
            <div className="logo text-red-500 font-bold text-4xl">Zeno</div>
            <ul className="flex gap-5 items-center text-white">
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/dashboard">Dashboard</Link>
            </ul>
        </header>
    )
}