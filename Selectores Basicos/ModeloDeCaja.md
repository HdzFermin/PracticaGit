## Concepto De Modelo De Caja De HTML Y Sus Partes
### Modelo De Caja
*El modelo de caja en HTML y CSS se refiere a cómo se representan visualmente los elementos HTML en una página web. Cada elemento en una página web se considera como una caja rectangular, y esta caja está compuesta por varias partes, cada una de las cuales afecta cómo se muestra el contenido en el navegador.*

### Partes Que La Componen

**Contenido (Content):** *Es el área interior de la caja que contiene el contenido real del elemento, como texto, imágenes u otros elementos HTML anidados.*

**Relleno (Padding):**  *Es un espacio transparente que rodea el contenido dentro de la caja. El relleno crea un espacio entre el contenido y el borde de la caja. Puede configurarse con propiedades CSS como padding-top, padding-right, padding-bottom y padding-left.*

**Borde (Border):** *Es una línea que rodea el relleno y el contenido de la caja. Puede tener un estilo, un grosor y un color específicos. Los estilos de borde incluyen valores como "solid", "dotted", "dashed", etc. Puedes controlar el borde con propiedades como border-style, border-width y border-color.*

**Margen (Margin):**  *Es un espacio transparente que rodea el borde de la caja. Los márgenes crean un espacio entre la caja actual y otras cajas cercanas. Al igual que el relleno, los márgenes también se pueden configurar con propiedades como margin-top, margin-right, margin-bottom y margin-left.*

## Que es la Propiedad Display y Valores que puede tener

### Propiedad Display

*La propiedad display en CSS se utiliza para controlar cómo se muestra un elemento en una página web. Define cómo se genera el modelo de caja del elemento y cómo interactúa con otros elementos en el flujo del documento. Esta propiedad es crucial para lograr diferentes diseños y estructuras en una página web.*

### Valores De la Propiedad Display

**block:** *Los elementos con esta propiedad ocuparán todo el ancho disponible y generarán un salto de línea antes y después de ellos. Esto significa que cada elemento bloque se mostrará en una línea separada, ocupando todo el ancho disponible.*

**inline:** *Los elementos con esta propiedad se comportarán como parte del flujo de texto, sin generar saltos de línea. Se colocan en línea con el contenido circundante y solo ocupan el espacio necesario para su contenido. No aceptan propiedades de dimensiones como ancho o alto.*

**inline-block:** *Esta combinación de los valores inline y block permite que un elemento se comporte como un elemento en línea, pero aún pueda aceptar dimensiones (ancho y alto) y tener relleno, margen y borde.*

**none:** *Cuando se establece en none, el elemento no se mostrará en absoluto. Se eliminará del flujo de la página y no ocupará espacio. Es útil para ocultar elementos de manera dinámica a través de JavaScript o CSS.*

**flex:** *Introduce un sistema de diseño flexible llamado Flexbox. Permite crear diseños complejos alinear y distribuir elementos en un contenedor, ya sea horizontal o verticalmente, manteniendo un diseño adaptable.*

**grid:** *Introduce otro sistema de diseño llamado Grid Layout. Permite dividir el espacio en filas y columnas para crear diseños más complejos que Flexbox, lo que permite un control más granular sobre la ubicación de los elementos.*
