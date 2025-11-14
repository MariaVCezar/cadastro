export default async function university() {

    const response = await fetch("https://69166e4da7a34288a27d5161.mockapi.io/student");

    const listStudent = await response.json();

    const rows = [];
    for (const student of listStudent) {
        rows.push(
            <tr key={student.id} className="odd:bg-gray-50">
                <td className="px-4 py-2 border-b text-sm text-gray-700">{student.id}</td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">{student.name}</td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">{student.email}</td>
                <td><a href={`/student/delete/?id=${student.id}`}>Excluir</a></td>
            </tr>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mt-8">
            <h1 className="text-2xl font-semibold mb-4">Lista de Estudantes</h1>

            <div className="overflow-x-auto">
                {listStudent.length === 0 ? (
                    <div className="py-6 text-center text-gray-500">Nenhum estudante encontrado.</div>
                ) : (
                    <table className="w-full table-auto border-collapse">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left px-4 py-2 text-sm font-medium text-gray-600">Id</th>
                                <th className="text-left px-4 py-2 text-sm font-medium text-gray-600">Nome</th>
                                <th className="text-left px-4 py-2 text-sm font-medium text-gray-600">Email</th>
                                
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </table>
                )}
            </div>
        </div>
    );
}