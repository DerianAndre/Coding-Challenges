
# 1. Challenge I: Ract: Validación de input

## Objetivo
1. Escribe una función que valide un email:
- El email debe tener un formato válido (usuario@dominio.com).
- El email debe contener al menos 10 caracteres.
2. Crear un input field que utilice la función de validación
3. Si el input no es válido que tenga un borde rojo de lo contrario un borde verde.

**Tiempo máximo estimado: 30 minutos**

# 2. Challenge II: NestJS + MongoDB

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

**Tiempo máximo estimado: 1 hora**
