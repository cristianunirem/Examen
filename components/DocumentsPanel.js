function DocumentsPanel() {
  try {
    const documents = [
      { id: 1, name: 'Reporte Mensual.pdf', status: 'Completado', date: '2025-11-20' },
      { id: 2, name: 'Análisis de Datos.xlsx', status: 'En Proceso', date: '2025-11-25' },
      { id: 3, name: 'Presentación Q4.pptx', status: 'Pendiente', date: '2025-11-18' },
      { id: 4, name: 'Manual Usuario.docx', status: 'Completado', date: '2025-11-22' }
    ];

    const getStatusColor = (status) => {
      switch (status) {
        case 'Completado': return 'bg-green-500';
        case 'En Proceso': return 'bg-yellow-500';
        case 'Pendiente': return 'bg-red-500';
        default: return 'bg-gray-500';
      }
    };

    return (
      <div className="bg-white bg-opacity-90 backdrop-blur p-6 rounded-lg shadow-lg" data-name="documents-panel" data-file="components/DocumentsPanel.js">
        <h3 className="text-xl font-bold mb-4">Documentos Recientes</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Documento</th>
                <th className="text-left py-3 px-4">Estado</th>
                <th className="text-left py-3 px-4">Última Modificación</th>
              </tr>
            </thead>
            <tbody>
              {documents.map(doc => (
                <tr key={doc.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 flex items-center gap-2">
                    <div className="icon-file-text text-blue-600"></div>
                    {doc.name}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`${getStatusColor(doc.status)} text-white px-3 py-1 rounded-full text-sm`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{doc.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DocumentsPanel component error:', error);
    return null;
  }
}