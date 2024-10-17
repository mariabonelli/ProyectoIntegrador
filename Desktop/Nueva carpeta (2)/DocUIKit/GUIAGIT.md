# Guía Metodológica de Trabajo en GitHub

## Introducción

Esta guía detalla el flujo de trabajo en GitHub para un equipo organizado en 6 tribus, cada una con sus propias ramas y un proceso de integración continuo. Se enfatiza el uso de comandos `git pull origin <nombre de la rama>` para mantener las ramas actualizadas.

## Estructura del Repositorio

| Rama                    | Descripción                                                            |
| ----------------------- | ---------------------------------------------------------------------- |
| **main**                | Contiene el código base estable y productivo.                          |
| **DevOps**              | Integra las funcionalidades de todas las tribus antes de pasar a main. |
| **Rama por tribu**      | Cada tribu tiene su propia rama (ej., oneBits, Patidevps).             |
| **Rama por integrante** | Cada miembro de una tribu tiene su propia rama (ej., `usuario-juan`).  |

## Flujo de Trabajo por Sprint

### Inicio de Sprint

- Cada miembro crea una nueva rama a partir de la rama de su tribu:
  ```bash
  git checkout -b miembre-de-tribu origin/oneBits
  ```

#### Hace lo siguiente:

- git checkout -b miembre-de-tribu: Crea y cambia a una nueva rama llamada miembre-de-tribu. El -b indica que se debe crear la nueva rama si aún no existe.
- origin/oneBits: Especifica que la nueva rama se debe basar en la rama remota oneBits (almacenada en el remoto origin). Esto asegura que la nueva rama se crea con el historial y el contenido actualizado de oneBits.

### Desarrollo

- Los desarrolladores trabajan en sus respectivas ramas.
- Se realizan commits frecuentes con mensajes claros y concisos ademas de la fecha.
- Se mantienen las ramas actualizadas con la rama de la tribu utilizando:
  ```bash
  git pull origin <nombre_de_la_tribu>
  ```

### Fin de Sprint

1. Cada miembro crea un Pull Request (PR) hacia la rama de su tribu.
2. Revisión por pares del código y discusión de los cambios propuestos.
3. Una vez aprobados los PRs, se fusionan en las ramas de las tribus.

### Reunión de Integración

- Revisión del trabajo de cada tribu.
- Identificación y resolución de posibles conflictos.
- Actualización de la rama DevOps con los cambios de cada tribu:
  ```bash
  git checkout DevOps
  git pull origin DevOps
  git merge oneBits
  git merge Patidevps
  ...
  git push origin DevOps
  ```

### Pruebas y Evaluación

- Se realizan pruebas exhaustivas en la rama DevOps.
- Si las pruebas son exitosas, se procede a la siguiente fase.

### Fusión a main

- Se fusiona la rama DevOps en la rama main:
  ```bash
  git checkout main
  git pull origin main
  git merge DevOps
  git push origin main
  ```

## Comandos Clave

| Acción                                  | Comando                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------- |
| **Crear una nueva rama**                | `git checkout -b nombre_de_la_rama`                                       |
| **Cambiar a una rama existente**        | `git checkout nombre_de_la_rama`                                          |
| **Actualizar una rama local**           | `git pull origin nombre_de_la_rama`                                       |
| **Realizar un commit**                  | `bash<br>git add .<br>git commit -m "Mensaje claro y conciso del commit"` |
| **Fusionar una rama**                   | `git merge nombre_de_la_rama_a_fusionar`                                  |
| **Subir cambios al repositorio remoto** | `git push origin nombre_de_la_rama`                                       |
| **Crear un Pull Request**               | (Se realiza a través de la interfaz web de GitHub)                        |

## Ejemplo Completo

Supongamos que Juan de la tribu _oneBits_ quiere trabajar en una nueva funcionalidad. Los pasos serían:

1. **Crear una nueva rama**:

   ```bash
   git checkout -b feature/nueva-funcionalidad origin/oneBits
   ```

2. **Desarrollar la funcionalidad**:

   ```bash
   # ... Codificar ...
   git add .
   git commit -m "Implementa nueva funcionalidad de usuario dd/MM/YY"
   ```

3. **Actualizar su rama local**:

   ```bash
   git pull origin oneBits
   ```

4. **Al finalizar**, crear un PR hacia _oneBits_ y fusionarlo tras la revisión.

5. **Al final del sprint**, el líder de _oneBits_ fusiona todos los cambios en _oneBits_ y luego se actualiza _DevOps_:
   ```bash
   git checkout DevOps
   git pull origin DevOps
   git merge oneBits
   git push origin DevOps
   ```
