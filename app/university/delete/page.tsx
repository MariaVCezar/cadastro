
"use client"

import { useSearchParams } from "next/navigation"

export default function DeleteUniversity() {

    const id= useSearchParams().get('id');

    async function deleteUniversity() {
        console.log("Acessou")
        await fetch(`https://69165f6da7a34288a27d2bf4.mockapi.io/university/${id}`,
            {
                method: "DELETE"
            }
        )
    }
    return (
        <div>
            <h1>Confirmar Exclusão?</h1>
            <button onClick={deleteUniversity}>Confirmr</button>
        </div>
    )
}
