// Lista de palavras selecionadas
const palavrasSelecionadas = [
  "Kafka", // Franz Kafka "Um escritor que transformou a angústia em arte surreal."
  "Twain", // Mark Twain "Um contador de histórias que capturou a essência da aventura americana."
  "James", // Henry James "Um romancista que disseca a moralidade em seus enredos."
  "Jorge", // Jorge Luis Borges "Uma figura literária cujos sonhos transcendem a realidade."
  "Hesse", // Hermann Hesse "Um autor que busca a verdade nas camadas da experiência humana."
  "Woolf", // Virginia Woolf "Uma escritora que desafia as convenções do gênero literário."
  "Camus", // Albert Camus "Um autor cujas histórias ressoam com o desejo de liberdade."
  "Dante", // Dante Alighieri "Um filósofo cujas reflexões ecoam através do tempo."
  "Plath", // Sylvia Plath "Uma mente criativa que busca sentido na trivialidade."
  "Homer", // Homero "Um poeta que coloca a natureza e o humano em diálogo."
  "Byron", // Lord Byron "Um romancista que pinta retratos da vida contemporânea."
  "Freud", // Sigmund Freud "Um autor que transforma experiências pessoais em literatura."
  "Angel", // Charles Angel "Um romancista que narra as complexidades do amor."
  "Sagan", // Carl Sagan "Um escritor que investiga a identidade e a memória."
  "Fazer", // O Fazer (e a ação) "Um escritor que questiona a natureza da realidade."
  "Tango", // Tango e paixão "Um escritor que transforma o mundo em literatura."
  "Silva", // Silva é um sobrenome comum "Um autor que narra histórias universais com toques de familiaridade."
  "Clube", // Clube da Luta "Um poeta que busca a verdade em suas palavras."
  "Rimas", // Rimas da Alma "Um escritor que transforma a vida em poesia."
  "Frodo", // Frodo Bolseiro "Um hobbit que carrega o destino do mundo em suas mãos."
  "Cecie", // Cecily Cardew "Uma personagem que desafia convenções em 'A Importância de Ser Sério'."
  "Rhett", // Rhett Butler "Um charmoso aventureiro de 'E o Vento Levou'."
  "Flaub", // Gustave Flaubert "Um autor que reflete sobre a condição humana através da ficção."
  "Salem", // Salem Saberhagen "O gato falante da série 'Sabrina, a Aprendiz de Feiticeira'."
  "Hobbs", // Calvin e Hobbes "Um tigre que é amigo e companheiro de Calvin."
  "Morte", // Morte "Uma figura recorrente na literatura que personifica o fim."
  "Huckl", // Huckleberry Finn "Um jovem aventureiro em busca de liberdade."
  "Mansy", // Mansy "Uma personagem que reflete sobre as complexidades da vida."
  "Raven", // O Corvo "Uma criatura mística que simboliza a sabedoria."
  "Golem", // Golem "Uma criatura feita de barro que simboliza proteção."
  "Atlas", // Atlas "O titã que carrega o mundo nas costas."
  "Viver", // O Viver "Um conceito que explora a essência da existência."
  "Odete", // Odete Roitman "Uma personagem icônica da novela brasileira."
  "Peter", // Peter Pan "O menino que não quer crescer e vive em Nunca Jamais."
  "Jules", // Jules Verne "Um autor pioneiro da ficção científica."
  "Amigo", // O Amigo "Um companheiro que representa lealdade e amor."
  "Trist", // Tristão "Um personagem de amor e tragédia na literatura."
  "Donne", // John Donne "Um poeta que explora o amor e a espiritualidade."
  "Iliad", // A Ilíada "Um poema épico que narra a guerra de Troia."
  "Furia", // Fúria "Uma força poderosa que representa a raiva e o desespero."
  "Spock", // Spock "O vulcano lógico da série Star Trek."
  "Minas", // Minas Tirith "A cidade onde ocorrem batalhas épicas em 'O Senhor dos Anéis'."
  "Ficou", // Ficou "Um personagem que representa mudanças e transformações."
  "Rambo", // John Rambo "Um veterano de guerra que luta contra a injustiça."
  "Holly", // Holly Golightly "A protagonista de 'Bonequinha de Luxo'."
  "Marty", // Marty McFly "O protagonista de 'De Volta para o Futuro'."
  "Dobby", // Dobby "O elfo doméstico leal da série Harry Potter."
  "Fredo", // Fredo Corleone "Um personagem da trilogia O Poderoso Chefão."
  "Havoc", // Havoc "Um personagem que representa o caos e a destruição."
  "Nadia", // Nadia "Uma mulher forte e determinada em busca de sua identidade."
  "Fargo", // Fargo "Um personagem enigmático em uma narrativa de crime."
  "Alita", // Alita "A heroína cibernética de 'Battle Angel Alita.'"
  "Molly", // Molly "Uma personagem carismática que enfrenta desafios com coragem."
  "Santo", // Santo "Um personagem que representa a luta entre o bem e o mal."
  "Klaus", // Klaus "Um mago poderoso em várias histórias de fantasia."
  "Faust", // Faust "O protagonista que vende sua alma em troca de conhecimento."
  "Luzia", // Luzia "Uma personagem que simboliza esperança e transformação."
  "Bruno", // Bruno "Um menino que busca entender o mundo ao seu redor."
  "Niven", // Niven "Um autor renomado de ficção científica."
  "Umber", // Umber "Um personagem misterioso que aparece em narrativas de fantasia."
  "Simba", // Simba "O protagonista de 'O Rei Leão', em busca de seu lugar no mundo."
  "Apolo", // Apolo "O deus da luz e das artes na mitologia grega."
  "Saulo", // Saulo "Uma figura transformadora em histórias de fé e redenção."
  "Icaro", // Ícaro "O jovem que voou perto do sol em busca de liberdade."];
];

