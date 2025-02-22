# 1. Challenge I: Password validation

## Objetivo
Escribe una función en Node.js que valide si una contraseña cumple con los siguientes requisitos:
- Debe tener al menos 8 caracteres.
- Debe contener al menos una letra mayúscula.
- Debe contener al menos un número.
- No puede contener espacios en blanco.

**Tiempo máximo: 20 minutos**

# 2. Challenge II: NestJS + MongoDB

## Requisitios
1. Node.js
2. MongoDB

## Instalación
1. Instalar dependencias: `npm install`
2. Levantar MongoDB localmente
3. Ejecutar el servidor en modo desarrollo: `npm run dev`

## Objetivo
1. Crear el DTO
   - Crear un DTO para el modelo de usuario con las propiedades `name`, `email` y `password`.
2. Implementar los endpoints en `users.service.ts` para:
  - Crear un usuario con nombre, email y contraseña hasheada.
  - Obtener la lista de usuarios registrados.
3. Implementar el la función que valida la contraseña en `users.service.ts`.

**Tiempo máximo: 1 hora**
