# Documentación 

## Api de compra de tickets

Api creada en nodejs


## Diagrama de dominio

![diagrama de dominio](https://github.com/lyespinosa/api-mantenimiento/assets/65049169/5985065a-ce62-43b7-83d3-1c3b1629d830)

## Endpoints

### Obtener Destinos del Día


- **Descripción:** Obtiene la lista de destinos del día.
- **Ruta:** `GET /destinos-dia`
- **Respuesta Exitosa:**
  - Código: 200 OK
  - Ejemplo de respuesta:
    ```json
    [
      {
        "id": 1,
        "nombre": "Tuxtla Gutierrez"
      },
      {
        "id": 2,
        "nombre": "San Cristobal"
      }
      // ... otros destinos
    ]
    ```

### Obtener Lista de Vehículos

- **Descripción:** Obtiene la lista de vehículos disponibles.
- **Ruta:** `GET /vehiculos`
- **Respuesta Exitosa:**
  - Código: 200 OK
  - Ejemplo de respuesta:
    ```json
    [
      {
        "id": 1,
        "capacidad": 50
      },
      {
        "id": 2,
        "capacidad": 40
      }
      // ... otros vehículos
    ]
    ```

### Obtener Detalles de un Vehículo

- **Descripción:** Obtiene los detalles de un vehículo específico.
- **Ruta:** `GET /vehiculos/:id`
- **Parámetros de Ruta:**
  - `id`: Identificador del vehículo
- **Respuesta Exitosa:**
  - Código: 200 OK
  - Ejemplo de respuesta:
    ```json
    {
      "id": 1,
      "capacidad": 50
    }
    ```

### Obtener Lista de Pagos

- **Descripción:** Obtiene la lista de pagos registrados.
- **Ruta:** `GET /pagos`
- **Respuesta Exitosa:**
  - Código: 200 OK
  - Ejemplo de respuesta:
    ```json
    [
      {
        "id": 1,
        "monto": 100,
        "vehiculo_id": 1
      },
      {
        "id": 2,
        "monto": 150,
        "vehiculo_id": 2
      }
      // ... otros pagos
    ]
    ```

### Crear un Pago

- **Descripción:** Crea un nuevo registro de pago.
- **Ruta:** `POST /pagos`
- **Cuerpo de la Solicitud:**
  - Formato JSON con las siguientes propiedades:
    - `monto`: Monto del pago.
    - `vehiculo_id`: Identificador del vehículo asociado al pago.
- **Respuesta Exitosa:**
  - Código: 200 OK
  - Ejemplo de respuesta:
    ```json
    {
      "mensaje": "Pago creado exitosamente"
    }
    ```

---

## Tecnologías Utilizadas:

### Lenguajes de Programación:
- JavaScript (Node.js)

### Frameworks:
- Express.js (para el desarrollo del servidor)

### Base de Datos:
- SQLite (relacional)

### Herramientas Adicionales:
- `sqlite3` (para la interacción con la base de datos)
- `body-parser` (para el manejo de datos JSON en las solicitudes)

---

## Configuración y Requisitos del Entorno:

### Requisitos del Entorno:
- Node.js instalado (versión recomendada: 12.x o superior)
- npm (administrador de paquetes de Node.js)

### Configuración Local:
1. **Clona el repositorio desde GitHub:**
    ```bash
    git clone https://github.com/lyespinosa/api-mantenimiento
    ```
2. **Ingresa al directorio del proyecto:**
    ```bash
    cd api-mantenimiento
    ```
3. **Instala las dependencias:**
    ```bash
    npm install
    ```
4. **Inicia la aplicación:**
    ```bash
    npm start
    ```
5. **Accede a la aplicación desde tu navegador:**
    - `http://localhost:3000` (o el puerto configurado)

---

## Instrucciones de Implementación:

### Pasos para Implementar el Proyecto:

1. **Clonar el Repositorio:**
    ```bash
    git clone https://github.com/lyespinosa/api-mantenimiento
    ```

2. **Ingresar al Directorio del Proyecto:**
    ```bash
    cd tu-proyecto
    ```

3. **Instalar Dependencias:**
    ```bash
    npm install
    ```

4. **Configurar la Base de Datos:**
    - La aplicación utiliza SQLite, por lo que no es necesario configurar un servidor de base de datos. La base de datos se crea automáticamente en memoria al iniciar la aplicación.

5. **Iniciar la Aplicación:**
    ```bash
    npm start
    ```

6. **Acceder a la Aplicación:**
    - Abre tu navegador web y visita: `http://localhost:3000` (o el puerto configurado)

---
