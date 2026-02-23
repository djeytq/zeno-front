'use client'
//modal para todos os formularios do projeto
import { Button } from "../Button"
import { URL_BASE } from "@/service/url"
import { useState } from "react"

export function ModalDetails({ data }) {

    return (
        <div className="bg-white p-8 rounded-xl shadow-2xl min-w-50 max-h-130 overflow-y-auto flex flex-col items-center gap-4">
            <h2 className="text-xl font-bold">Detalhes do Cadastro</h2>
            <div className="text-left w-full">
                <p><strong>Nome:</strong> {data.first_name + ' ' + data.last_name}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Phone:</strong> {data.phone}</p>
                <p><strong>Description:</strong> <br /> {data.description}</p>
            </div>
        </div>
    )
}

export function ModalDelete({ id, finish }) {
    async function Delete() {
        try {
            const response = await fetch(URL_BASE + `/cadastro/delete/${id}`,
                {
                    method: 'DELETE'
                }
            )
            
            const data = await response.json();
            console.log(data)
            finish()//fechar o modal
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-2xl min-w-50 h-50 overflow-y-auto flex flex-col items-center gap-4">
            <h2 className="text-xl font-bold">Deletar Cadastro!</h2>
            <div className="text-left w-full flex flex-col items-center gap-5">
                <p>Esta ação não poder ser desfeita!</p>
                <Button onClick={() => Delete()} title="Deletar" cor="bg-red-500" />
            </div>
        </div>
    )
}

export function ModalEditeOrRegister({ data, finish, update = true }) {
    const [first_name, setFirst_name] = useState(data.first_name || '');
    const [last_name, setLast_name] = useState(data.last_name || '');
    const [email, setEmail] = useState(data.email || '');
    const [phone, setPhone] = useState(data.phone || '');
    const [description, setDescription] = useState(data.description || '');

    async function submit() {
        //path dinamico para tornar possivel com que o modal sirva tanto para update e register
        const path = update ? `/cadastro/update/${data.id}` : '/cadastro/register' 
        try {
            const response = await fetch(URL_BASE + path,
                {
                    method: update ? 'PUT' : 'POST', //csaso updated for true entao escolhe o PUT como metodo
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({first_name, last_name, email, phone, description})
                }
            )
            
            const data = await response.json();
            console.log(data)

            finish && finish() //fechar o modal - se estiver nulll, false, ou undefined ... nao executa
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-2xl min-w-50 h-90 overflow-y-auto flex flex-col items-center gap-4">
            <h2 className="text-xl font-bold">
                {update ? 'Atualizar cadastro' : 'Registrar cadastro'}!
            </h2>
            <div className="text-left w-full flex flex-col items-center gap-5">
                <form className="flex flex-col gap-3">
                    <input className="bg-gray-200 p-2 rounded-lg outline-none focus:shadow-sm shadow-blue-500" type="text"  required  placeholder="Digite o primeiro nome" value={first_name} onChange={(e)=>setFirst_name(e.target.value) }/>
                    <input className="bg-gray-200 p-2 rounded-lg outline-none focus:shadow-sm shadow-blue-500" type="text"  required  placeholder="Digite o sobrenome" value={last_name} onChange={(e)=>setLast_name(e.target.value) }/>
                    <input className="bg-gray-200 p-2 rounded-lg outline-none focus:shadow-sm shadow-blue-500" type="email" required  placeholder="Digite o email" value={email} onChange={(e)=>setEmail(e.target.value) }/>
                    <input className="bg-gray-200 p-2 rounded-lg outline-none focus:shadow-sm shadow-blue-500" type="number"required  placeholder="Digite o numero de telefone" value={phone} onChange={(e)=>setPhone(e.target.value) }/>
                    <textarea className="bg-gray-200 p-2 rounded-lg outline-none focus:shadow-sm shadow-blue-500" type="number"required  placeholder="Digite o numero de telefone" value={description} onChange={(e)=>setDescription(e.target.value) }>

                    </textarea>
                </form>
                <Button onClick={()=>  submit() } type="submit" title="Enviar" cor="bg-green-700" />
            </div>
        </div>
    )
}