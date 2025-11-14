
"use client"

import { useSearchParams } from "next/navigation"

export default function DeleteStudent() {

    const id= useSearchParams().get('id');

    async function deleteStudent() {
        console.log("Acessou")
        await fetch(`https://69166e4da7a34288a27d5161.mockapi.io/student/${id}`,
            {
                method: "DELETE"
            }
        )
    }
    return (
        <div>
            <h1>Confirmar Exclusão?</h1>
            <button onClick={DeleteStudent}>Confirmr</button>
        </div>
    )
}