// Lista de dicas correspondentes
const dicas = [
  "Um autor cujas histórias desvendam as angústias e absurdos da vida moderna, transformando a angústia em arte surreal.", // Kafka
  "Um mestre contador de histórias que captura a essência da aventura americana, explorando temas de amizade e liberdade.", // Twain
  "Um romancista que disseca a moralidade e a complexidade das relações humanas em seus enredos intrincados.", // James
  "Uma figura literária cujo universo de sonhos e labirintos transcende a realidade e provoca reflexões sobre o infinito.", // Jorge
  "Um autor que busca a verdade nas camadas da experiência humana, explorando temas de auto-descoberta e espiritualidade.", // Hesse
  "Uma escritora que desafia as convenções do gênero literário, utilizando a técnica do fluxo de consciência para explorar a psicologia feminina.", // Woolf
  "Um autor cujas histórias ressoam com o desejo de liberdade, questionando a natureza da existência e o absurdo da vida.", // Camus
  "Um filósofo e poeta cujas reflexões sobre moralidade e redenção ecoam através do tempo, especialmente em sua obra-prima 'A Divina Comédia'.", // Dante
  "Uma mente criativa que busca sentido na trivialidade e na angústia existencial, revelando a profundidade da experiência feminina.", // Plath
  "Um poeta épico que coloca a natureza e o humano em diálogo, narrando grandes aventuras e conflitos.", // Homer
  "Um romancista e poeta que pinta retratos vívidos da vida contemporânea, com ênfase em temas de amor e rebelião.", // Byron
  "Um autor que transforma experiências pessoais e psicológicas em literatura, explorando a mente humana.", // Freud
  "Um romancista que narra as complexidades do amor e das relações humanas com sensibilidade e profundidade.", // Angel
  "Um escritor que investiga a identidade e a memória, unindo ciência e filosofia em suas reflexões.", // Sagan
  "Um escritor que questiona a natureza da realidade e a essência da ação em sua narrativa.", // Fazer
  "Um escritor que transforma o mundo em literatura, explorando as intersecções entre a arte e a vida.", // Tango
  "Um autor que narra histórias universais com toques de familiaridade, explorando a vida cotidiana.", // Silva
  "Um poeta que busca a verdade em suas palavras, questionando a sociedade e suas normas.", // Clube
  "Um escritor que transforma a vida em poesia, capturando a essência das emoções humanas.", // Rimas
  "Um hobbit que carrega o destino do mundo em suas mãos, simbolizando coragem e lealdade em sua jornada.", // Frodo
  "Uma personagem que desafia convenções e expectativas em 'A Importância de Ser Sério', representando a liberdade feminina.", // Cecie
  "Um charmoso aventureiro que vive grandes paixões e desafios em 'E o Vento Levou'.", // Rhett
  "Um autor que reflete sobre a condição humana através da ficção, explorando temas de amor e insatisfação.", // Flaub
  "O gato falante da série 'Sabrina, a Aprendiz de Feiticeira', trazendo humor e sabedoria.", // Salem
  "Um tigre que é amigo e companheiro de Calvin, representando a imaginação e a aventura da infância.", // Hobbs
  "Uma figura recorrente na literatura que personifica o fim, mas também a continuidade da vida e da memória.", // Morte
  "Um jovem aventureiro em busca de liberdade, desafiando normas sociais e explorando a natureza.", // Huckl
  "Uma personagem que reflete sobre as complexidades da vida e das escolhas que fazemos.", // Mansy
  "Uma criatura mística que simboliza a sabedoria e o mistério, aparecendo como um guia em diversas narrativas.", // Raven
  "Uma criatura feita de barro que simboliza proteção e a busca por humanidade em um mundo brutal.", // Golem
  "O titã que carrega o mundo nas costas, simbolizando força e responsabilidade.", // Atlas
  "Um conceito que explora a essência da existência, questionando o significado da vida.", // Viver
  "Uma personagem icônica da novela brasileira, representando a luta e a ambição feminina.", // Odete
  "O menino que não quer crescer e vive em Nunca Jamais, simbolizando a inocência e a imaginação.", // Peter
  "Um autor pioneiro da ficção científica, cujas obras exploram novas fronteiras do conhecimento e da aventura.", // Jules
  "Um companheiro que representa lealdade e amor, sempre presente nas grandes histórias.", // Amigo
  "Um personagem de amor e tragédia, simbolizando a busca por conexão e sentido na vida.", // Trist
  "Um poeta que explora o amor e a espiritualidade, refletindo sobre a condição humana.", // Donne
  "Um poema épico que narra a guerra de Troia, explorando temas de heroísmo e destino.", // Iliad
  "Uma força poderosa que representa a raiva e o desespero, manifestando-se em momentos de conflito.", // Furia
  "O vulcano lógico da série Star Trek, simbolizando a razão e a lógica em um universo caótico.", // Spock
  "A cidade onde ocorrem batalhas épicas em 'O Senhor dos Anéis', um símbolo de resistência e esperança.", // Minas
  "Um personagem que representa mudanças e transformações, refletindo a natureza da vida e do tempo.", // Ficou
  "Um veterano de guerra que luta contra a injustiça, simbolizando coragem e resiliência.", // Rambo
  "A protagonista de 'Bonequinha de Luxo', representando o glamour e as complexidades da vida moderna.", // Holly
  "O protagonista de 'De Volta para o Futuro', simbolizando aventura e a importância das escolhas." , // Marty
  "O elfo doméstico leal da série Harry Potter, representando a amizade e a lealdade.", // Dobby
  "Um personagem da trilogia O Poderoso Chefão, simbolizando a complexidade das relações familiares.", // Fredo
  "Um personagem que representa o caos e a destruição, refletindo os conflitos internos da humanidade.", // Havoc
  "Uma mulher forte e determinada em busca de sua identidade, simbolizando coragem e autodescoberta.", // Nadia
  "Um personagem enigmático em uma narrativa de crime, representando a dualidade da natureza humana.", // Fargo
  "A heroína cibernética de 'Battle Angel Alita', simbolizando força e luta contra opressão.", // Alita
  "Uma personagem carismática que enfrenta desafios com coragem, simbolizando a luta pela justiça.", // Molly
  "Um personagem que representa a luta entre o bem e o mal, simbolizando esperanças e desafios.", // Santo
  "Um mago poderoso em várias histórias de fantasia, simbolizando a sabedoria e o poder.", // Klaus
  "O protagonista que vende sua alma em troca de conhecimento, explorando temas de ambição e redenção.", // Faust
  "Uma personagem que simboliza esperança e transformação, refletindo a busca por um futuro melhor.", // Luzia
  "Um menino que busca entender o mundo ao seu redor, simbolizando curiosidade e crescimento pessoal.", // Bruno
  "Um autor renomado de ficção científica, conhecido por suas ideias inovadoras e histórias cativantes.", // Niven
  "Um personagem misterioso que aparece em narrativas de fantasia, simbolizando o desconhecido.", // Umber
  "O protagonista de 'O Rei Leão', em busca de seu lugar no mundo, simbolizando crescimento e identidade.", // Simba
  "O deus da luz e das artes na mitologia grega, simbolizando a inspiração e a criatividade.", // Apolo
  "Uma figura transformadora em histórias de fé e redenção, refletindo a busca por um propósito.", // Saulo
  "O jovem que voou perto do sol em busca de liberdade, simbolizando os limites da ambição." // Icaro
  ];

