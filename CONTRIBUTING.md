# CONTRIBUTING.md

## Bienvenido a Gadmin Website

Somos una [Open Startup](https://github.com/gadminapp/.github/blob/main/ABOUT-OPEN-STARTUP.md), es decir que apuntamos a ser 100% transparentes.
Es por eso que a medida que crezcamos verás más y más proyectos de código abierto, simplemente queremos impulsar la industria compartiendo nuestras herramientas.

¡Nos alegra que quieras contribuir en este proyecto! Este documento te dará una guía con los pasos que necesitas para aportar tu valioso conocimiento a nuestro Sitio Web, 100% desarollado con Astro.

### Primeros pasos

1. **Familiarízate con Astro JS**: Si aún no lo has hecho, asegúrate de entender cómo funciona Astro JS. Puedes encontrar mucha información útil en [la documentación oficial de Astro](https://docs.astro.build).

2. **Configura tu entorno de desarrollo**: Recomendamos utilizar `pnpm` como gestor de paquetes por su eficiencia y rapidez. Si no tienes `pnpm` instalado, puedes hacerlo ejecutando `npm install -g pnpm`.

### Cómo contribuir 🛠

#### 1. Configura tu entorno

- **Crea tu fork**: Haz un "fork" del proyecto a tu cuenta de GitHub para tener tu propia copia. Para hacer esto, haz clic en el botón "Fork" en la parte superior derecha de la página del repositorio en GitHub. Esto creará una copia del repositorio en tu cuenta de GitHub.

¿No sabes qué es un fork? [Github te lo explica](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

- **Clona tu fork**: Después de hacer un fork, clona el repositorio a tu máquina local. Para hacerlo, copia la URL de tu fork haciendo clic en el botón verde "Code" y luego ejecuta `git clone <URL del fork>` en tu terminal.

- **Añade el repositorio original como remoto**: Para mantener tu fork actualizado con los cambios del repositorio original, agrega el repositorio original como un remoto. Puedes hacerlo ejecutando `git remote add upstream <URL del repositorio original>`.

- **Asegúrate de usar la versión de Node correcta**: Para ello, ejecuta `nvm use` o `nvm use <version>`, si no usas `nvm`, asegúrate de descargar la versión de Node detallada en `.node-version` o `.nvmrc`.

- **Instala las dependencias**: Navega hasta el directorio del proyecto clonado y ejecuta `pnpm install` para instalar todas las dependencias necesarias.

#### 2. Trabaja en tus cambios

- **Sincroniza el fork**: Puedes hacerlo desde `github.com/tu-usuario/tu-repositorio-de-gadmin-website` y haciendo click en `Sync fork`. También puedes hacerlo desde la terminal `gh repo sync -b main` o `git switch main && git fetch upstream && git merge upstream/main`.

Siempre puedes contar con la [documentación oficial de Github](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)

- **Crea una nueva rama**: Antes de empezar a trabajar en tus cambios, crea una nueva rama utilizando `git switch -c nombre-de-tu-rama`, te recomendamos seguir nuestras buenas prácticas para el nombre de las ramas.
- **Desarrolla tus cambios**: Implementa tus cambios o mejoras en tu rama local. Asegúrate de seguir las prácticas y estándares de código del proyecto.
- **Prueba tus cambios**: Ejecuta `pnpm dev` para iniciar el servidor de desarrollo de Astro y revisar tus cambios en el navegador.

#### 3. Envía tus cambios

- **Commit de tus cambios**: Una vez estés satisfecho con tus cambios, haz commit de ellos con un mensaje claro y descriptivo, recomendado leer acerca de [Commits Convencionales](https://www.conventionalcommits.org/es/v1.0.0/).
- **Push a tu fork**: Haz push de tu rama con los cambios a tu fork en GitHub utilizando `git push origin nombre-de-tu-rama`.
- **Crea un Pull Request (PR)**: En GitHub, ve a tu fork de `gadmin-website` y haz clic en "Pull request" para iniciar uno. Asegúrate de describir claramente qué cambios has realizado y por qué son necesarios o útiles para el proyecto.

### Buenas prácticas 🌟

- **Revisa los issues abiertos** antes de abrir un PR, si crees que puedes solucionarlo y no hay ningún otro PR abierto, usa `#numero-de-la-issue` en tu commit para que se añada a la issue. No está de más dejar algún comentario para que se sepa qué PR está trabajando para la issue.
- **Revisa los PRs abiertos** para asegurarte de que no estás trabajando en algo que ya está en progreso. Siempre puedes ayudar en PRs ya abiertos, aportando cambios, comentarios, revisiones, etc..
- **Mantén tus commits limpios y descriptivos** bajo las reglas de los [Commits Convencionales](https://www.conventionalcommits.org/es/v1.0.0/).
- **Sigue las convenciones de código del proyecto**.
- **Actualiza tu rama con frecuencia** para mantenerla al día con la rama principal del proyecto.
- **Participa en las discusiones** de tu PR si hay comentarios o sugerencias.

### Commits Convencionales

```
<tipo>(<ambito>): <breve resumen>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Ámbitos: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|
  │                          devtools
  │
  └─⫸ Tipos: build|ci|docs|feat|fix|perf|refactor|test
```

El `<tipo>` y `<breve resumen>` son obligatorios, el `(<ambito>)` es opcional.

#### Tipos

Deben ser uno de los siguientes:

- **build**: Cambios que afectan al sistema de construcción o dependencias externas (ejemplo: astro, npm, eslint)
- **ci**: Cambios en nuestros archivos y scripts de configuración de CI
- **docs**: Cambios únicamente en la documentación
- **feat**: Una nueva característica
- **fix**: Una corrección de errores
- **perf**: Un cambio de código que mejora el rendimiento
- **refactor**: Un cambio de código que ni corrige un error ni agrega una característica
- **test**: Agregar pruebas faltantes o corregir pruebas existentes

##### Resumen

El resumen debe dar una descripción sustancial del cambio:

- Always english.
- Use the imperative, present tense: "change" not "changed" nor "changes"
- No escribas un punto al final.

### Nomenclatura de ramas

Tenemos una convención para el nombre de las ramas según la implementación a realizar, este es el listado de los prefijos.

Ejemplo:

```
<tipo>/<nombre de rama>
  │       │
  │       │
  │       │
  │       └─⫸ Consejo: Procurar que sea corto y transmita lo que hace.
  │
  └─⫸ Tipos: feature|bugfix|refactor|perf|docs|test

=> feature/post-card-component
```

### ¿Necesitas ayuda? 🆘

Si tienes alguna pregunta o necesitas ayuda, no dudes en abrir un "issue" en el repositorio. Nuestro equipo y la comunidad estarán encantados de ayudarte.

¡Gracias por contribuir a Gadmin! Juntos estamos haciendo crecer la comunidad Open Source.
