## Documentación Api de compra de tickets

Api creada en nodejs

#Endpoints

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
