# Video Downloader

Este es un proyecto de descarga de videos desde plataformas como YouTube, Facebook, e Instagram. Permite que los usuarios ingresen un enlace de video, seleccionen un formato de descarga (MP4, AVI, MOV, WMV) y obtengan el video convertido. El frontend está desarrollado en **React** y el backend en **Node.js** usando **yt-dlp** y **ffmpeg** para manejar las descargas y conversiones.

## Características

- Permite pegar el enlace de un video de plataformas populares.
- Los usuarios pueden seleccionar el formato en el que desean descargar el video.
- Notificaciones animadas que indican el estado de la descarga.
- Conversión de videos usando `yt-dlp` y `ffmpeg`.

## Requisitos previos

- **Node.js** y **npm**
- **yt-dlp** instalado en el sistema.
- **ffmpeg** instalado en el sistema.

### Instalación de yt-dlp:

Para instalar **yt-dlp** en tu sistema:

```bash
pip install yt-dlp
```

### Instalación de ffmpeg:

- Descarga ffmpeg desde [aquí](https://ffmpeg.org/download.html).
- Sigue las instrucciones para agregarlo a tu variable de entorno del sistema.

## Instalación y configuración del proyecto

### Backend (Node.js)

1. Clona este repositorio.
   
2. Navega al directorio del backend:

   ```bash
   cd video-downloader-backend
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta el servidor:

   ```bash
   node server.js
   ```

5. El servidor backend estará ejecutándose en `http://localhost:5000`.

### Frontend (React)

1. Navega al directorio del frontend:

   ```bash
   cd video-downloader
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm start
   ```

4. El frontend estará disponible en `http://localhost:3000`.

### Conectar el Frontend con el Backend

El frontend ya está configurado para enviar las solicitudes al backend en `http://localhost:5000`. Asegúrate de que ambos servidores (frontend y backend) estén ejecutándose.

## Uso del proyecto

1. Pega un enlace de video (de plataformas como YouTube, Facebook, Instagram).
2. Selecciona el formato de descarga (MP4, AVI, MOV, WMV).
3. Haz clic en "Descargar Video" para iniciar la descarga.
4. Recibirás notificaciones animadas sobre el estado de la descarga (inicio, éxito o error).
5. Al finalizar la descarga, se mostrará un enlace para descargar el video.

## Dependencias principales

### Backend
- **Express**: Framework web para Node.js.
- **yt-dlp**: Herramienta de descarga de videos.
- **ffmpeg**: Conversión de videos a diferentes formatos.

### Frontend
- **React**: Librería de JavaScript para construir interfaces de usuario.
- **react-toastify**: Para mostrar notificaciones animadas.

## Personalización

Puedes personalizar este proyecto agregando más formatos de video, mejorando la interfaz de usuario o implementando nuevas funcionalidades como la descarga de solo audio. Si deseas cambiar la apariencia de las notificaciones o añadir más detalles a las mismas, puedes modificar las opciones de **react-toastify** en el archivo `App.js`.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usar, modificar y distribuir el código según los términos de esta licencia.