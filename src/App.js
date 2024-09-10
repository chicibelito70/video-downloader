import React, { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState('mp4');
  const [isLoading, setIsLoading] = useState(false);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setDownloadLink(null);

    // Notificación de inicio de descarga
    toast.info('Iniciando descarga del video...');

    try {
      const response = await fetch('http://localhost:5000/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, format }),
      });

      const data = await response.json();

      if (response.ok) {
        // Notificación de éxito
        toast.success('Video descargado con éxito!');
        setDownloadLink(data.downloadUrl);
      } else {
        // Notificación de error
        toast.error('Error al descargar el video.');
      }
    } catch (error) {
      console.error('Error al descargar el video:', error);
      toast.error('Ocurrió un error inesperado.');
    }

    setIsLoading(false);
  };

  return (
    <div className="App">
      <h1>Descargar Videos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          URL del Video:
          <input
            type="text"
            value={url}
            onChange={handleUrlChange}
            placeholder="Pega el enlace aquí"
            required
          />
        </label>
        <label>
          Formato de descarga:
          <select value={format} onChange={handleFormatChange}>
            <option value="mp4">MP4</option>
            <option value="avi">AVI</option>
            <option value="mov">MOV</option>
            <option value="wmv">WMV</option>
          </select>
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Descargando...' : 'Descargar Video'}
        </button>
      </form>

      {downloadLink && (
        <div>
          <h3>Tu video está listo:</h3>
          <a href={downloadLink} download>
            Descargar video
          </a>
        </div>
      )}

      {/* Contenedor para las notificaciones */}
      <ToastContainer />
    </div>
  );
}

export default App;
