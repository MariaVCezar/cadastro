export default async function university() {
    const response = await fetch("https://69165f6da7a34288a27d2bf4.mockapi.io/university");

    const listUniversity = await response.json();

    const rows = [];
    for (const university of listUniversity) {
        rows.push(
            <tr key={university.id} className="odd:bg-gray-50">
                <td className="px-4 py-2 border-b text-sm text-gray-700">{university.id}</td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">{university.abbreviation}</td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">{university.name}</td>
                 <td className="px-4 py-2 border-b">
                    <a href={`/university/delete/?id=${university.id}`} className="inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                        Excluir
                    </a>
                </td>    
            </tr>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-8">
            <h1 className="text-2xl font-semibold mb-4">Lista de Universidades</h1>

            <div className="overflow-x-auto">
                {listUniversity.length === 0 ? (
                    <div className="py-6 text-center text-gray-500">Nenhuma universidade encontrada.</div>
                ) : (
                    <table className="w-full table-auto border-collapse">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left px-4 py-2 text-sm font-medium text-gray-600">Id</th>
                                <th className="text-left px-4 py-2 text-sm font-medium text-gray-600">Abreviação</th>
                                <th className="text-left px-4 py-2 text-sm font-medium text-gray-600">Nome</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                )}
            </div>
        </div>
    );
}