# MISO_REGRESSION_TESTING
General activities of Regression testing

1. Create app
2. Take screenshot using [Cypress](https://www.cypress.io/)
3. Compare screenshots images using [ResembleJS](https://huddleeng.github.io/Resemble.js/)
4. Generate a report based on the automation of points 2 and 3

----

## Palette Colors Document

 **0. Exceute:**
  
    $ npm install

 **1. Repository Link:** [Github](https://github.com/makitodev/MISO_REGRESSION_TESTING)

 **2. Application Link:** [REGRESSION_TESTING](https://makitodev.github.io/MISO_REGRESSION_TESTING/)

 **3. ScreenShots using Cypress:**

    - run commannd 
    $ npm run cypress:open
  
when cypress open, select simple_spec.js an run it

#### CASE 1 ---> Generate Random Color
![Before](screenshots/C1_Before_GenerateRandomColor.png)
![After](screenshots/C1_After_GenerateRandomColor.png)
-------------

#### CASE 2 ---> Generate random color when it isnt white
![Before](screenshots/C2_Before_RandomColorWhenNotWhite.png)
![After](screenshots/C2_After_RandomColorWhenNotWhite.png)
-------------

#### CASE 3 ----> Clean color when palette has selected
![Before](screenshots/C3_Before_CleanColor.png)
![After](screenshots/C3_After_CleanColor.png)

**Compare screenshot using ResembleJS**

#### CASE 1 ---> Generate Random Color

![CompareC1](screenshots/C1.png)

#### CASE 2 ---> Generate random color when it isnt white

![CompareC2](screenshots/C2.png)

#### CASE 3 ----> Clean color when palette has selected

![CompareC3](screenshots/C3.png)

 **4. Questions:**

**Do you see any problems with the screenshots taken by Cypress when trying to do Visual Regression Testing?**

I had no problem, i followed the documentation of cypress and before each click of the buttons took screenshot of the website to see the differences in the interface of both states. Cypress create a folder automatically with the images of the screenshots taken from the tests.

**Qué información puedo obtener de una imagen al usar resembleJS y que significado tiene cada uno de los componentes de la respuesta?** 
La librería logra identificar los cambios obtenids en la interfaz  y los señala mediante un coloreado color rosa para denotar cambios de color, de contenido y posición.

**Qué información puedo obtener al comparar dos imagenes?**
Al comparar las imágenes Resembler puede determinar sobre las dos imágenes qué cambios se obtuvieron de una a la otra, cambios de color o incluso caracteres como lo señala en la caja de texto (que describe el color) y hasta el sombreado (color azul) sobre el botón de Generar Paleta.

**Qué opciones se pueden seleccionar al realizar la comparación ?**
Resemble js permite configurar ciertas opciones dentro de la comparación de imágenes para identificar de forma visual qué cambios se obtuvieron, color del resaltado del cambio, tipos de datos a ignorar como cambios de color, cambios de transparencia, tamaño de las imágenes a generar, densidad, movimiento etc. 