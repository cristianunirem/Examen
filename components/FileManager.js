function FileManager() {
  try {
    const [files, setFiles] = React.useState([
      { id: 1, name: 'Proyecto_Final.pdf', size: '2.4 MB', date: '2025-11-20', type: 'pdf' },
      { id: 2, name: 'Presentacion.pptx', size: '5.1 MB', date: '2025-11-22', type: 'pptx' },
      { id: 3, name: 'Datos_Analisis.xlsx', size: '1.8 MB', date: '2025-11-25', type: 'xlsx' },
      { id: 4, name: 'Imagen_Banner.png', size: '890 KB', date: '2025-11-18', type: 'image' }
    ]);

    const handleUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const newFile = {
          id: files.length + 1,
          name: file.name,
          size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
          date: new Date().toISOString().split('T')[0],
          type: file.type.includes('image') ? 'image' : file.name.split('.').pop()
        };
        setFiles([newFile, ...files]);
      }
    };

    const handleDownload = (fileName) => {
      alert(`Descargando archivo: ${fileName}`);
    };

    const handleDelete = (id) => {
      if (confirm('¿Estás seguro de eliminar este archivo?')) {
        setFiles(files.filter(file => file.id !== id));
      }
    };

    const getFileIcon = (type) => {
      if (type === 'pdf') return 'file-text';
      if (type === 'image' || type === 'png' || type === 'jpg') return 'image';
      if (type === 'xlsx' || type === 'xls') return 'file-spreadsheet';
      if (type === 'pptx') return 'presentation';
      return 'file';
    };

    return (
      <div className="bg-white bg-opacity-90 backdrop-blur p-6 rounded-lg shadow-lg" data-name="file-manager" data-file="components/FileManager.js">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Gestor de Archivos</h2>
          <label className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 flex items-center gap-2">
            <div className="icon-upload text-lg"></div>
            <span className="font-bold">Subir Archivo</span>
            <input type="file" onChange={handleUpload} className="hidden" />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {files.map(file => (
            <div key={file.id} className="bg-white border rounded-lg p-4 hover:shadow-lg transition">
              <div className="flex items-center justify-between mb-3">
                <div className={`icon-${getFileIcon(file.type)} text-3xl text-blue-600`}></div>
                <button onClick={() => handleDelete(file.id)} className="text-red-500 hover:text-red-700">
                  <div className="icon-trash-2 text-lg"></div>
                </button>
              </div>
              <h3 className="font-bold text-sm mb-2 truncate" title={file.name}>{file.name}</h3>
              <p className="text-xs text-gray-600 mb-1">{file.size}</p>
              <p className="text-xs text-gray-500 mb-3">{file.date}</p>
              <button onClick={() => handleDownload(file.name)} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 flex items-center justify-center gap-2">
                <div className="icon-download text-sm"></div>
                <span className="text-sm">Descargar</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('FileManager component error:', error);
    return null;
  }
}