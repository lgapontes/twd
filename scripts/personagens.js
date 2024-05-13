let DEBUG = false;

function selecionarSkills(skills,quantidade,callback) {
  if (quantidade == 0) {
    callback(skills,'');
  } else {
    let vetor = [...Array(quantidade).keys()];
    skills = JSON.parse(JSON.stringify(skills));
    let retorno = '';

    vetor.forEach((item, i) => {
      let index = Math.floor(Math.random() * skills.length);
      retorno += (retorno == '') ? skills[index] : `, ${skills[index]}`;
      skills.splice(index, 1);

      if (i == (vetor.length - 1)) {
        callback(skills,retorno);
      }
    });
  }
}

const ATTRIBUTES = [
  'Strength', // 0
  'Agility', // 1
  'Wits', // 2
  'Empathy', // 3
];

const SKILLS = [
  'Close Combat', // 0
  'Endure', // 1
  'Force', // 2
  'Mobility', // 3
  'Ranged Combat', // 4
  'Stealth', // 5
  'Scout', // 6
  'Survival', // 7
  'Tech', // 8
  'Leadership', // 9
  'Manipulation', // 10
  'Medicine', // 11
];

const ARQUETIPOS = {
  'CRIMINOSO (THE CRIMINAL)': {
    attribute: ATTRIBUTES[0],
    skill: SKILLS[0],
    talents: ['Threatening Posture', 'Fixer', 'Fights Dirty',],
    issues: ['Eu nunca obedeço à autoridade', 'Viciado em drogas', 'Vergonha do meu passado',],
    drives: ['Ninguém dá um soco em mim e sai impune', 'Ódio', 'Vou encontrar minhas irmãs',],
    gears: ['Revólver grande', 'Machado', 'Gazua', 'Moto', 'Espingarda', 'Estoque de drogas e remédios',],
  },
  'MÉDICO (THE DOCTOR)': {
    attribute: ATTRIBUTES[3],
    skill: SKILLS[11],
    talents: ['Emergency Medicine', 'Doctor/Patient Hierarchy', 'Seen it All',],
    issues: ['Amargo', 'Jurou ajudar', 'Amor sem resposta',],
    drives: ['Medo de morrer', 'Propósito maior', 'Vou encontrar minha esposa',],
    gears: ['Equipamento médico básico', 'Medicamentos e drogas', 'Lança (bisturi preso a uma vara)',  'Carro',  'Diário', 'Pistola',],
  },
  'FAZENDEIRO (THE FARMER)': {
    attribute: ATTRIBUTES[0],
    skill: SKILLS[2],
    talents: ['Tracker', 'Tough as Nails', 'Living off the Land',],
    issues: ['Raiva', 'Doente', 'Dogmático',],
    drives: ['Eu faço o que é certo', 'Nunca desiste', 'Jesus caminha comigo',],
    gears: ['Espingarda', 'Machado', 'Jipe', 'Caixa de ferramentas', 'Tenda', 'Equipamento de sobrevivência',],
  },
  'DONO DE CASA (THE HOMEMAKER)': {
    attribute: ATTRIBUTES[0],
    skill: SKILLS[1],
    talents: ['Innocent Face', 'Back Against the Wall', 'Rather Die than Break',],
    issues: ['Sanguinário', 'Alcoólatra', 'Anseia por atenção e amor',],
    drives: ['Jurei nunca mais ser vítima',  'Já suportou o inferno', 'Não vou desistir do meu sonho',],
    gears: ['Pá', 'Arco e flechas', 'Saco com ervas medicinais', 'Analgésicos', 'Tenda', 'Carro',],
  },
  'CRIANÇA (THE KID)': {
    attribute: ATTRIBUTES[1],
    skill: SKILLS[3],
    talents: ['Knife Fighter', 'Stubborn', 'A Child of this World',],
    issues: ['Medo do escuro', 'As pessoas me tratam como uma criança', 'Não deixarei ninguém chegar perto',],
    drives: ['Meu pai pensa que sou forte', 'As crianças crescerão para governar este mundo', 'Protegerei meus amigos',],
    gears: ['Pistola com silenciador caseiro', 'Lança', 'Equipamento de futebol americano (valor de armadura 4)', 'Scooter', '1D6 Molotov',],
  },
  'APLICADOR DA LEI (THE LAW ENFORCER)': {
    attribute: ATTRIBUTES[2],
    skill: SKILLS[6],
    talents: ['Steady Hands', 'Watchful', 'Moral Compass',],
    issues: ['Não confia em estranhos', 'Depressivo', 'Assumo riscos para proteger meu filho',],
    drives: ['Faz o que é preciso', 'Eu sou a lei', 'Construiremos um novo mundo',],
    gears: ['Equipamento de choque (nível de armadura 6)', 'Revólver', 'Espingarda', 'Machado', 'Rifle de assalto', 'Crachá de cargo'],
  },
  'NINGUÉM (THE NOBODY)': {
    attribute: ATTRIBUTES[1],
    skill: SKILLS[5],
    talents: ['Speed Freak', 'Wallflower', 'Gatherer',],
    issues: ['Com medo de falar o que penso', 'Eu não me importo se eu viver', 'Cleptomaníaco',],
    drives: ['Eu não posso ser morto', 'Esta é minha chance', 'Amor',],
    gears: ['Carro de entrega de pizza', 'Facão', 'Frigideira', 'Binóculos', 'Saco de dormir', 'Vara de pesca',],
  },
  'EXPLORADOR (THE OUTCAST)': {
    attribute: ATTRIBUTES[2],
    skill: SKILLS[7],
    talents: ['Knows All the Tricks', 'Scavenger', 'Lone Wolf',],
    issues: ['Alcoólico', 'As pessoas não gostam de mim', 'Comportamento estranho',],
    drives: ['Eu sou um sobrevivente', 'Esta é minha nova família', 'Anseia por vingança',],
    gears: ['1d6 Coquetéis Molotov', 'Pistola', 'Lança', 'Algemas', 'Armadura de tecido e jornais velhos (nível 4)', '1d6 Garrafas de aguardente',],
  },
  'POLÍTICO (THE POLITICIAN)': {
    attribute: ATTRIBUTES[3],
    skill: SKILLS[10],
    talents: ['Recruiter', 'Mind Games', 'Right Word at the Right Time',],
    issues: ['Eu nunca peço desculpas', 'Aterrorizado com mortos-vivos', 'Prometo mais do que posso cumprir',],
    drives: ['Eu vou liderá-los', 'Meus ancestrais lutaram muito', 'Este é um novo começo',],
    gears: ['Rifle de assalto', 'Garrafa de champanhe', 'Limusine à prova de balas (+2 armadura)', 'Rádio de manivela', 'Notas para um livro sobre esta nova era', 'Duas facas',],
  },
  'PREGADOR (THE PREACHER)': {
    attribute: ATTRIBUTES[3],
    skill: SKILLS[9],
    talents: ['Shepherd', 'Guarded by a Higher Power', 'Preacher',],
    issues: ['Com medo do conflito', 'Delirante', 'Egoísta',],
    drives: ['Eu ando com o Senhor', 'Faça as pazes', 'Estes são os últimos dias',],
    gears: ['Bíblia', 'Lança caseira', 'Guitarra', 'Scooter', 'Cruz de ferro', 'Vinho e pão de altar',],
  },
  'CIENTISTA (THE SCIENTIST)': {
    attribute: ATTRIBUTES[2],
    skill: SKILLS[8],
    talents: ['Intuition', 'Techno Babbler', 'Handy',],
    issues: ['Odioso', 'Compreende o mundo com lógica, não com emoções', 'Moralmente flexível',],
    drives: ['Vou salvar todos nós', 'Medo de morrer', 'Sempre há uma chance',],
    gears: ['Marreta', 'Pistola', 'Lanterna', 'Tenda', 'Fogão portátil com gás e isqueiro', 'Equipamento médico básico',],
  },
  'SOLDADO (THE SOLDIER)': {
    attribute: ATTRIBUTES[2],
    skill: SKILLS[4],
    talents: ['Disillusioned', 'Eye on the Ball', 'Suppressive Fire',],
    issues: ['Eu não vou matar outro ser humano', 'Eu sei o que é melhor', 'Eu protejo os fracos',],
    drives: ['Eu vi meu amigo sendo mordido', 'Vou encontrar uma maneira de resolver isso', 'Disciplina',],
    gears: ['Rifle de assalto', 'Baioneta', '1d6 Granadas de mão', 'Binóculos', 'Equipamento médico básico', 'Pistola',],
  },
};

