const imagenFallback =
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 420">
          <rect width="600" height="420" fill="#ddf5df"/>
          <circle cx="300" cy="185" r="90" fill="#9ddc6f"/>
          <path d="M300 292c-28-56-118-75-118-150 0-45 35-80 79-80 19 0 36 7 49 18 13-11 30-18 49-18 44 0 79 35 79 80 0 75-90 94-138 150Z" fill="#16824a"/>
          <text x="300" y="352" text-anchor="middle" font-family="Arial" font-size="28" font-weight="700" fill="#0b3d2e">Imagen botánica</text>
        </svg>
      `);

    const plantas = [
  { grupo: "arboles", nombre: "Ceiba blanca", cientifico: "Ceiba pentandra", wiki: "Ceiba_pentandra", tag: "Árbol nativo", descripcion: "La ceiba blanca es un árbol tropical de gran porte, con un tronco robusto y una copa amplia que puede dominar el paisaje. En ejemplares jóvenes pueden aparecer raíces tabulares y, en determinadas condiciones, estructuras espinosas en el tronco. Sus frutos producen fibras ligeras que ayudan a dispersar las semillas por el viento.", ecologia: "Su gran tamaño crea sombra y espacios que pueden ser aprovechados por aves, insectos y plantas epífitas. Sus flores y frutos también participan en las redes alimentarias del bosque tropical.", uso: "Tiene importancia cultural, ornamental, ecológica y educativa. La fibra de sus frutos, conocida como kapok, ha sido utilizada tradicionalmente para rellenos y otros materiales ligeros.", habitat: "Bosques tropicales estacionales, zonas cálidas y áreas donde existe suficiente espacio para desarrollar una copa amplia. Está presente de forma nativa en buena parte de América tropical y también se cultiva en Colombia.", curioso: "El fruto se abre cuando madura y libera semillas acompañadas por una fibra muy liviana que facilita su dispersión por el aire." },
  { grupo: "arboles", nombre: "Roble morado", cientifico: "Tabebuia rosea", wiki: "Tabebuia_rosea", tag: "Floración vistosa", descripcion: "El roble morado es un árbol tropical conocido por sus grandes floraciones rosadas, lilas o casi blancas. Sus hojas son compuestas y, durante la época de floración, el árbol puede perder buena parte del follaje, haciendo que las flores destaquen de manera espectacular.", ecologia: "Sus flores son visitadas por distintos polinizadores y forman parte de los recursos disponibles para la fauna durante la temporada de floración. Como árbol de copa alta también aporta sombra y estructura al paisaje.", uso: "Se utiliza ampliamente como árbol ornamental y de sombra en calles, parques, fincas y jardines tropicales. Su madera también ha tenido usos tradicionales.", habitat: "Regiones tropicales de América, especialmente ambientes cálidos con temporadas secas y lluviosas. Es una especie nativa de Colombia.", curioso: "Una de sus características más llamativas es que puede florecer cuando tiene pocas hojas, por lo que la copa parece cubrirse completamente de flores." },
  { grupo: "arboles", nombre: "Campano", cientifico: "Samanea saman", wiki: "Samanea_saman", tag: "Sombra amplia", descripcion: "El campano es un árbol de copa muy extendida, con ramas que pueden formar una especie de sombrilla natural. Sus hojas son bipinnadas y sus flores presentan numerosos estambres que les dan una apariencia delicada y llamativa.", ecologia: "Su copa proporciona refugio y sombra para diferentes animales. Además, al aportar materia orgánica al suelo y moderar la temperatura, puede favorecer las condiciones para otras especies vegetales.", uso: "Es apreciado como árbol de sombra en potreros, parques, carreteras y espacios abiertos. También tiene importancia paisajística y para la recuperación de ambientes degradados.", habitat: "Zonas tropicales cálidas, áreas abiertas, potreros y bosques estacionales. Se adapta bien a espacios con bastante luz solar.", curioso: "Sus folíolos pueden plegarse en respuesta a la oscuridad y a ciertos cambios ambientales, un fenómeno conocido como movimiento nástico." },
  { grupo: "arboles", nombre: "Caracolí", cientifico: "Anacardium excelsum", wiki: "Anacardium_excelsum", tag: "Árbol tropical", descripcion: "El caracolí es un árbol grande de la familia Anacardiaceae, la misma familia a la que pertenece el marañón. Puede desarrollar un tronco grueso y una copa considerable, especialmente cuando crece en condiciones favorables.", ecologia: "Aporta sombra, hojarasca y estructura al bosque. Sus flores y frutos participan en las relaciones entre plantas, insectos y otros animales, y la presencia de árboles grandes ayuda a conservar microclimas más frescos.", uso: "Es una especie importante para la restauración y conservación de bosques tropicales. Su madera ha sido aprovechada en distintos lugares, aunque la conservación de ejemplares naturales es especialmente valiosa.", habitat: "Bosques tropicales, zonas cercanas a cursos de agua y ambientes cálidos de América tropical. En Colombia es una especie nativa.", curioso: "Su parentesco botánico con el marañón se puede reconocer porque ambas especies pertenecen al género Anacardium." },
  { grupo: "arboles", nombre: "Guácimo", cientifico: "Guazuma ulmifolia", wiki: "Guazuma_ulmifolia", tag: "Bosque seco", descripcion: "El guácimo es un árbol de tamaño mediano muy característico de ambientes tropicales estacionales. Tiene hojas simples, una copa relativamente densa y frutos redondeados que cambian de color al madurar.", ecologia: "Sus frutos pueden ser consumidos por fauna silvestre y animales domésticos, mientras que el follaje y la hojarasca contribuyen al ciclo de nutrientes del suelo.", uso: "Se emplea en sistemas agroforestales, potreros y proyectos de restauración. También posee una larga tradición de usos locales relacionados con la madera, la alimentación animal y prácticas rurales.", habitat: "Bosque seco tropical, potreros, bordes de caminos y zonas abiertas cálidas. Tolera periodos de sequía mejor que muchas especies de ambientes más húmedos.", curioso: "Es una de las especies que puede aparecer tanto en paisajes naturales como en ambientes rurales muy intervenidos." },

  { grupo: "ornamentales", nombre: "Cayena", cientifico: "Hibiscus rosa-sinensis", wiki: "Hibiscus_rosa-sinensis", tag: "Flor ornamental", descripcion: "La cayena es un arbusto ornamental de hojas verdes brillantes y flores grandes y vistosas. Existen numerosos cultivares con diferentes colores, tamaños y formas de flor, por lo que es una planta muy común en jardines tropicales.", ecologia: "Sus flores ofrecen recursos para algunos visitantes florales y contribuyen a la diversidad de los jardines. En ambientes urbanos también aporta cobertura vegetal y valor paisajístico.", uso: "Se cultiva principalmente como ornamental en patios, jardines, cercas y espacios escolares. Algunas culturas también han empleado sus flores y hojas en preparaciones tradicionales.", habitat: "Jardines tropicales y subtropicales, preferiblemente en lugares cálidos con buena iluminación y suelo con humedad suficiente.", curioso: "Aunque suele llamarse hibisco tropical, muchas de las formas ornamentales actuales son el resultado de una larga historia de cultivo y selección." },
  { grupo: "ornamentales", nombre: "Trinitaria", cientifico: "Bougainvillea spectabilis", wiki: "Bougainvillea_spectabilis", tag: "Trepadora", descripcion: "La trinitaria es una planta trepadora o arbustiva de tallos leñosos, muy resistente al sol. Lo más llamativo son sus brácteas de colores intensos, que rodean las pequeñas flores verdaderas.", ecologia: "Sus estructuras florales atraen visitantes y la vegetación puede ofrecer cobertura a pequeños animales e insectos. Es especialmente útil para aumentar la presencia de vegetación en espacios soleados.", uso: "Se utiliza para cubrir muros, rejas, pérgolas, cercas y fachadas. Es popular en climas cálidos porque soporta bastante sol cuando está bien establecida.", habitat: "Zonas cálidas y soleadas, jardines, patios y espacios urbanos. En Colombia se encuentra cultivada, especialmente en regiones tropicales y cálidas.", curioso: "El color que normalmente vemos no corresponde a los pétalos de la flor: son brácteas modificadas; las flores verdaderas son pequeñas y se encuentran en el centro." },
  { grupo: "ornamentales", nombre: "Ixora", cientifico: "Ixora coccinea", wiki: "Ixora_coccinea", tag: "Arbusto floral", descripcion: "La ixora es un arbusto de hojas verdes brillantes que produce inflorescencias densas formadas por muchas flores pequeñas. Sus flores pueden presentarse en tonos rojos, rosados, naranjas, amarillos o blancos según la variedad.", ecologia: "Las flores agrupadas ofrecen recursos a insectos visitantes y pueden contribuir a mantener polinizadores en jardines tropicales.", uso: "Se emplea en jardines, bordes, setos y espacios ornamentales. Su porte compacto permite utilizarla para formar masas de vegetación.", habitat: "Ambientes tropicales y subtropicales, con buena iluminación y suelos que mantengan humedad sin permanecer constantemente encharcados.", curioso: "Las flores parecen formar una sola estructura grande, pero en realidad cada ramillete está compuesto por numerosas flores individuales." },
  { grupo: "ornamentales", nombre: "Heliconia", cientifico: "Heliconia rostrata", wiki: "Heliconia_rostrata", tag: "Tropical", descripcion: "La heliconia colgante desarrolla hojas grandes y brácteas rojas y amarillas dispuestas en estructuras que cuelgan de los tallos. Es una de las plantas tropicales más fáciles de reconocer por su forma y coloración.", ecologia: "Sus estructuras florales producen néctar y están adaptadas a la visita de animales, especialmente aves nectarívoras. También proporciona cobertura a pequeños organismos del sotobosque.", uso: "Se cultiva como ornamental y se utiliza en paisajismo tropical y floristería. También es una especie interesante para educación sobre polinización y adaptaciones de las plantas.", habitat: "Ambientes tropicales cálidos y húmedos, generalmente en sitios con buena disponibilidad de agua y materia orgánica.", curioso: "Las partes coloridas que parecen flores son principalmente brácteas; las flores verdaderas se encuentran protegidas entre ellas." },
  { grupo: "ornamentales", nombre: "Caña india", cientifico: "Canna indica", wiki: "Canna_indica", tag: "Jardín tropical", descripcion: "La caña india, también conocida como achira o canna, es una planta herbácea con rizomas subterráneos y hojas grandes. Sus flores pueden ser rojas, amarillas, anaranjadas o combinadas.", ecologia: "Aporta cobertura vegetal y flores que pueden ser visitadas por animales. Sus rizomas permiten que la planta vuelva a crecer después de perder la parte aérea.", uso: "Se cultiva como ornamental y también posee importancia alimentaria y tradicional en diferentes regiones de América, donde algunas variedades se han utilizado por sus rizomas ricos en almidón.", habitat: "Zonas tropicales y subtropicales, desde áreas húmedas hasta ambientes estacionales, siempre que exista suficiente humedad durante el crecimiento.", curioso: "No es un verdadero árbol ni un arbusto: es una planta herbácea perenne que se renueva mediante sus rizomas." },

  { grupo: "medicinales", nombre: "Sábila", cientifico: "Aloe vera", wiki: "Aloe_vera", tag: "Planta suculenta", descripcion: "La sábila es una planta suculenta de hojas carnosas dispuestas en roseta. En el interior de sus hojas posee tejidos que almacenan agua y un gel transparente ampliamente utilizado en productos cosméticos y de cuidado personal.", ecologia: "Su capacidad para almacenar agua le permite sobrevivir en condiciones secas. Al requerir relativamente poca agua una vez establecida, puede formar parte de jardines adaptados a periodos de sequía.", uso: "Se cultiva por su valor ornamental y por el uso del gel en productos cosméticos y preparados comerciales. Las afirmaciones medicinales deben diferenciarse de los usos tradicionales y de la evidencia científica disponible.", habitat: "Ambientes secos y soleados, jardines y cultivos. Aunque su origen natural se sitúa fuera de Colombia, actualmente está ampliamente cultivada y puede encontrarse naturalizada en distintas regiones.", curioso: "Sus hojas pueden alcanzar alrededor de medio metro de longitud y presentan pequeños dientes en los bordes." },
  { grupo: "medicinales", nombre: "Limonaria", cientifico: "Lippia alba", wiki: "Lippia_alba", tag: "Aromática", descripcion: "La limonaria es un arbusto aromático de América tropical y subtropical. Sus hojas desprenden un olor característico al frotarlas y sus pequeñas flores se agrupan en cabezuelas.", ecologia: "Puede crecer en ambientes tropicales estacionalmente secos y sus flores aportan recursos para insectos visitantes. Su resistencia la hace útil en huertas y jardines de climas cálidos.", uso: "Se utiliza tradicionalmente en infusiones y preparaciones aromáticas. En un contexto escolar conviene presentarla como planta de uso tradicional y no como sustituto de tratamientos médicos.", habitat: "Patios, huertas, bordes y jardines cálidos, especialmente en regiones tropicales con temporadas secas.", curioso: "Es una especie nativa de América tropical y está registrada como nativa en Colombia." },
  { grupo: "medicinales", nombre: "Hierbabuena", cientifico: "Mentha spicata", wiki: "Mentha_spicata", tag: "Aromática", descripcion: "La hierbabuena es una hierba perenne aromática con tallos y hojas verdes que desprenden un olor fresco. Se propaga con facilidad mediante sus tallos subterráneos y puede formar grupos densos.", ecologia: "Aporta diversidad a huertas y jardines, aunque necesita suficiente agua para mantenerse vigorosa. Sus pequeñas flores pueden ser visitadas por insectos.", uso: "Se emplea en alimentos, bebidas e infusiones. En Colombia se cultiva principalmente como planta de huerta y cocina, especialmente en regiones de clima templado o fresco.", habitat: "Huertas y lugares con humedad constante y luz parcial. En Colombia su cultivo es más común en zonas de mayor altitud que Barranquilla.", curioso: "Su origen natural no es tropical americano: Kew la reconoce como una especie nativa de Eurasia, aunque actualmente se cultiva ampliamente en diferentes países." },
  { grupo: "medicinales", nombre: "Albahaca", cientifico: "Ocimum basilicum", wiki: "Ocimum_basilicum", tag: "Aromática culinaria", descripcion: "La albahaca es una hierba aromática de tallos tiernos y hojas muy fragantes. Sus flores pequeñas aparecen en inflorescencias y pueden presentar tonos blancos, rosados o violáceos.", ecologia: "Cuando florece puede atraer abejas y otros insectos. Su cultivo en huertas aumenta la diversidad vegetal y proporciona recursos para polinizadores.", uso: "Es una planta culinaria muy importante y se utiliza fresca o seca para condimentar alimentos. También tiene una larga historia de usos tradicionales.", habitat: "Huertas y jardines soleados de regiones cálidas. En Colombia está cultivada y naturalizada en varias regiones, incluida la región Caribe.", curioso: "Kew registra su cultivo en el departamento del Atlántico, por lo que es especialmente pertinente para un proyecto escolar en Barranquilla." },
  { grupo: "medicinales", nombre: "Limoncillo", cientifico: "Cymbopogon citratus", wiki: "Cymbopogon_citratus", tag: "Aromática", descripcion: "El limoncillo es una gramínea perenne que forma macollas de hojas largas y estrechas. Sus hojas contienen aceites aromáticos responsables del olor cítrico que caracteriza a la planta.", ecologia: "Sus macollas cubren el suelo y ayudan a reducir espacios desnudos, mientras que sus raíces contribuyen a mantener la estructura superficial del terreno.", uso: "Se utiliza principalmente en infusiones, bebidas y preparaciones aromáticas. También tiene usos tradicionales y culinarios en numerosos países tropicales.", habitat: "Climas cálidos, soleados y con disponibilidad moderada de agua. Es cultivado en Colombia aunque su área nativa se encuentra en Asia tropical.", curioso: "Aunque su aspecto recuerda al pasto común, el olor cítrico de sus hojas permite reconocerlo fácilmente." },

  { grupo: "costeras", nombre: "Mangle rojo", cientifico: "Rhizophora mangle", wiki: "Rhizophora_mangle", tag: "Raíces zancudas", descripcion: "El mangle rojo es un árbol de manglar reconocido por sus raíces aéreas o zancudas, que sostienen el tronco en suelos blandos y periódicamente inundados. Es una de las especies más características de las costas tropicales americanas.", ecologia: "Sus raíces crean estructuras donde se refugian peces jóvenes, crustáceos y otros organismos. También ayudan a atrapar sedimentos y reducen la energía del agua, contribuyendo a la protección de la línea costera.", uso: "Es fundamental para la conservación y restauración de manglares, además de tener gran importancia para la pesca y la protección de ecosistemas costeros.", habitat: "Orillas marinas, estuarios, ciénagas y zonas intermareales con agua salobre o salina.", curioso: "Las raíces zancudas forman una verdadera red tridimensional que funciona como refugio y vivero para organismos acuáticos." },
  { grupo: "costeras", nombre: "Mangle negro", cientifico: "Avicennia germinans", wiki: "Avicennia_germinans", tag: "Adaptado a la sal", descripcion: "El mangle negro es un árbol o arbusto de manglar que tolera condiciones salinas y suelos con poco oxígeno. Se distingue por los numerosos neumatóforos, pequeñas estructuras que sobresalen del suelo y ayudan al intercambio gaseoso de las raíces.", ecologia: "Contribuye a estabilizar el suelo, retener sedimentos y mantener hábitats para organismos costeros. Forma parte de los manglares junto con especies como el mangle rojo.", uso: "Su principal importancia actual está relacionada con la conservación de manglares, protección costera y mantenimiento de la biodiversidad.", habitat: "Manglares, estuarios y zonas costeras salobres. En Colombia es una especie nativa de las costas del Caribe y del Pacífico.", curioso: "Los neumatóforos pueden parecer pequeños lápices o raíces que salen verticalmente del lodo alrededor del árbol." },
  { grupo: "costeras", nombre: "Mangle zaragoza", cientifico: "Conocarpus erectus", wiki: "Conocarpus_erectus", tag: "Borde costero", descripcion: "El mangle zaragoza, también llamado mangle botón o botoncillo, es un arbusto o árbol pequeño que suele ocupar zonas más terrestres del ecosistema costero. Sus frutos agrupados tienen una apariencia característica parecida a pequeños botones.", ecologia: "Puede contribuir a estabilizar suelos cercanos a la costa y forma parte de comunidades vegetales asociadas a manglares y zonas salobres.", uso: "Tiene importancia en restauración, protección de bordes costeros y paisajismo de zonas cálidas. En Colombia es una especie nativa de la región Caribe y otras zonas costeras.", habitat: "Bordes de manglares, playas, salitrales y costas tropicales, especialmente en lugares con influencia marina pero algo más alejados del agua permanentemente inundada.", curioso: "Aunque recibe el nombre de mangle en Colombia, su posición ecológica suele ser más terrestre que la de especies como Rhizophora mangle." },
  { grupo: "costeras", nombre: "Cocotero", cientifico: "Cocos nucifera", wiki: "Cocos_nucifera", tag: "Palma tropical", descripcion: "El cocotero es una palma de tronco único, hojas largas y frutos grandes conocidos como cocos. Es una de las plantas más representativas de los paisajes tropicales y puede crecer cerca del mar cuando las condiciones del suelo y la humedad son adecuadas.", ecologia: "Proporciona alimento y refugio para distintos organismos y forma parte de paisajes costeros tropicales. Su presencia no significa que sea una especie nativa de todas las costas donde se cultiva.", uso: "Del fruto se obtienen agua de coco, pulpa, aceite y otros productos; las fibras y otras partes de la planta también tienen numerosos usos.", habitat: "Regiones tropicales húmedas y zonas costeras cálidas. En Colombia está introducido y ampliamente cultivado.", curioso: "El fruto tiene una cubierta fibrosa que puede favorecer su flotación y dispersión por el agua, aunque gran parte de su distribución actual también se debe al cultivo humano." },
  { grupo: "costeras", nombre: "Pasto salado", cientifico: "Sporobolus virginicus", wiki: "Sporobolus_virginicus", tag: "Vegetación costera", descripcion: "El pasto salado es una gramínea perenne que forma matas y se extiende mediante rizomas. Está especialmente adaptado a ambientes costeros y puede soportar condiciones de salinidad que dificultan el crecimiento de muchas otras plantas.", ecologia: "Sus raíces y rizomas ayudan a mantener el suelo y disminuir el movimiento de arena y sedimentos. Es una especie importante en comunidades vegetales costeras.", uso: "Puede ser útil en proyectos de restauración y estabilización de suelos costeros. También tiene valor como forraje en determinados contextos.", habitat: "Playas, dunas, salitrales y otros ambientes costeros tropicales y subtropicales. En Colombia es nativo y está registrado en departamentos del Caribe como Atlántico, Bolívar, La Guajira, Magdalena y Sucre.", curioso: "Su presencia en el Caribe colombiano hace que sea una especie mucho más específica y verificable para representar la vegetación costera que una categoría genérica de 'pastos costeros'." },

  { grupo: "frutales", nombre: "Mango", cientifico: "Mangifera indica", wiki: "Mangifera_indica", tag: "Fruto tropical", descripcion: "El mango es un árbol perenne de copa densa que puede alcanzar gran tamaño. Sus flores pequeñas aparecen en grandes inflorescencias y, después de la polinización, se desarrollan frutos de formas, tamaños, aromas y colores muy variables según la variedad.", ecologia: "Sus flores y frutos ofrecen recursos para insectos y animales que se alimentan de ellos. Un mango adulto también proporciona sombra y refugio dentro de los jardines y huertos.", uso: "Es uno de los principales frutales tropicales y se consume fresco o en jugos, dulces, salsas y postres. También tiene importancia económica y agrícola.", habitat: "Zonas tropicales cálidas, patios, fincas y huertas con buena iluminación y suelos bien drenados.", curioso: "Existen cientos de variedades de mango con diferencias notables en sabor, fibra, tamaño y época de cosecha." },
  { grupo: "frutales", nombre: "Papaya", cientifico: "Carica papaya", wiki: "Carica_papaya", tag: "Fruto de crecimiento rápido", descripcion: "La papaya es una planta de tallo generalmente único, blando y poco ramificado, con hojas grandes concentradas hacia la parte superior. Produce frutos carnosos que pueden ser verdes o anaranjados según su madurez.", ecologia: "Sus flores son visitadas por insectos y sus frutos pueden ser aprovechados por diferentes animales. Su crecimiento rápido permite incorporarla con facilidad en huertas tropicales.", uso: "El fruto maduro se consume fresco, en batidos, jugos y preparaciones alimentarias. El fruto verde también se utiliza en algunas cocinas.", habitat: "Huertas y patios tropicales con suficiente sol, humedad y buen drenaje. Es nativa de Mesoamérica y actualmente se cultiva ampliamente en Colombia.", curioso: "Kew la registra como nativa y cultivada en Colombia, con presencia en varias regiones del país." },
  { grupo: "frutales", nombre: "Guayaba", cientifico: "Psidium guajava", wiki: "Psidium_guajava", tag: "Fruto aromático", descripcion: "La guayaba es un arbusto o árbol pequeño de corteza característica y hojas aromáticas. Sus frutos pueden tener pulpa blanca, rosada o rojiza y contienen numerosas semillas pequeñas.", ecologia: "Los frutos sirven de alimento para personas y animales, facilitando la dispersión de semillas. Sus flores también ofrecen recursos para insectos.", uso: "Se utiliza en consumo fresco, jugos, mermeladas, dulces y bocadillos. Es un frutal muy conocido en Colombia y otros países tropicales.", habitat: "Zonas tropicales y subtropicales, huertas, potreros y áreas alteradas. Tolera una variedad relativamente amplia de condiciones.", curioso: "La corteza puede desprenderse en placas y dejar zonas de color verdoso, cobrizo o pardo, una característica útil para reconocer el árbol." },
  { grupo: "frutales", nombre: "Guanábana", cientifico: "Annona muricata", wiki: "Annona_muricata", tag: "Pulpa blanca", descripcion: "La guanábana es un árbol tropical de hojas verdes y frutos grandes, verdes y cubiertos por pequeñas protuberancias suaves. La pulpa madura es blanca, aromática y de sabor dulce con un toque ácido.", ecologia: "Sus flores y frutos forman parte de las interacciones ecológicas de los huertos tropicales. Los frutos pueden ser consumidos por animales y seres humanos.", uso: "La pulpa se utiliza en jugos, batidos, helados y postres. La especie también tiene numerosos usos tradicionales, pero estos no deben confundirse con tratamientos médicos comprobados.", habitat: "Climas tropicales cálidos, preferiblemente con buena humedad y suelos fértiles y drenados.", curioso: "A diferencia de otros frutos espinosos, las protuberancias de la guanábana son blandas y no funcionan como espinas rígidas." },
  { grupo: "frutales", nombre: "Maracuyá", cientifico: "Passiflora edulis", wiki: "Passiflora_edulis", tag: "Enredadera frutal", descripcion: "El maracuyá es una enredadera que utiliza zarcillos para sujetarse a soportes. Sus flores son muy complejas, con varias estructuras concéntricas, y posteriormente producen frutos aromáticos de pulpa jugosa y semillas.", ecologia: "Sus flores están adaptadas a la polinización por animales y sus frutos sirven como alimento para diferentes organismos. Los zarcillos le permiten ocupar espacios verticales sin desarrollar un tronco grueso.", uso: "Se cultiva principalmente por sus frutos, utilizados en jugos, bebidas, postres, salsas y otras preparaciones.", habitat: "Huertas, cercas, cultivos y jardines cálidos con soporte para trepar, buena iluminación y suelo bien drenado.", curioso: "El nombre del género Passiflora está relacionado con la historia cultural que los misioneros europeos asociaron con la compleja estructura de sus flores." }
];
    const grupos = {
      arboles: document.getElementById("grid-arboles"),
      ornamentales: document.getElementById("grid-ornamentales"),
      medicinales: document.getElementById("grid-medicinales"),
      costeras: document.getElementById("grid-costeras"),
      frutales: document.getElementById("grid-frutales")
    };

    plantas.forEach((planta, index) => {
      const tarjeta = document.createElement("article");
      tarjeta.className = "tarjeta";
      tarjeta.style.transitionDelay = `${(index % 5) * 0.08}s`;

      tarjeta.innerHTML = `
        <div class="imagen-caja">
          <img src="${imagenFallback}" alt="${planta.nombre} (${planta.cientifico})" data-wiki="${planta.wiki}">
        </div>
        <div class="contenido">
          <span class="tag">${planta.tag}</span>
          <h3>${planta.nombre}</h3>
          <p class="cientifico"><em>${planta.cientifico}</em></p>
          <p>${planta.descripcion}</p>
        </div>
      `;

      tarjeta.addEventListener("click", () => abrirModal(planta));
      grupos[planta.grupo].appendChild(tarjeta);
    });

    async function cargarImagenWikipedia(planta) {
      const endpoints = [
        `https://es.wikipedia.org/api/rest_v1/page/summary/${planta.wiki}`,
        `https://en.wikipedia.org/api/rest_v1/page/summary/${planta.wiki}`
      ];

      for (const url of endpoints) {
        try {
          const respuesta = await fetch(url);
          if (!respuesta.ok) continue;
          const datos = await respuesta.json();
          if (datos.thumbnail && datos.thumbnail.source) {
            return datos.thumbnail.source.replace(/\/\d+px-/, "/700px-");
          }
        } catch (error) {}
      }

      return imagenFallback;
    }

    async function cargarImagenes() {
      for (const planta of plantas) {
        planta.img = planta.imagenDirecta || await cargarImagenWikipedia(planta);
        document.querySelectorAll(`img[data-wiki="${planta.wiki}"]`).forEach((img) => {
          img.src = planta.img;
          img.onerror = () => {
            img.onerror = null;
            img.src = imagenFallback;
          };
        });
      }
    }

    cargarImagenes();

    function abrirModal(planta) {
      document.getElementById("modal-img").src = planta.img || imagenFallback;
      document.getElementById("modal-img").alt = planta.nombre;
      document.getElementById("modal-grupo").textContent = planta.tag;
      document.getElementById("modal-nombre").textContent = planta.nombre;
      document.getElementById("modal-cientifico").innerHTML = `<em>${planta.cientifico}</em>`;
      document.getElementById("modal-descripcion").textContent = planta.descripcion;
      document.getElementById("modal-ecologia").textContent = planta.ecologia;
      document.getElementById("modal-uso").textContent = planta.uso;
      document.getElementById("modal-habitat").textContent = planta.habitat;
      document.getElementById("modal-curioso").textContent = planta.curioso;
      document.getElementById("modal").classList.add("activo");
    }

    document.getElementById("cerrar").addEventListener("click", cerrarModal);

    document.getElementById("modal").addEventListener("click", function(event) {
      if (event.target === this) cerrarModal();
    });

    function cerrarModal() {
      document.getElementById("modal").classList.remove("activo");
    }

    const preguntasTrivia = [
      { pregunta: "¿Qué planta tiene raíces zancudas que sirven de refugio para peces jóvenes?", opciones: ["Mangle rojo", "Guácimo", "Cayena", "Papaya"], correcta: "Mangle rojo" },
      { pregunta: "¿Cuál de estas plantas es conocida por almacenar gel en sus hojas carnosas?", opciones: ["Sábila", "Roble morado", "Mango", "Trinitaria"], correcta: "Sábila" },
      { pregunta: "¿Qué árbol se reconoce por su floración rosada o morada?", opciones: ["Roble morado", "Campano", "Caracolí", "Cocotero"], correcta: "Roble morado" },
      { pregunta: "¿Qué planta aromática se usa comúnmente en bebidas calientes por su olor a limón?", opciones: ["Limoncillo", "Ixora", "Guayaba", "Mangle negro"], correcta: "Limoncillo" },
      { pregunta: "¿Cuál de estas plantas es una enredadera frutal con flores llamativas?", opciones: ["Maracuyá", "Ceiba blanca", "Heliconia", "Pastos costeros"], correcta: "Maracuyá" },
      { pregunta: "¿Qué planta ornamental suele cubrir muros o cercas con brácteas de colores vivos?", opciones: ["Trinitaria", "Papaya", "Guácimo", "Mangle zaragoza"], correcta: "Trinitaria" },
      { pregunta: "¿Cuál de estas plantas ayuda a fijar la arena y reducir la erosión en la costa?", opciones: ["Pastos costeros", "Albahaca", "Caña india", "Guanábana"], correcta: "Pastos costeros" },
      { pregunta: "¿Qué árbol tiene una copa extensa que da mucha sombra?", opciones: ["Campano", "Hierbabuena", "Ixora", "Limonaria"], correcta: "Campano" },
      { pregunta: "¿Qué planta produce frutos dulces y es muy popular en el Caribe?", opciones: ["Mango", "Mangle negro", "Cayena", "Heliconia"], correcta: "Mango" },
      { pregunta: "¿Qué planta tiene flores agrupadas y atrae mariposas?", opciones: ["Ixora", "Caracolí", "Cocotero", "Sábila"], correcta: "Ixora" }
    ];

    let preguntaActual = null;
    let puntos = 0;
    let correctas = 0;
    let intentos = 0;
    let rotacionRuleta = 0;

    const ruleta = document.getElementById("ruleta");
    const botonGirar = document.getElementById("girar");
    const preguntaTitulo = document.getElementById("pregunta-titulo");
    const preguntaTexto = document.getElementById("pregunta-texto");
    const opciones = document.getElementById("opciones");
    const resultado = document.getElementById("resultado");
    const score = document.getElementById("score");

    botonGirar.addEventListener("click", () => {
      botonGirar.disabled = true;
      resultado.textContent = "";
      opciones.innerHTML = "";
      preguntaTitulo.textContent = "La ruleta está girando...";
      preguntaTexto.textContent = "Observa dónde se detiene y prepárate para responder.";

      preguntaActual = preguntasTrivia[Math.floor(Math.random() * preguntasTrivia.length)];
      rotacionRuleta += 1080 + Math.floor(Math.random() * 360);
      ruleta.style.transform = `rotate(${rotacionRuleta}deg)`;

      setTimeout(() => {
        mostrarPregunta();
        botonGirar.disabled = false;
      }, 3100);
    });

    function mostrarPregunta() {
      preguntaTitulo.textContent = "Pregunta de la ruleta";
      preguntaTexto.textContent = preguntaActual.pregunta;
      opciones.innerHTML = "";

      preguntaActual.opciones.forEach((opcion) => {
        const boton = document.createElement("button");
        boton.textContent = opcion;
        boton.addEventListener("click", () => revisarRespuesta(boton, opcion));
        opciones.appendChild(boton);
      });
    }

    function revisarRespuesta(botonSeleccionado, respuesta) {
      const botones = opciones.querySelectorAll("button");
      botones.forEach((boton) => boton.disabled = true);

      intentos++;

      if (respuesta === preguntaActual.correcta) {
        puntos += 10;
        correctas++;
        botonSeleccionado.classList.add("correcta");
        resultado.textContent = "¡Correcto! Ganaste 10 puntos.";
        score.classList.add("activo");
      } else {
        botonSeleccionado.classList.add("incorrecta");
        resultado.textContent = `Casi. La respuesta correcta era: ${preguntaActual.correcta}.`;

        botones.forEach((boton) => {
          if (boton.textContent === preguntaActual.correcta) {
            boton.classList.add("correcta");
          }
        });
      }

      document.getElementById("puntos").textContent = puntos;
      document.getElementById("correctas").textContent = correctas;
      document.getElementById("intentos").textContent = intentos;
    }

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
        }
      });
    }, { threshold: 0.16 });

    document.querySelectorAll(".scroll-reveal, .tarjeta").forEach((elemento) => {
      observador.observe(elemento);
    });
