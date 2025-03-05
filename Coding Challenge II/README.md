
# 1. Challenge I: Validación de Emails y Formato de Nombres

## Objetivo
Escribe una función en Node.js que valide si un email y un nombre cumplen con los siguientes requisitos:
- El email debe tener un formato válido (usuario@dominio.com).
- El nombre debe empezar con mayúscula y no puede contener números ni caracteres especiales.
- El nombre no puede tener más de 50 caracteres.

**Tiempo estimado: 20 minutos**

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

**Tiempo estimado: 1 hora**