const TALENTS = {
  'Threatening Posture': 'Você pode usar Force em vez de Manipulation ao ameaçar alguém. Você arruinou a vida de alguém.',
  'Fixer': 'Você ganha +2 em Manipulation quando negocia um acordo. Você foi muito bem em uma negociação.',
  'Fights Dirty': 'Quando você luta desarmado, você causa +1 de dano. Você matou alguém com as próprias mãos.',
  'Emergency Medicine': 'Ganhe +2 em Medicine ao estabilizar um ferimento crítico que precise de equipamento médico básico. Você trabalhava em um pronto-socorro.',
  'Doctor/Patient Hierarchy': 'Quando você usa Manipulation contra alguém que está ferido, você recebe um bônus igual ao número de Pontos de Vida que ele sofreu em dano. De alguma forma, você usou um de seus pacientes para seu próprio benefício.',
  'Seen it All': 'Você não fica estressado ao ver alguém ser ferido, atormentado ou até mesmo quebrado. Você tentou salvar seu amigo ferido.',
  'Innocent Face': 'Você ganha +2 em Manipulation quando age inocentemente na frente de um estranho. Você fez alguém acreditar que você era fraco.',
  'Back Against the Wall': 'Quando você luta contra todas as probabilidades e os inimigos parecem estar vencendo, você causa +1 de dano em todos os ataques. Você revidou.',
  'Rather Die than Break': 'Uma vez por sessão, depois de testar uma perícia, você pode optar por perder um ponto de Saúde para obter um sucesso (extra) naquele teste de perícia. Você precisa ser capaz de explicar, no jogo, como você foi prejudicado pela situação. Você se sacrificou por um propósito maior.',
  'Knife Fighter': 'Você inflige +1 de dano quando luta com uma faca. Você esfaqueou alguém.',
  'Stubborn': 'Seu Drive lhe dá um bônus de +3 em vez de +2. Você não desistiu.',
  'A Child of this World': 'Você não fica estressado quando vê alguém ser mordido. Alguém que você amava foi mordido.',
  'Steady Hands': 'Uma vez em cada sessão você pode optar por não lançar nenhum dado de estresse em um teste de perícia. Você se manteve firme apesar da extrema pressão.',
  'Watchful': 'Você pode usar o Scout para aprender a dinâmica de um grupo de pessoas e as oportunidades e riscos nele contidos. Você precisa passar algum tempo com eles. Dessa forma, você poderá aprender tanto sobre problemas regulares quanto sobre problemas secretos. Você previu o perigo.',
  'Moral Compass': 'Quando você se coloca em perigo para defender o que é certo, você alivia um ponto do estresse. Você fez o que tinha que fazer.',
  'Tracker': 'Ganhe +2 em Survival ao rastrear alguém ou tentar esconder seus próprios rastros. Você rastreou alguém ou algo assim.',
  'Tough as Nails': 'Ganhe +2 para Endure quando você passar fome ou trabalhar duro. Você teve que se esforçar além de seus próprios limites.',
  'Living off the Land': 'Ganhe +2 em Tech ao trabalhar em projetos que aumentam a Capacity do seu refúgio. Você ganhava a vida com a terra.',
  'Speed Freak': 'Ganhe +2 ao usar Mobility para dirigir um veículo. Você ganhou uma corrida.',
  'Wallflower': 'Você não precisa escolher um único NPC como seu NPC Âncora. Em vez disso, todo o grupo é a sua âncora. Você não precisa lidar com seu medo se algum deles morrer, desde que pelo menos um deles permaneça de pé. Você fazia parte de um grupo, sem que nenhum deles realmente notasse você.',
  'Gatherer': 'Você ganha +2 em Stealth quando está sozinho. Você trouxe comida que manteve outros vivos.',
  'Knows All the Tricks': 'Você pode usar Stealth em vez de Manipulation quando mente. Você enganou alguém que tentou dominar você.',
  'Scavenger': 'Quando você vasculha e testa Survival, você recebe +2 rações para cada sucesso extra em vez de +1. Você sobreviveu com nada.',
  'Lone Wolf': 'Você pode ter a si mesmo como uma de suas duas âncoras. Você foi traído por alguém em quem confiava.',
  'Recruiter': 'Você pode usar Leadership em vez de Manipulation quando falar em defesa de sua causa. Você conquistou alguém para o seu lado.',
  'Mind Games': 'Você alivia um estresse quando consegue manipular alguém com sucesso. Você quebrou seu oponente em um debate.',
  'Right Word at the Right Time': 'Quando você tem sucesso com Leadership, você obtém um sucesso extra automático. Você os tinha na palma da sua mão.',
  'Shepherd': 'Qualquer pessoa pode usá-lo como âncora quando precisar aliviar o estresse, mesmo que você não seja a âncora deles. Você cuidava do seu rebanho.',
  'Guarded by a Higher Power': 'Quando você lança um dado aleatório para ver se foi atingido ou mordido, você pode jogar novamente uma vez. Você foi salvo contra todas as probabilidades.',
  'Preacher': 'Ganhe +2 em Leadership ao tentar influenciar um grupo de pessoas. Eles seguiram você.',
  'Intuition': 'Uma vez por sessão de jogo, você pode perguntar ao Mestre sobre como as coisas no mundo do jogo funcionam e estão relacionadas, para obter algumas informações úteis ou sugestões sobre como proceder. Você enfrentou um desafio impossível.',
  'Techno Babbler': 'Você pode usar Tech em vez de Manipulation ao discutir assuntos complexos. Você usou a ciência para conseguir o que queria.',
  'Handy': 'Com um pouco de tempo e algumas ferramentas, você pode consertar a maioria das coisas – mesmo que não tenha as peças certas. Você também ganha +2 em Tech ao consertar coisas como um projeto. Alguém lhe ensinou a consertar e construir coisas.',
  'Disillusioned': 'Você não se estressa ao ver outras pessoas cometerem atos brutais de violência, ou quando você mesmo os comete. Você viu um grande sofrimento.',
  'Eye on the Ball': 'Alivie um estresse toda vez que uma ameaça ou inimigo for derrotado ou superado. Você fez o que tinha que ser feito.',
  'Suppressive Fire': 'Você pode atacar até três inimigos com o mesmo ataque ao usar o Combate à Distância, mas todos eles sofrem um ponto a menos de dano e você não pode adicionar dano de sucessos extras. Você foi treinado para ser um soldado.',
};

