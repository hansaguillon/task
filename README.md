# Task Manager App 📝

## Tabla de Contenidos
1. [Descripción](#descripción)
2. [Características](#características)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Instalación](#instalación)
5. [Uso](#uso)
6. [Despliegue](#despliegue)
7. [Activación del Backend](#activación-del-backend)
8. [Contribuciones](#contribuciones)
9. [Contacto](#contacto)

---

## Descripción
**Task Manager App** es una aplicación Full Stack para la gestión de tareas. Permite a los usuarios crear, editar y eliminar tareas, con una interfaz intuitiva y un backend que garantiza rendimiento y seguridad.  

**Estado del Proyecto**: En desarrollo activo con nuevas funcionalidades en progreso.  

---

## Características
- **Gestión Completa de Tareas**: Crear, editar y eliminar tareas fácilmente.
- **Validación de Datos**: Validaciones en tiempo real para entradas obligatorias.
- **Diseño UI/UX Moderno**:
  - Componentes visuales de Ant Design.
  - Iconos interactivos con React Icons.
- **Feedback Visual**: Notificaciones para interacciones exitosas y errores.

---

## Tecnologías Utilizadas

### Frontend
- React
- Vite
- Ant Design
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB

---

### Instalación

#### Clona el repositorio
```bash
git clone https://github.com/hansaguillon/task.git
cd task
```

#### Instala las dependencias
```bash
npm install
```

#### Configura el backend
Asegúrate de tener las variables de entorno necesarias configuradas en un archivo `.env`.

#### Inicia la aplicación en modo desarrollo
```bash
npm run dev
```

#### Accede al frontend
Abre [http://localhost:5137](http://localhost:5137) en tu navegador.

---

### Uso
1. **Crear Tarea**: Completa el título y, opcionalmente, la descripción. Haz clic en 'Agregar'.
2. **Editar Tarea**: Selecciona una tarea y modifica sus detalles.
3. **Eliminar Tarea**: Utiliza el icono de basura 🗑️ para borrar tareas.

---

### Despliegue
El proyecto está desplegado en las siguientes plataformas:
- **Frontend**: [Task Manager App en Vercel](https://task-five-pink-81.vercel.app/)
- **Backend**: [API de Tareas en Render](https://apitask-ixqf.onrender.com/task)

---

### Activación del Backend
Debido al comportamiento de Render, el backend entra en estado de hibernación cuando no está en uso. Para garantizar el correcto funcionamiento de la aplicación:

1. Accede a la URL del backend en Render:
   ```bash
   https://apitask-ixqf.onrender.com/task
   ```
2. Una vez que la página cargue, el backend estará activo y podrás utilizar el frontend normalmente.

---

### Contribuciones
¡Las contribuciones son bienvenidas!

1. Haz un fork del proyecto.
2. Crea una rama con tu funcionalidad:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y sube el commit:
   ```bash
   git commit -m 'Descripción breve de la funcionalidad'
   ```
4. Envía un Pull Request explicando tu contribución.

---

### Contacto
📧 **Email**: hansaguillon@gmail.com  
🌐 **LinkedIn**: [Juan Pedro Aguillón](https://www.linkedin.com/in/juanpedroaguillon/)
