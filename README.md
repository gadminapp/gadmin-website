<a name="readme-top"></a>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<a href="https://github.com/gadminapp/gadmin-website" style="display: flex;align-items: center;justify-content: center">
  <img src="https://raw.githubusercontent.com/gadminapp/gadmin-website/main/src/assets/img/min.webp" alt="Min" width="300" />
  <img width="250" src="https://raw.githubusercontent.com/gadminapp/gadmin-website/main/src/assets/img/logo-bg.webp" alt="Logo" />
</a>

## Web oficial de Gadmin

Gadmin es un SaaS que facilita a empresas y emprendedores la creación de su tienda online en menos de 5 minutos.\
[Figma](https://www.figma.com/file/JlsnAPGeCbc1bcXauYnFiB/Gadmin-UI-Kit?type=design&node-id=245%3A3354&mode=design&t=RqoR7tgXNBKKxaHe-1) · [Reportar error](https://github.com/gadminapp/gadmin-website/issues) · [Sugerir algo](https://github.com/gadminapp/gadmin-website/issues)

</div>

<details>
<summary>Tabla de contenidos</summary>

- [Web oficial de Gadmin](#web-oficial-de-gadmin)
- [Características principales](#características-principales)
- [Para empezar](#para-empezar)
  - [Prerequisitos](#prerequisitos)
  - [Instalación](#instalación)
- [Contribuir al proyecto](#contribuir-al-proyecto)
  - [Contribuir desde Stackblitz](#contribuir-desde-stackblitz)
- [🛠️ Stack](#️-stack)

</details>

## Características principales

- **Landing**: La página principal es la de aterrizaje, enfocada en hacerle saber a nuestros clientes potenciales que somos su mejor opción.
- **Blog**: Publicamos información de valor para nuestros clientes e información de lo que Gadmin está logrando como una Open Startup.
- **Open**: Creemos en el poder de la transparencia y cómo esta puede impulsar a potenciales emprendedores u otras startups, por eso somos una Open Startup.
- **Redes sociales**: Compartimos todas las redes sociales de Gadmin para mantener a todos al tanto de lo que estamos haciendo.
- **Secciones Legales**: Términos y Condiciones, Política de Privacidad y otras páginas relacionadas.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Para empezar

### Prerequisitos

- NVM (recomendado para asegurar versión de Node) ver [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

  ```sh
  nvm use
  # o
  nvm use <version>
  ```

  > Si quieres automatizar el proceso, puedes crear un script siguiendo la [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

<details>
	<summary>Pequeño script de automatización</summary>
	
- For Linux/MacOS:
	```sh
	# .bashrc | .zshrc | cualquier archivo de configuración
	# pequeño script para cambiar de version al entrar al directorio
	cd() {
  builtin cd "$@"
		if [[ -f .nvmrc ]]; then
			nvm use > /dev/null
			# Si quieres que te diga la versión
			nvm use
		fi
	}
	```

- For Windows:

  ```powershell
  # $PROFILE
  function Change-Node-Version {
  	param($path)
  	& Set-Location $path
  	$pwd = pwd
  	if ( Test-Path "$pwd\\.nvmrc" ) {
  		$version = Get-Content .nvmrc
  		nvm use $version
  	}
  }
  New-Alias -Name cd -Value Change-Node-Version -Force -Option AllScope
  ```

  </details>

- PNPM (es nuestra recomendación por su eficiencia y rapidez)

  ```sh
  npm install -g pnpm
  ```

- o NPM

  ```sh
  npm install npm@latest -g
  ```

### Instalación

1. Clona el repositorio

   ```sh
   git clone https://github.com/gadminapp/gadmin-website.git
   ```

2. Instala los paquetes de NPM

   ```sh
   pnpm install
   ```

3. Ejecuta el proyecto

   ```sh
   pnpm dev
   ```

   ```sh
   pnpm start
   ```

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Contribuir al proyecto

Las contribuciones son lo que hacen que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. ¡Cualquier contribución que hagas es **muy apreciada**!

Si tienes alguna sugerencia que podría mejorar el proyecto, por favor haz un [_fork_](https://github.com/gadminapp/gadmin-website/fork) del repositorio y crea una [_pull request_](https://github.com/gadminapp/gadmin-website/pulls). También puedes simplemente abrir un [_issue_](https://github.com/gadminapp/gadmin-website/issues) con la etiqueta "enhancement".

Aquí tienes una guía rápida:

1. Haz un [_fork_](https://github.com/gadminapp/gadmin-website/fork) del Proyecto
2. Clona tu [_fork_](https://github.com/gadminapp/gadmin-website/fork) (`git clone <URL del fork>`)
3. Añade el repositorio original como remoto (`git remote add upstream <URL del repositorio original>`)
4. Crea tu Rama de Funcionalidad (`git switch -c feature/CaracteristicaIncreible`)
5. Realiza tus Cambios (`git commit -m 'Add: alguna CaracterísticaIncreible'`)
6. Haz Push a la Rama (`git push origin feature/CaracteristicaIncreible`)
7. Abre una [_pull request_](https://github.com/gadminapp/gadmin-website/pulls)

Por favor, consulta nuestra [guía de contribución](https://github.com/gadminapp/gadmin-website/blob/main/CONTRIBUTING.md) para saber cómo puedes empezar de la mejor manera y siguiendo [buenas prácticas](https://github.com/gadminapp/gadmin-website/blob/main/CONTRIBUTING.md#buenas-prácticas-).

### Contribuir desde Stackblitz

Si quieres contribuir de una manera mas sencilla, puedes iniciar este proyecto desde _Stackblitz_ usando tu cuenta de GitHub:

[![Abrir en Stackblitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/gadminapp/gadmin-website)

**¡Estamos agradecidos con todos los colaboradores que han mejorado este proyecto!**

[![Contribuidores](https://contrib.rocks/image?repo=gadminapp/gadmin-website)](https://github.com/gadminapp/gadmin-website/graphs/contributors)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## 🛠️ Stack

- [![Astro][astro-badge]][astro-url] - The web framework for content-driven websites.
- [![Typescript][typescript-badge]][typescript-url] - JavaScript with syntax for types.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

[astro-url]: https://astro.build/
[typescript-url]: https://www.typescriptlang.org/
[astro-badge]: https://img.shields.io/badge/Astro-fff?style=for-the-badge&logo=astro&logoColor=bd303a&color=352563
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[contributors-shield]: https://img.shields.io/github/contributors/gadminapp/gadmin-website.svg?style=for-the-badge
[contributors-url]: https://github.com/gadminapp/gadmin-website/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gadminapp/gadmin-website.svg?style=for-the-badge
[forks-url]: https://github.com/gadminapp/gadmin-website/network/members
[stars-shield]: https://img.shields.io/github/stars/gadminapp/gadmin-website.svg?style=for-the-badge
[stars-url]: https://github.com/gadminapp/gadmin-website/stargazers
[issues-shield]: https://img.shields.io/github/issues/gadminapp/gadmin-website.svg?style=for-the-badge
[issues-url]: https://github.com/gadminapp/gadmin-website/issues
