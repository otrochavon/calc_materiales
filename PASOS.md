# Publicar la Calculadora de materiales en GitHub Pages

Los siete archivos de esta carpeta ya están listos. No hay que tocar nada adentro.

---

## ⚠️ Antes de empezar: guardá tus datos

La app publicada va a tener una dirección nueva, y para el navegador eso es **otro lugar**: las cuentas que ya cargaste en la versión local **no aparecen solas**.

1. Abrí la app que estás usando hoy
2. **Config → Respaldo → Guardar respaldo (.json)**
3. Guardá ese archivo donde lo encuentres después

Al final de estos pasos lo vas a importar en la versión nueva.

---

## 1. Crear el repositorio

1. Entrá a **github.com** con tu cuenta
2. Arriba a la derecha, el **+** → **New repository**
3. Completá:
   - **Repository name:** `calc_materiales`
   - **Public** ← tiene que ser público; Pages gratis no funciona con repos privados
   - Dejá **sin** tildar "Add a README file"
4. **Create repository**

> El repo es público, pero eso solo expone el código de la app. **Tus cuentas y precios nunca se suben**: viven en tu teléfono.

---

## 2. Subir los archivos

En la pantalla que te queda:

1. Tocá **uploading an existing file** (o entrá a **Add file → Upload files**)
2. Arrastrá estos siete archivos —los siete sueltos, **no la carpeta**:
   - `index.html`
   - `sw.js`
   - `manifest.json`
   - `icon-192.png`
   - `icon-512.png`
   - `icon-maskable.png`
   - `apple-touch-icon.png`
3. Abajo, **Commit changes**

*(`PASOS.md` no hace falta subirlo, pero tampoco molesta.)*

---

## 3. Encender GitHub Pages

1. En el repo, solapa **Settings** (arriba a la derecha)
2. Menú de la izquierda: **Pages**
3. En **Build and deployment → Source** elegí **Deploy from a branch**
4. En **Branch** elegí **main** y carpeta **/ (root)** → **Save**
5. Esperá 1 o 2 minutos y recargá la página de Settings → Pages

Arriba te va a aparecer la dirección, con esta forma:

```
https://TU-USUARIO.github.io/calc_materiales/
```

Si todavía dice que está publicando, esperá un minuto más y recargá.

---

## 4. Instalarla en el teléfono

1. Abrí esa dirección en **Chrome del celular** (mandátela por WhatsApp para no tipearla)
2. Esperá a que cargue entera **una vez** — ahí se guarda la copia para andar sin señal
3. Menú de Chrome (los tres puntos) → **Instalar aplicación** o **Agregar a pantalla de inicio**
4. Confirmá

Queda con ícono propio —el tronco y la sierra—, se abre sin la barra del navegador y **funciona sin internet**.

---

## 5. Recuperar tus datos

1. Abrí la app recién instalada
2. **Config → Respaldo → Reemplazar todo por el respaldo**
3. Elegí el `.json` del paso inicial

Listo. Verificá que estén tus cuentas y tus precios antes de borrar nada de la versión vieja.

---

## Cuando haya una versión nueva

Yo te paso el `index.html` nuevo, y vos:

1. En el repo, **Add file → Upload files** y lo arrastrás encima → **Commit changes**
2. Abrí el archivo `sw.js` en el repo → lápiz ✏️ → cambiá `const VERSION = 1;` por `2` (y así) → **Commit changes**
   *Esto le avisa al teléfono que hay algo nuevo; sin esto puede seguir mostrando la versión vieja.*
3. En el teléfono, abrí la app **con señal** y cerrala. La próxima vez que la abras ya está actualizada

---

## Preguntas rápidas

**¿Necesito internet para usarla?**
Solo la primera vez, para bajarla. Después nunca. Los datos no salen del teléfono.

**¿Alguien puede ver mis pedidos?**
No. El repo público solo tiene el programa. Las cuentas están en el almacenamiento privado de tu navegador.

**¿Y si cambio de teléfono?**
Abrís la dirección en el nuevo, la instalás, e importás el respaldo. Por eso conviene guardar el `.json` en Drive cada tanto.

**¿Cuánto sale?**
Nada. GitHub Pages es gratis para repos públicos.