function rolarAtributos(eh_5,principal,callback) {
  let atributos = JSON.parse(JSON.stringify(ATTRIBUTES));
  let valor_principal = (eh_5 ? 5 : 4);
  let pontos = 13 - valor_principal;
  let retorno = {};
  retorno[principal] = valor_principal;

  // debug
  let soma = 0;
  soma = soma + valor_principal;

  let index_principal = atributos.indexOf(principal);
  atributos.splice(index_principal, 1);

  atributos.forEach((atributo, i) => {
    let valor = pontos;
    if (i < (atributos.length - 1)) {
      valor = Math.floor(Math.random() * 3) + 2;
    }

    pontos = pontos - valor;
    if (i == (atributos.length - 2)) {
      if (pontos == 1) {
        pontos = pontos + 1;
        valor = valor - 1;
      }
    }

    retorno[atributo] = valor;
    soma = soma + valor;

    if (i == (atributos.length - 1)) {
      let texto = `Strength: ${retorno['Strength']}, Agility: ${retorno['Agility']}, Wits: ${retorno['Wits']}, Empathy: ${retorno['Empathy']}`;
      if (DEBUG) {
        texto += `, P: ${pontos}, S: ${soma}`;
      }
      callback(texto);
    }
  });
}

function rolarSkills(principal,callback) {
  let skills = JSON.parse(JSON.stringify(SKILLS));
  let valor_principal = 3;
  let pontos = 12 - valor_principal;
  let retorno = {};
  retorno[principal] = valor_principal;

  // debug
  let soma = 0;
  soma = soma + valor_principal;

  let index_principal = skills.indexOf(principal);
  skills.splice(index_principal, 1);

  //let vetor = [...Array(skills).keys()];

  //vetor.forEach((elemento, i) => {
  while (skills.length > 0) {

    let index = Math.floor(Math.random() * skills.length);
    let skill_sorteada = skills[index];
    skills.splice(index, 1);

    let valor = 0;
    if (pontos > 0) {
      if (skills.length < 4) {
        valor = 2;
      } else {
        valor = Math.floor(Math.random() * 2) + 1;
      }
    }

    pontos = pontos - valor;

    if (pontos < 0) {
      valor = valor - Math.abs(pontos);
      pontos = 0;
    }

    retorno[skill_sorteada] = valor;
    soma = soma + valor;

    //if (i == (vetor.length - 1)) {
    if (skills.length == 0) {

      let formatar = JSON.parse(JSON.stringify(SKILLS));
      let texto = '';

      formatar.forEach((skill_formatada, j) => {
        texto += `${skill_formatada}: ${retorno[skill_formatada]}`;

        if (j == (formatar.length - 1)) {
          if (DEBUG) {
            texto += `, P: ${pontos}, S: ${soma}`;
          }
          callback(texto);
        } else {
          texto += ', ';
        }
      });

    }
  };
}

