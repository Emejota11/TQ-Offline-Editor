# TQ Offline Editor v1

Editor offline de partidas de **Titan Quest Anniversary Edition**, creado por **Emejota11** con ayuda de ChatGPT.

Permite editar oro, nivel, experiencia, puntos disponibles de atributos y habilidades, fuerza, inteligencia, destreza, salud y energia base. Incluye respaldo descargable, resumen de cambios e instrucciones integradas.

## Estado

La edicion de campos se ha probado con partidas de la version utilizada por el autor. No se garantiza compatibilidad con todas las versiones del juego. El envoltorio de Windows debe compilarse y probarse antes de publicar una version binaria.

## Uso

Cierra el juego, respalda la carpeta completa de tu personaje y abre su Player.chr. Descarga el respaldo original, ajusta los campos y guarda la copia editada. Coloca esa copia en la carpeta del personaje con el nombre exacto Player.chr. Revisa el resultado jugando.

Nivel y experiencia se editan por separado; no se calculan entre si ni conceden recompensas automaticamente. Los atributos son valores base y pueden diferir de los totales con equipo o habilidades. No modifica objetos, misiones ni portales. No sirve para editar mientras el juego esta abierto.

## Crear el EXE en Windows

Instala [Node.js LTS](https://nodejs.org/), extrae el proyecto y ejecuta `CREAR_EXE.cmd`. El ejecutable portable aparece en `dist/`. La primera compilacion descarga dependencias y necesita conexion. El programa final funciona offline, sin Node.js instalado en el equipo del usuario.

Alternativa desde terminal:

```sh
npm install
npm run verify
npm run dist
```

`npm start` abre la aplicacion en desarrollo. `app/index.html` tambien funciona por si solo en un navegador moderno. Tras instalar dependencias, conserva y publica `package-lock.json` para fijar sus versiones exactas. Este proyecto inicial resuelve las versiones disponibles al ejecutar la primera instalacion.

## GitHub

Sube el codigo fuente de este proyecto, no `node_modules`, `dist`, partidas `.chr` ni respaldos. Publica el EXE probado por separado en **Releases**. Se incluye un flujo manual de GitHub Actions para compilar en Windows: pestana Actions, `Build Windows EXE`, `Run workflow`; descarga el artefacto resultante y pruebalo antes de publicarlo.

## Creditos y recursos graficos

Created by **Emejota11** · Developed with assistance from **ChatGPT**.

Proyecto no oficial. No esta afiliado a THQ Nordic ni a OpenAI. Las marcas, logotipos e ilustraciones de Titan Quest pertenecen a sus titulares. Los recursos graficos suministrados como referencia se incluyen en la interfaz; su disponibilidad en internet no establece una licencia de redistribucion. Antes de hacer publico el proyecto, revisa los permisos de esos recursos o sustituyelos por recursos con licencia adecuada. No se otorga una licencia sobre recursos de terceros.

No se ha elegido aun una licencia de codigo para esta primera entrega. Antes de publicarlo como software de codigo abierto, el autor debe elegirla. Un repositorio publico por si solo no concede permiso para reutilizar el codigo.