// Função para sortear uma palavra e sua dica correspondente
function sortearPalavra() {
  const randomIndex = Math.floor(Math.random() * palavrasSelecionadas.length);
  const palavra = palavrasSelecionadas[randomIndex].toUpperCase();
  const dica = dicas[randomIndex];
  
  return {
    palavra,
    dica
  };
}

// Função para obter a palavra do dia
function getPalavraDoDia() {
  const { palavra, dica } = sortearPalavra();
  exibirDica(dica);
  return palavra;
}

// Função para exibir a dica no HTML
function exibirDica(dica) {
  const dicaElemento = document.getElementById("dica");
  if (dicaElemento) {
    dicaElemento.textContent = `Dica: ${dica}`;
  }
}

// Palavra do dia, sorteada
const palavraDoDia = getPalavraDoDia();

// Inicializa a variável tentativaAtual
let tentativaAtual = 1;

// Função para validar a palavra digitada pelo usuário
function validarPalavra(usuarioPalavra) {
  // Verifica se a palavra tem 5 letras
  return usuarioPalavra.length === 5;
}

// Exporta a palavra do dia, a lista de palavras e a tentativa atual
export {
  palavraDoDia,
  palavrasSelecionadas,
  dicas,
  tentativaAtual,
  validarPalavra
};