function formatar(itens,duas_linhas,callback) {
  let retorno = '';
  let quebra = '\n';
  if (duas_linhas) quebra = '\n\n';

  itens.forEach((item, i) => {
    retorno += `${item}${quebra}`;

    if (i == (itens.length - 1)) {
      callback(retorno);
    }
  });
}

function rolarItens(arquetipo,callback) {
  let quantidade = 3;
  let vetor = [...Array(quantidade).keys()];
  let lista = [];
  let gears = JSON.parse(JSON.stringify(ARQUETIPOS[arquetipo].gears));

  vetor.forEach((item, i) => {
    let index = Math.floor(Math.random() * gears.length);
    lista.push(gears[index]);
    gears.splice(index, 1);

    if (i == (vetor.length - 1)) {
      callback(lista);
    }
  });
}

function rolarItensBasicos(arquetipo,callback) {
  rolarItens(arquetipo, itens=>{

    let index = Math.floor(Math.random() * SCAVENGING.length);
    itens.push(SCAVENGING[index]);

    formatar(itens,false,callback);
  });
}

function rolarPersonagem(callback) {
  var arquetipos = Object.keys(ARQUETIPOS);
  let arquetipo = arquetipos[Math.floor(Math.random() * arquetipos.length)];
  let nome = NOMES[Math.floor(Math.random() * NOMES.length)];

  let drive = ARQUETIPOS[arquetipo].drives[Math.floor(Math.random() * ARQUETIPOS[arquetipo].drives.length)];
  let index_talento = Math.floor(Math.random() * ARQUETIPOS[arquetipo].talents.length);
  let talento = ARQUETIPOS[arquetipo].talents[index_talento];
  talento += '\n' + TALENTS[talento];

  let issues = ARQUETIPOS[arquetipo].issues;
  let issue = issues[Math.floor(Math.random() * issues.length)];
  let issue_eh_secreta = (Math.floor(Math.random() * 3) == 2);
  if (issue_eh_secreta) {
    issue += ' (segredo)';
  }

  let atributo_eh_5 = (Math.floor(Math.random() * 3) < 2);

  rolarAtributos(atributo_eh_5,ARQUETIPOS[arquetipo].attribute,atributos=>{
    rolarSkills(ARQUETIPOS[arquetipo].skill,skills=>{
      rolarItensBasicos(arquetipo,gears=>{
        let personagem = `Nome: ${nome}\n`;
        personagem += `Arquetipo: ${arquetipo}\n\n`;
        personagem += `Atributos: ${atributos}\n\n`;
        personagem += `Skills: ${skills}\n\n`;
        personagem += `Talento: ${talento}\n\n`;
        personagem += `Drive: ${drive}\n`;
        personagem += `Issue: ${issue}\n\n`;
        personagem += `Equipamentos:\n${gears}\n`;

        callback(personagem);
      });
    });
  });
}

