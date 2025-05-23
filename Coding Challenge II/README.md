
# 1. Challenge I: FE - Lista de Tareas (To-Do List)
## Instrucciones

Vas a construir una **aplicación simple de lista de tareas** usando React.
La aplicación debe cumplir los siguientes requisitos:

## Requerimientos

1. **Lista de tareas**
   - Muestra una lista de tareas.
   - Al iniciar, la lista debe estar vacía.

2. **Agregar tarea**
   - Incluye un input de texto y un botón para agregar una nueva tarea.
   - **No debe ser posible agregar tareas vacías** (debe validarse).
   - Al agregar, la tarea se muestra en la lista y el input se limpia.

3. **Eliminar tarea**
   - Cada tarea en la lista debe tener un botón para eliminarla.

4. **Estado local**
   - Utiliza únicamente el hook `useState` para manejar las tareas.

5. **UI básica**
   - No se requiere diseño avanzado. Solo debe ser clara y funcional.

## Extras opcionales (si tienes tiempo)

- Mostrar un mensaje si la lista está vacía (“No hay tareas pendientes”).
- Mostrar un contador de tareas pendientes.

## Notas
- Se recomienda usar vite y tailwind para el desarrollo.
- Puedes usar cualquier librería de UI que desees, pero no es obligatorio.
- El objetivo principal es evaluar claridad de código, manejo de estado y buenas prácticas.
- No necesitas usar librerías externas ni preocuparte por el diseño visual.

**Tiempo estimado: 20 minutos**

---

# 2. Challenge II: BE - NestJS + MongoDB

## Requisitios
1. Node.js
2. MongoDB

## Instalación
1. Instalar dependencias: `npm install`
2. Levantar MongoDB localmente
3. Ejecutar el servidor en modo desarrollo: `npm run dev`

## Objetivo
Implementar los endpoints en `products.service.ts` para:
1. Crear DTO
   - Crear un DTO para el modelo de producto con las propiedades `nombre`, `precio`, `categoría` y `stock`.
2. Implementar los endpoints en `products.service.ts` para:
   - Crear un producto con `nombre`, `precio`, `categoría` y `stock`.
   - Obtener la lista de productos filtrados por **categoría** y **rango de precio**.
3. Validar que el precio no sea negativo y que el stock sea mayor o igual a 0.

**Tiempo estimado: 45 minutos**