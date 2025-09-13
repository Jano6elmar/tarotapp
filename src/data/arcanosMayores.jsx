const arcanosMayores = [
  {
    id: 0,
    nombre: "El Loco",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A00_avec_bordure_W540.png",
    descripcion: `Es la energía total del universo, indefinida y en forma pura que es llevada hacia un
objetivo. Representa la libertad total sin límites y sin definición. En su cabeza El Loco lleva
un sombreo de color amarillo que indica inteligencia y consciencia, además de portar una
Luna y un Sol, símbolos de las energía femenina y masculina respectivamente. El animal
que lo acompaña de color celeste, representa el cuerpo espiritual, el Alma, y toca o hace
contacto con El Loco en una zona de color verde, a la altura de los órganos sexuales,
representando en este contacto la conexión con el placer. El Loco viaja ligero llevando solo
lo esencial. Nos invita a dejar de lado las estructuras y a darnos espacios de libertad, a
conectar con la locura bien entendida. Cuando lo antecede una carta, se aleja de ella y
lleva su energía hacia la carta que lo precede.`
  },
  {
    id: 1,
    nombre: "El Mago",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A01_avec_bordure_W540.png",
    descripcion: `Es el inicio o comienzo de un ciclo, etapa, proyecto o anhelo. Representa la buena elección
que permite iniciar un proceso creativo. Es un principio activo masculino. El Mago
sostiene en su mano derecha una varita de color celeste, receptiva, indicando hacia lo
alto en un gesto de captar la energía universal y dirigirla hacia el día o moneda que tiene
en la mano izquierda. Sobre su mesa hay una serie de objetos que representan los cuatro
elementos o mundos del ser humano, con los que da vida a sus creaciones. Su sombrero
en forma de infinito nos habla de una conexión fundamental con el universo y su
dimensión espiritual. En su cabello es posible apreciar ocho oros que sugieren la
búsqueda de perfección.`
  },
  {
    id: 2,
    nombre: "La Papisa",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A02_avec_bordure_W540.png",
    descripcion: `Representa la gestación y acumulación. Es la esencia de lo femenino y representa un
arquetipo materno. Es una mujer con un rango espiritual alto, similar al Papa. Se muestra
muy arropada, y al igual que el velo que la cubre por atrás, nos hace pensar que está
enclaustrada, en un encierro que dará vida a una nueva creación. El color blanco de su piel
representa la pureza y nos hace pensar que aún no se encarna, pero el libro que sostiene
en las manos si lo está y contiene el conocimiento del universo. Podría representar a una
madre sabia y espiritual o por el contrario, a una madre o mujer fría o frígida. La Papisa
lleva a la encarnación. Nos invita o sugiere darnos un tiempo para conectar con nuestro
mundo interior, alejarnos de aquellas cosas que nos distraen de nuestro verdadero
propósito.`
  },
  {
    id: 3,
    nombre: "La Emperatriz",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A03_avec_bordure_W540.png",
    descripcion: `Estallido creativo sin saber a dónde va, falta de experiencia o madurez. La Emperatriz es la
manifestación creativa de aquello que La Papisa gestaba, sin el velo que la cubría, ahora
se muestra completamente, ha salido de su encierro. Es un gran impulso hacia la vida, un
impulso adolescente al cuál le falta claridad hacia donde hace fluir toda esa energía.
Podemos apreciar que en una de sus manos sostiene un cetro con una cruz en su punta,
símbolo del poder que actúa en todas las direcciones o en los cuatro puntos cardinales.
En su otra mano sostiene un escudo con un águila, pero esta no está completa al mirar el
ala, faltan algunas plumas. Podría indicar que aún La Emperatriz no posee una madurez o
claridad que le permita dirigir sus creaciones hacia un objetivo. También representa la
fertilidad.`
  },
  {
    id: 4,
    nombre: "El Emperador",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A04_avec_bordure_W540.png",
    descripcion: `El Emperador se hace cargo de manera específica del mundo material. Sentado en su
trono demuestra confianza y seguridad. Sostiene en su mano un cetro, símbolo del poder
que ejerce en todas direcciones. Aunque aparenta estar quieto, El Emperador es activo,
sus zapatos de color rojo lo indican. El escudo muestra un águila, que a diferencia del de
La Emperatriz, está completa y es hembra (tiene un huevo). Es la pareja carnal,
compañero de La Emperatriz. Arquetipo paternal que entrega seguridad, protección y
provee materialmente. Por el contrario puede encarnar a un padre o figura de poder
autoritario, déspota.`
  },
    {
    id: 5,
    nombre: "El Papa",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A05_avec_bordure_W540.png",
    descripcion: `El Papa muestra el camino hacia la vida espiritual consciente. Está un paso más allá del
Emperador y de la estabilidad que este provee. Su imagen es la de un hombre mayor,
vestido con ropajes que indican un estatus de poder, en este caso de índole espiritual. Él
es quien une el cielo y la tierra, es quien recibe y entrega a los hombres... es el puente. En la
parte inferior de la carta, vemos a sus discípulos que en un juego de manos que llaman la
atención, buscan tocarlo. En sus manos podemos ver los estigmas de la crucifixión a
modo de pequeñas cruces. Su imagen nos remite a la figura de un guía, maestro o padre
espiritual, a una persona sabia con experiencia que sabrá mostrar el camino. Es además
un arquetipo religioso y una figura paterna idealizada. Nos habla de un intercambio de
comunicación y también de la moral que limita y castra.`
  },
  {
    id: 6,
    nombre: "Los Enamorados",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A06_avec_bordure_W540.png",
    descripcion: `En esta carta por primera vez encontramos que todos los personajes ocupan el mismo
tamaño. Este detalle nos sugiere entrar en relación con los otros: la familia, las relaciones
sociales y el mundo. El Enamorado une a través del amor y despierta el placer de hacer
aquello que a uno le gusta, más allá de lo material a través de la una pregunta: ¿Estás
feliz con lo que haces?. En esta carta además se manifiesta todo el Edipo, representado
por los personajes y también nos sugiere la posibilidad de elegir. Al preguntarnos cuál de
los personajes de la carta es El Enamorado, posiblemente señalaremos a uno de los tres,
pero si miramos con atención, veremos que detrás del ángel se encuentra el Sol, el
verdadero enamorado que representa la vida y que entrega su energía a través del ángel.`
  },
  {
    id: 7,
    nombre: "El Carro",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A07_avec_bordure_W540.png",
    descripcion: `Esta carta nos impulsa a la acción con claridad, a ir a la conquista de nuestros objetivos,
de aquello que nos gusta y genera placer. Este hombre que lleva consigo un centro en la
mano y está sobre un carro, se deja llevar por los caballos que representan el instinto y la
energía sexual y erótica, es por eso que este carro no tiene riendas. El Carro sumergido en
la tierra, nos señala que se mueve al ritmo del mundo, que la acción que se ha realizar
tiene un ritmo. Sobre sus hombros encontramos las máscaras de la risa y el llanto, signo
de que esta carta está relacionado con el éxito de quienes están relacionados con alguna
disciplina artística. Esta carta por ser la número siete, está asociada a la buena fortuna y
el éxito.`
  },
  {
    id: 8,
    nombre: "La Justicia",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A08_avec_bordure_W540.png",
    descripcion: `Esta carta, la primera que mira de frente, manifiesta la búsqueda del equilibrio entre el
aspecto intelectual (espada) y el mundo emocional (balanzas). Gran desafío el lograr
equilibrar estos dos aspectos del cuadrado cielo. La Justicia nos habla también de la
búsqueda de justicia y la aplicación de esta en alguna causa en particular. La balanza al
estar sostenida en el aire, en otro plano, se relaciona con la justicia divina. En su cabeza
posee un tercer ojo, receptivo y activo, que le permite observar desde otro plano. Al estar
relacionado con el grado ocho de la estructura numerológica, nos habla de la búsqueda
de la perfección. Se relaciona con la severidad y el juzgar. Es un arquetipo materno que
bien podría representar a una madre justa o severa y tóxica. Con su mirada nos interpela y
nos pregunta si somos justos con nosotros mismos y con los otros.`
  },
  {
    id: 9,
    nombre: "El Ermitaño",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A09_avec_bordure_W540.png",
    descripcion: `Este viejo bien arropado nos indica que viene de regreso de un largo viaje. Su bastón de
color rojo nos recuerda a El Loco, quizás es este que está de vuelta. Su mirada hacia la
izquierda, nos indica que mira el pasado, integrándolo como experiencia o que aún está
atado a este. El Ermitaño nos remite a un estado de soledad e introspección, que podrá
ser aprovechado como proceso evolutivo, o un estado depresivo. Esta carta nos indica
crisis, necesaria para la evolución. Es el maestro interior que habita en cada uno, como
también un alcohólico que guarda su botella en la lámpara que sostiene. Arquetipo de
padre ausente.`
  },
    {
    id: 10,
    nombre: "La Rueda de la Fortuna",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A10_avec_bordure_W540.png",
    descripcion: `Esta carta nos sorprende por su rareza. A primera vista vemos dos seres, mitad animales
y mitad humanos, que giran en esta rueda que no se detiene. El ser de la derecha asciende
hacia el espíritu y el de la izquierda desciende hacia la materia. La esfinge que está fuera
de la circulación de la rueda, tiene en su corona la unión de los cuatro elementos. La
Rueda de Fortuna nos recuerda que todo está en permanente cambio y a la vez es un
punto de evolución. Dependiendo de dónde esté ubicada, significa el inicio, la mitad o el
final de un ciclo o etapa. Se relaciona con la buena fortuna y la llegada de dinero.`
  },
  {
    id: 11,
    nombre: "La Fuerza",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A11_avec_bordure_W540.png",
    descripcion: `El comienzo del segundo ciclo se inicia con La Fuerza. Este arcano en el que la mujer abre
las fauces del león nos indica que ella lo ha domado. Esto solo puede ser conseguido si se
le conoce. La libido y las fuerzas animales son representadas aquí por el león. La Fuerza
nos invita a conocer esta energía vital del ser humano, a conectar con estos impulsos y
hacernos conscientes de nuestros deseos para realizarlos. Esta carta también representa
la fuerza de voluntad, la fuerza interior femenina que entra en contacto con la energía
creativa y sexual. A partir de esta carta comienza un camino hacia el inconsciente
profundo.`
  },
  {
    id: 12,
    nombre: "El Colgado",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A12_avec_bordure_W540.png",
    descripcion: `Este arcano a primera vista nos parece extraño. Colgado cabeza abajo y encerrado entre
árboles sin ramas, remite a un estado de meditación profunda, a entrar en sí mismo para
mirar la vida desde el interior, desde otro ángulo. La imagen nos sugiere un feto
esperando nacer, por lo tanto podría hacer referencia a un proceso de autogestación,
separarse del mundo y entrar profundamente en un proceso evolutivo y espiritual. El
Colgado también indica detención y que existe una gran obstrucción, que hay algo que
necesita madurar y que es necesario ir profundo. En este estado no se toman decisiones.
Colgado de la pierna izquierda (que asimilamos a su lado femenino) podría indicarnos
que aún está amarrado o unido a la madre y a través de esta soga, al padre y la madre.`
  },
  {
    id: 13,
    nombre: "Arcano sin nombre (La Muerte)",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A13_avec_bordure_W540.png",
    descripcion: `Este es el único arcano mayor que no tiene nombre, así como El Loco no lleva número. Por
siglos ha sido interpretada como La Muerte, sin embargo al mirarla con detención, vemos
un ser muy delgado y huesudo, de color piel y no un esqueleto blanco cubierto por una
capa de color negro. Este personaje en plena acción, nos sugiere la figura de un jardinero
que limpia un terreno, en este caso del inconsciente, que con su guadaña corta todo
aquello que no permite crecer y evolucionar. El suelo de color negro representa la
profundidad del inconsciente que es removido por el arcano sin nombre, para permitir
que el proceso de transformación se realice. ¿Qué corta el arcano?, situaciones, hábitos,
creencias, lugares, vínculos... y todo aquello que impida el avance. Esta carta también
representa una crisis profunda así como una explosión creativa o destructiva.`
  },
  {
    id: 14,
    nombre: "La Templanza",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A14_avec_bordure_W540.png",
    descripcion: `La carta nos muestra la figura de un ángel que vierte agua de una jarra a otra,
permitiendo que esta circule. Templanza nos invita a realizar un proceso de armonización
interior, a equilibrar los opuestos en nosotros (receptivo – activo) y a la vez a realizar un
profundo proceso de autosanación. Sus ojos de color amarillo son signo de la conciencia
universal que habita. También hace referencia a estar protegido, de acuerdo al concepto
de ángel de la guarda que conocemos.`
  },
  {
    id: 15,
    nombre: "El Diablo",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A15_avec_bordure_W540.png",
    descripcion: `Este arcano, al igual que La Fuerza, nos mira de frente. Viscoso y con un cuerpo de rasgos
femeninos pero con órganos sexuales masculinos, El Diablo nos propone aceptar que en
cada uno de nosotros habitan pulsiones y deseos que es necesario realizar. Este ángel
(Lucifer) lleva en su mano derecha una antorcha; es el portador de la luz que ilumina
nuestra oscuridad interior para vernos en esta dimensión y aceptarla como un aspecto de
nosotros. Es una carta eminentemente creativa, que sugiere dejar a un lado el miedo para
manifestar esta creatividad. El Diablo parado sobre el mundo, tiene amarrados a los
diablos. Estos, con los pies enraizados en el territorio negro (el inconsciente) podrían
estar presos de sus impulsos sin saberlo. Esta carta nos ata al miedo y al deseo al mismo
tiempo, y el cuerpo del diablo de color azul claro (receptivo) nos sugiere una exaltación de
los sentidos.`
  },
  {
    id: 16,
    nombre: "La Torre",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A16_avec_bordure_W540.png",
    descripcion: `Tradicionalmente se ha interpretado esta carta como un momento de destrucción. Rayos
que caen desde el cielo y una torre destruida en miles de pedazos, como si de un castigo
divino se tratara. Esta carta nos revela un momento de gran celebración, es la gran
liberación de los límites que impiden un pleno desarrollo. La torre en su parte superior
muestra una corona que cae producto de una fuerza superior, es el soplido de la divinidad
que permite salir del encierro, por lo tanto lo que vemos en la escena es una celebración
entre el cielo y la tierra. Los personajes, al parecer equilibristas circenses, nos indican que
en esta etapa el volver a conectar con la naturaleza es vital en este andar evolutivo.
Dejamos atrás nuestros miedos, ideas repetitivas, emociones limitantes, estancamiento
creativo y nos permitimos disfrutar y celebrar nuestros logros. Esta carta también nos
sugiere la concreción de nuestros proyectos o ideas que en El Enamorado definimos
como acción concreta. También sugiere un viaje, un cambio geográfico... quizás una
mudanza o cambio de casa.`
  },
  {
    id: 17,
    nombre: "La Estrella",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A17_avec_bordure_W540.png",
    descripcion: `Después de la liberación, finalmente encontramos nuestro lugar en el mundo. Actuamos
desde este espacio interior o físico y nos mostramos tal cual somos, en toda nuestra
naturalidad... sin nada que ocultar. Al llegar a este punto dejamos de ocuparnos solo de
nosotros y nos entregamos al mundo. Doy, entrego, recibo del cosmos y doy a la tierra.
Vierto mi sabiduría y conciencia (jarra y agua color amarillo claro) al igual que mi
receptividad y espiritualidad (jarra agua azul claro). El Sol como estrella central en el
cielo, ilumina este momento sublime en el cuál experimentamos la realización.
Representa en un hombre su belleza femenina interior desde la cual puede actuar. Para
una mujer es la realización de su presencia en el mundo.`
  },
  {
    id: 18,
    nombre: "La Luna",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A18_avec_bordure_W540.png",
    descripcion: `La madre cósmica y símbolo de la receptividad. En ella encontramos la mayor conexión
con toda la esencia de lo femenino: conexión con las emociones, intuición, sensibilidad y
capacidad receptiva. La Luna nos remite al tiempo de la noche, de los temores nocturnos,
a la soledad y también a la capacidad de acceder a planos de sabiduría mayores. La
imagen de la carta nos revela que detrás de ella está El Sol, y como satélite natural de la
tierra, su influencia sobre las aguas y mareas es decisiva. Los perros tocan sus lenguas lo
que pareciera ser gotas, pero si nos fijamos con atención, estas ascienden atraídas por La
Luna, al igual que la langosta que está en el agua, se ve atraída. La Luna nos conecta con
estados anímicos que suelen estar asociados a la depresión.`
  },
  {
    id: 19,
    nombre: "El Sol",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A19_avec_bordure_W540.png",
    descripcion: `El padre cósmico, arquetipo paterno y nueva construcción. Esta carta nos muestra a dos
seres humanos que desnudos y solo llevando un taparrabos, se encuentran iluminados
por el Sol que brilla en lo alto. Los personajes, probablemente los diablillos que estaban
amarrados del cuello, aquí se encuentran para experimentar la fraternidad. El Sol nos
habla de estar protegidos, cuidados como el padre celestial que cuida a sus hijos. En esta
etapa se consolidan los proyectos o procesos iniciados anteriormente. Nos sugiere un
amor de pareja que encuentra su plenitud y que forja un presente sobre bases sólidas. La
Torre se ha transformado en el muro detrás de los personajes señalando estar en un lugar
seguro. Es una carta relacionada con la riqueza, el éxito y la abundancia.`
  },
  {
    id: 20,
    nombre: "El Juicio",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A20_avec_bordure_W540.png",
    descripcion: `La penúltima carta de los arcanos mayores, nos revela el nacimiento de la nueva
conciencia, la unión de la dimensión masculina y femenina. La mujer y el hombre dan
vida al ser de color azul claro, él es la nueva conciencia que mira al ángel, el enviado de
Dios. Es un llamado irresistible que nos conecta con la conciencia superior y la
trascendencia. Esta carta nos invita por lo tanto, a no perder de vista que nuestro destino
final es habitar una conciencia elevada. También invita a dejar de juzgarse, cesar la
autocrítica permanente y dejar de juzgar a los otros, para habitar el presente. La carta
nos sugiere el nacimiento de un hijo(a) como unión del hombre y la mujer, o el resultado
de un proyecto en común. Esta carta también nos habla de las circunstancias del
nacimiento nuestro o de la persona a quien se lee el Tarot.`
  },
  {
    id: 21,
    nombre: "El Mundo",
    imagen: import.meta.env.BASE_URL + "assets/arcanos/A21_avec_bordure_W540.png",
    descripcion: `La realización suprema, la meta que el Tarot nos propone al desarrollar en forma armónica
el mundo intelectual, emocional, creativo-sexual y material. Ubicada al final de una
lectura, indica la plenitud de la vida, o un éxito mundial, un matrimonio feliz o el
descubrir el mundo en sentido literal. Ubicada al inicio de una lectura, señala un
comienzo difícil; la realización antes que la acción, es un encierro que mira al pasado. El
Mundo es la unión de los 22 arcanos mayores, los contiene a todos.`
  }
];





export default arcanosMayores;