const SCAVENGING = [
  'Escova de dentes pouco usada',
  'Álbum de fotos. Barack Obama aparece em uma foto',
  'Autógrafo de celebridades',
  'Diário escrito em espanhol por uma garota chamada Leticia',
  'Soldado de brinquedo',
  'Vários livros sobre a revolta de Varsóvia de 1944',
  'Pacote de velas',
  'CD, os maiores sucessos de uma maravilha de um só sucesso',
  'Relatório da Amnistia sobre o assédio a uma minoria étnica, impresso em papéis soltos',
  'Bolsa cheia de ouro e joias',
  'Chapéu engraçado',
  'Réplica feita à mão de um OVNI',
  'Crucifixo bem feito',
  'Relógio de pulso ainda funcional',
  'Hijabs (toca árabe) em muitas cores',
  'Dez plantas de batata que precisam ser regadas',
  'Balde com baterias não classificadas',
  'Acordeão',
  'Papagaio chamado James (gostaria muito de um biscoito)',
  'Caixa com fogos de artifício',
  'Câmera',
  'Binóculos',
  'Cachorrinho assustado',
  'Talheres com o olhar dos Illuminati',
  'Ótimas botas',
  'Harmônica',
  'Saco de dormir',
  'Fogão para rituais',
  'Conjunto com vinte especiarias diferentes',
  'Toalhas limpas',
  'Camisas e calças',
  'Meias limpas e secas',
  'Guarda-chuva',
  'Roupas quentes',
  'Pá',
  'Lanterna',
  'Enlatados, feijões cozidos (uma ração)',
  'Doces e refrigerante de laranja (uma ração)',
  'Hamster grelhado (uma ração)',
  'Enlatados, tomates suaves e pimentões verdes (uma ração)',
  'Enlatados, caldo de galinha (uma ração)',
  'Enlatados, pimentões em óleo (uma ração)',
  'Enlatados, almôndegas de espaguete (uma ração)',
  'Abridor de latas',
  'Enlatados, carne de porco e feijão (uma ração)',
  'Enlatados, carne bovina e feijão (uma ração)',
  'Enlatados, atum em água (uma ração)',
  'Enlatados, atum em óleo (uma ração)',
  'Enlatados, ravioli (uma ração)',
  'Afiador de facas',
  'Garrafa de Ketchup (uma ração)',
  'Enlatados, canja de galinha (uma ração)',
  'Enlatados, sopa de tomate (uma ração)',
  'Enlatados, sopa de frango com macarrão (uma ração)',
  'Pepinos em conserva (uma ração)',
  'Tomates verdes fritos (uma ração)',
  'Feijões cozidos (uma ração)',
  'Ovos em conserva (uma ração)',
  'Jalapenos (pimenta) em conserva (uma ração)',
  'Saquinho com nozes (uma ração)',
  'Garrafa de água e duas tostas (uma ração)',
  'Carne seca (uma ração)',
  'Saco de pipoca saborizada, creme de leite e cebola (uma ração)',
  'Enlatados, feijão (uma ração)',
  'Saco com passas e garrafa de refrigerante (uma ração)',
  'Frasco com papinha, risoto com peru e legumes (uma ração)',
  'Ração para cães, frango e cevada (uma ração)',
  'Comida de gato, salmão em geleia (uma ração)',
  'Sanduíches mofados, manteiga de amendoim e geleia de framboesa (uma ração)',
  'Garrafa de mingau (uma ração)',
  'Alimentos em pó, purê de batata (uma ração)',
  'Banana seca e nozes (uma ração)',
  'Estoque de doces (uma ração)',
  'Gatinho no palito (uma ração)',
  'Saco de arroz e jarros de água (dez rações)',
  'Bigode falso',
  'Mingau de bebê (uma ração)',
  'Peixe dourado em uma jarra de água (uma ração)',
  'Caixa com vinte sacos de batatas fritas, sal marinho e vinagre (quatro rações)',
  'Carne seca de rato (uma ração)',
  'Saco com aves mortas (uma ração)',
  'Arroz e nozes (duas rações)',
  'Tomates, pepino e páprica (uma ração)',
  'Vermes vivos em um saco cheio de terra (uma ração)',
  'Carne de cobra defumada (duas rações)',
  'Fuzil de assalto',
  'Cereais de embalagem grande (uma ração)',
  'Frutas secas e latas de cidra com seis embalagens (duas rações)',
  'Garrafa de uísque e ensopado de taco desidratada (duas porções)',
  'Carne desidratada e macarrão marinara (duas porções)',
  'Hambúrgueres e garrafas de refrigerante (duas rações)',
  'Queijo (uma ração)',
  'Arroz ao curry (duas rações)',
  'Batatas e água (três rações)',
  'Massa e café frio (uma ração)',
  'Raízes variadas (duas porções)',
  'Dez foguetes de fogos de artifício',
  'Arroz e biscoitos (duas rações)',
  'Macarrão e água com gás (uma ração)',
  'Cenouras, cabeça de cabra e garrafas de cerveja (duas rações)',
  'Ovo e presunto (uma ração)',
  'Revólver',
  'Saco de arroz e água (três rações)',
  'Biscoitos e molho (uma ração)',
  'Macarrão com queijo em um recipiente de plástico, com cheiro desagradável (uma ração)',
  'Couve e bacon frito (uma ração)',
  'Pudim de milho (uma ração)',
  'Barras de proteínas e uma garrafa de vinho (uma ração)',
  'Bolsa esportiva cheia de batatas e cenouras (três rações)',
  'Caixa de ferramentas',
  'Lança',
  'Carne seca, porco (duas rações)',
  'Carne defumada, alce (dez rações)',
  'Carne defumada, castor (três rações)',
  'Carne salgada, porco (duas rações)',
  'Carne salgada, vaca (três rações)',
  'Carne e vegetais e uma garrafa de rum (duas rações)',
  'Leite em pó (uma ração)',
  'Ovos em pó (uma ração)',
  'Pote grande de mel (uma ração)',
  'Molho de limão (uma ração)',
  'Pacote de cuscuz e presunto (duas rações)',
  'Faca',
  'Sacos plásticos cheios de pão mofado (duas rações)',
  'Pacotes de macarrão instantâneo e garrafas de água (duas rações)',
  'Chocolate Papai Noel e garrafa térmica com vinho quente frio (uma ração)',
  'Chá gelado e pão de milho (uma ração)',
  'Saco com pedaços de carne crua e uma garrafa de aguardente (duas rações)',
  'Duas pombas mortas e uma garrafa de água (uma ração)',
  'Torta de maçã e uma garrafa de leite (uma ração)',
  'Pimentão e garrafa de água (uma ração)',
  'Salgadinhos e uma garrafa de limonada (uma ração)',
  'Sacola com frutas (duas rações)',
  'Queijo de cabra e leite de cabra (duas rações)',
  'Gumbo (prato típico de Louisiana) e um jarro de água (três rações)',
  'Saco plástico com grãos (duas rações)',
  'Raízes vegetais e uma garrafa de suco de uva (duas rações)',
  'Pistola',
  'Carne de ave salgada (uma ração)',
  'Ganso recém-abatido (seis rações)',
  'Fatias de carne defumada, com cheiro estranho (uma ração)',
  'Frasco de plástico com carne de raposa (duas rações)',
  'Sapos, cobras e lagartos variados (uma ração)',
  'Meio cavalo, defumado (14 rações)',
  'Fuzil',
  'Espingarda',
  'Enlatados, sopa de frango com macarrão (uma ração)',
  'Equipamento médico básico',
  'Tenda',
  'Lata de gás (cheia)',
  'Metralhadora',
  'Enlatados (quatro rações)',
  'Taco de beisebol com arame farpado',
  'Bicicleta',
  'Ovo e leite (uma ração)',
  'Coquetel Molotov',
  'Carne de cobra defumada e cerveja (uma ração)',
  'Arco e flechas',
  'Walkietalkies com baterias',
  'Granada de mão',
  'Faca de arremesso',
  'Carne de esquilo e água (uma ração)',
  'Espada',
  'Bolsa com isqueiros',
  'Cinco sinalizadores',
  'Equipamento médico básico',
  'Roupas quentes',
  'Marreta',
  'Jarro com sopa (duas rações)',
  'Machado grande',
  'Caixa de Fósforos',
  'Roupas de chuva',
  'Grande lona e corda',
  'Sabonete',
  'Garrafa de combustível para isqueiro',
  'Botas',
  'Cão amigável',
  'Bússola',
  'Pão e água (duas rações)',
  'Pé de cabra',
  'Painel solar pequeno',
  'Roupas de camuflagem',
  'Equipamento de hóquei',
  'Martelo',
  'Candeeiro de bolso',
  'Repelente de mosquitos',
  'Protetor Solar',
  'Peixes (duas rações)',
  'Rede mosquiteira',
  'Rádio de caminhão',
  'Equipamento para estação de rádio amador',
  'Balão de ar',
  'Pílulas para purificação de água',
  'Estoque de remédios',
  'Flares de luz',
  'Revólver',
  'Câmera de vídeo com baterias',
  'Motosserra',
  'Asa delta',
  'Rede para pesca',
  'Batatas (três rações)',
  'Livros sobreviventes',
  'Megafone',
  'Vestido de pele de andador',
  'Spray de tinta',
  'Estilete',
  'Granadas de fumaça',
  'Armadura corporal',
  'Algemas',
  'Carne de veado defumada (dez rações)',
  'Besta',
  'Coleta de sementes',
  'Armadura banhada a metal',
  'Rifle de precisão',
  'Equipamento médico avançado',
  'Instruções sobre onde encontrar um armazém cheio de produtos enlatados (pode ser uma armadilha…)',
];

