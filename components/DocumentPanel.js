function DocumentPanel() {
  try {
    const [documents] = React.useState([
      { id: 1, name: 'Reporte Mensual.pdf', status: 'Completado', lastModified: '2025-11-20' },
      { id: 2, name: 'Propuesta Proyecto.docx', status: 'En Revisión', lastModified: '2025-11-22' },
      { id: 3, name: 'Análisis Datos.xlsx', status: 'Pendiente', lastModified: '2025-11-25' },
      { id: 4, name: 'Presentación Cliente.pptx', status: 'Completado', lastModified: '2025-11-18' },
      { id: 5, name: 'Manual Usuario.pdf', status: 'En Progreso', lastModified: '2025-11-24' }
    ]);

    const getStatusColor = (status) => {
      switch (status) {
        case 'Completado': return 'bg-green-100 text-green-800';
        case 'En Revisión': return 'bg-yellow-100 text-yellow-800';
        case 'Pendiente': return 'bg-red-100 text-red-800';
        case 'En Progreso': return 'bg-blue-100 text-blue-800';
        default: return 'bg-gray-100 text-gray-800';
      }
    };

    return (
      <div className="bg-white rounded-lg p-6 shadow-lg" data-name="document-panel" data-file="components/DocumentPanel.js">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Panel de Documentos</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-bold">Nombre del Documento</th>
                <th className="text-left p-3 font-bold">Estado</th>
                <th className="text-left p-3 font-bold">Última Modificación</th>
              </tr>
            </thead>
            <tbody>
              {documents.map(doc => (
                <tr key={doc.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center">
                      <div className="icon-file-text text-lg text-blue-600 mr-2"></div>
                      {doc.name}
                    </div>
                  </td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusColor(doc.status)}`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="p-3 text-gray-600">{doc.lastModified}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DocumentPanel error:', error);
    return null;
  }
}