const NOMES = [
  'Charlie Cole',
  'Zac Clark',
  'Cody Shaw',
  'Jay Richards',
  'Joel Lowe',
  'Jackson Owen',
  'Matthias Duke',
  'Brenden Sargent',
  'Ezekiel Goff',
  'Jeffery Fowler',
  'Jude Patel',
  'Ryan Miller',
  'Ryan Burton',
  'Adam Saunders',
  'Kai Gibson',
  'Junior Haynes',
  'Carlos Pruitt',
  'Brock Solomon',
  'Jayce Mckee',
  'Jabari Robbins',
  'Jordan Grant',
  'Ollie Bell',
  'Peter Barnes',
  'Zac Foster',
  'Brandon Jenkins',
  'Conner Fuller',
  'Jaxton Wilkinson',
  'Karsen Frank',
  'Callan Mcconnell',
  'Korbin Wooten',
  'Aaron Foster',
  'Ryan Riley',
  'Kyle Porter',
  'Kieran King',
  'Bradley Parry',
  'Derrick Blanchard',
  'Jael Lowe',
  'Darrell Hunt',
  'Zachary Slater',
  'Rohan Gill',
  'Luke Booth',
  'Spencer Bennett',
  'William Read',
  'Anthony Kaur',
  'Owen Carter',
  'Rodrigo Rivera',
  'Jarrett Trevino',
  'Anders Gibbs',
  'Jamison Compton',
  'Hunter Bird',
  'Nathan Miller',
  'Bobby Jenkins',
  'Jayden Palmer',
  'Joshua Brooks',
  'Harvey Austin',
  'Misael Guzman',
  'Ian Thomas',
  'Devin Long',
  'Osvaldo Stanley',
  'Anderson Fischer',
  'Declan Barnes',
  'Jenson Cook',
  'Tom Hopkins',
  'Max Burton',
  'Aaron Mitchell',
  'Finn Snyder',
  'Cedric Carpenter',
  'Beau O\'neal',
  'Darien Terrell',
  'Cash Shelton',
  'Josh Powell',
  'Benjamin Watts',
  'Leo Rees',
  'Aaron Lewis',
  'Tommy Scott',
  'London Charles',
  'Angelo Dawson',
  'Raul Flowers',
  'Davian Aguirre',
  'Kylen Reese',
  'Zac Burke',
  'Benjamin Hunter',
  'Jack Thomson',
  'Alex Phillips',
  'James Lewis',
  'Skylar Walls',
  'Brandon Walls',
  'Bruno George',
  'Donte Fuller',
  'Hezekiah Meadows',
  'William Price',
  'Mason Hill',
  'Billy Price',
  'Andrew Porter',
  'Bradley Owen',
  'Jakob Hanson',
  'Nickolas Vazquez',
  'Camren Caldwell',
  'Christopher Long',
  'Leo O\'neill',
  'Bennie Bell',
  'Ash Lawson',
  'Elliot West',
  'Jody Johnson',
  'Willy Hall',
  'Brynn Goodwin',
  'Rene Norton',
  'Mell Simmons',
  'Ashley Clayton',
  'Carmen Wynn',
  'Leslie Pearce',
  'Kai Duncan',
  'Terry Perry',
  'Eli Scott',
  'Ashley Pearce',
  'Eli Lawrence',
  'Charlie Thornton',
  'Jaime Logan',
  'Caden Thompson',
  'Tanner Roach',
  'Frankie Marsh',
  'Caden Baker',
  'Gene Smith',
  'Rory Jones',
  'Phoenix Reid',
  'Mell Raymond',
  'Charlie Ellison',
  'Raylee Nash',
  'Caden Cook',
  'Blair Walker',
  'Emerson Hawkins',
  'Frankie Smith',
  'Kerry Clark',
  'Kai Phillips',
  'Casey Lloyd',
  'Aubrey Vaughan',
  'Gabe Newman',
  'Leigh Mckee',
  'Haiden Ayala',
  'Erin Ramsey',
  'Riley Kelly',
  'Phoenix Kennedy',
  'Terry Johnson',
  'Willy Andrews',
  'Blair Collins',
  'Brett Fox',
  'Carmen Luna',
  'Clem Leon',
  'Mell Nicholson',
  'Bret Keller',
  'Vic Bailey',
  'Riley Sharp',
  'Bev Stewart',
  'Brice Kennedy',
  'Ryan Matthews',
  'Skyler Hudson',
  'Riley Yates',
  'Chris Roth',
  'Billy Manning',
  'Jackie Lawson',
  'Taylor Barker',
  'Maddox Griffiths',
  'Morgan Foster',
  'Aubrey George',
  'Logan Howard',
  'Casey Leonard',
  'Maddox Klein',
  'Gail Cotton',
  'Denny Pittman',
  'Brice Emerson',
  'Bret Murray',
  'Blair Moore',
  'Phoenix Hughes',
  'Drew Matthews',
  'Vic Ward',
  'Cameron Solomon',
  'Hayden Bright',
  'Jody Sykes',
  'Ashton Battle',
  'Fran Vazquez',
  'Will Johnson',
  'Danni Burton',
  'Sammy Dawson',
  'Leslie Robertson',
  'Cory Fisher',
  'Denny Dorsey',
  'Leslie Knight',
  'Tanner O\'donnell',
  'Brynn Trevino',
  'Cameron Webster',
  'Jessie Thomas',
  'Rene Gordon',
  'Cory Lewis',
  'Lee Lawrence',
  'Taylor Carter',
  'Logan Castro',
  'Lane Cherry',
  'Ash Mcneil',
  'Rory Dean',
  'Willy Love',
  'Lily Saunders',
  'Megan Hunter',
  'Willow Scott',
  'Sarah Dixon',
  'Mollie Davidson',
  'Mikayla Barber',
  'Valerie O\'neal',
  'Lea Lewis',
  'Morgan Mccarthy',
  'Parker Barrett',
  'Hollie Booth',
  'Mia Woods',
  'Abby Green',
  'Martha Edwards',
  'Maisy Barnes',
  'Jayleen Salas',
  'Leona Warren',
  'Jenna Case',
  'Esmeralda Chase',
  'Kirsten Herrera',
  'Phoebe Taylor',
  'Sophia Hudson',
  'Maya Khan',
  'Chloe Byrne',
  'Imogen Johnston',
  'Bianca Griffin',
  'Mackenzie Horn',
  'Cynthia Bowers',
  'Makenna Suarez',
  'Amari Abbott',
  'Caitlin Riley',
  'Eva Chambers',
  'Lexie Hayes',
  'Jennifer Wright',
  'Elizabeth Matthews',
  'Dylan Colon',
  'Bryn Barry',
  'Evelynn Boyd',
  'Eliana Wiley',
  'Samantha Stark',
  'Molly Murphy',
  'Lara Marshall',
  'Freya Williamson',
  'Sienna Mills',
  'Tia Watts',
  'Giselle Cantrell',
  'Alyssa Hansen',
  'Ansley Bean',
  'Aria Doyle',
  'Alyvia Zimmerman',
  'Phoebe Wallace',
  'Jessica Austin',
  'Isabelle Morris',
  'Eve Jenkins',
  'Mia Barker',
  'Danna Santos',
  'Cambria Doyle',
  'Amani Gill',
  'Cailyn Logan',
  'Giana Davenport',
  'Sara Hudson',
  'Maisy Carr',
  'Laura John',
  'Sophia Houghton',
  'Ella Butler',
  'Zaniyah Mosley',
  'Kathleen Shields',
  'Anya Sampson',
  'London Wong',
  'Harley Hinton',
  'Jade Black',
  'Daisy Allen',
  'Demi Carter',
  'Danielle Webb',
  'Holly Cunningham',
  'Holly Wilkins',
  'Felicity Stone',
  'Alexa Reyes',
  'Farrah Reeves',
  'Naomi Ellison',
  'Cerys Ross',
  'Victoria Duncan',
  'Bethany Rees',
  'Evie Burke',
  'Maisie John',
  'Bella Bowen',
  'Dakota Hahn',
  'Maggie Walker',
  'Georgia Hutchinson',
  'Regan Burris',
  'Victoria Fraser',
  'Erin Stevens',
  'Ellie Lee',
  'Amy Marsh',
  'Niamh Patel',
  'Dayana Porter',
  'Kaelynn Hood',
  'Lara Tran',
  'Mckayla Wilkins',
  'Ciara Harper',
  'Ramone Rojas',
  'Angelito Baggio',
  'Enrrique Peralta',
  'Jerold Ferri',
  'Curcio Gershkovich',
  'Matro Martinez',
  'Arturo Baumann',
  'Oliverios Hernandez',
  'Alvino Muñoz',
  'Cayetano Li Fonti',
  'Bembe Pirozzi',
  'Bembe Pisani',
  'Iago Piazza',
  'Jerrold Cruz',
  'Cedro Autino',
  'Mariano Iadanza',
  'Bernardo Milano',
  'Suelita Santos',
  'Sal Angelo',
  'Eloy Marcelo',
  'Landrada Lorenzo',
  'Michelle Pinto',
  'Faustina Guzman',
  'Madeira Juarez',
  'Ventana Fallaci',
  'Laura Aguilar',
  'Rita Pirozzi',
  'Genevalisse Marchesi',
  'Blanca Bravo',
  'Ricarda Simone',
  'Calandria Mansilla',
  'Maja De Marco',
  'Ora Al Sadd',
  'Xevera Devia',
  'Neiva Halder',
  'Carmen Nuñez',
  'Judith Mancini',
  'Berenice Piccio',
  'Puebla Vecoli',
  'Mailen Milano',
  'Qiu Kun',
  'Hao Zan',
  'Qiao Da',
  'Zheng Jingyi',
  'Ma Huo',
  'Quan Jing',
  'Jiang Wu',
  'Yao ZhenKang',
  'Xue Gengxin',
  'Fang Jiang',
  'Wen Yimu',
  'Yuan Qigang',
  'Hou Zan',
  'Cheng Jingyi',
  'Xiong Xiuying',
  'Zhang Zhenya',
  'Ye Wu',
  'Shao Yahui',
  'Quan Guo',
  'Fan Kang',
  'Cheng Kun',
  'Yu Zhen',
  'Hu Tu',
  'Liu Hai',
  'Qiao Hua',
  'Xue Yong',
  'Liang Chan',
  'Lai Hong',
  'Zi Yating',
  'Long Cheng',
  'Marc-Antoine Subercaseaux',
  'Jérôme Philidor',
  'Olivier Rodin',
  'Jean-Noël Pichard',
  'Jacques Joguet',
  'Moïse Ouvrard',
  'Roméo Clérisseau',
  'Phil Calvet',
  'Mathias Celice',
  'Florian Jacquemin',
  'Gabriel Fournier',
  'Séverin Sartre',
  'Claude Deloffre',
  'Gwenaël Bechard',
  'Basile Milhaud',
  'Victor Plouffe',
  'Jérôme Vandame',
  'Tristan About',
  'Amand Beaugendre',
  'Alain Lahaye',
  'Daniel De Saint-Pierre',
  'Pierre-Antoine Bessette',
  'Benoît Joubert',
  'Matthieu Lahaye',
  'Roland Kaplan',
  'Thaddée Berger',
  'Sacha Deloffre',
  'Maxence Lagarde',
  'Léonard Crépin',
  'Jean-Joël Grosjean',
  'Abraham Chevalier',
  'Charles Crevier',
  'Abel Favre',
  'Didier Aubert',
  'Gustave Duval',
  'Silvain Nee',
  'François Chuquet',
  'Alexandre Boutet',
  'Bastien Dujardin',
  'Sébastien Rochefort',
  'Marine Jacquet',
  'Rébecca Tremblay',
  'Héloïse Leclère',
  'Bérengère Trouvé',
  'Sauvanne Poulin',
  'Nikita Beaugendre',
  'Jacqueline Balzac',
  'Christiane Toussaint',
  'Monique Tourneur',
  'Léa Dufresne',
  'Ange Bourgeois',
  'Lisette Popelin',
  'Nadège Philippon',
  'Capucine Chéron',
  'Diane Gérald',
  'Marine Benett',
  'Claudette Calvet',
  'Bérengère Allaire',
  'Léonie Boulle',
  'Gisèle Emmanuelli',
  'Déborah Popelin',
  'Orianne Bouchard',
  'Violette Auclair',
  'Vanessa Gavreau',
  'Francine Laflèche',
  'Catherine Regnard',
  'Débora Bozonnet',
  'Laura Bourseiller',
  'Louise Dufresne',
  'Solenne Levett',
  'Oprinchuk',
  'Vikentiy',
  'Smekhov Viktor',
  'Tikhonov',
  'Alexei',
  'Timurovich',
  'Loskutova',
  'Jereni',
  'Denisovna',
];
