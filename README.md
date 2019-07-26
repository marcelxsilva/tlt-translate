## Sobre

Simples ferramenta de linha de comando para realizar tradução de palavras

Este script é bem simples, pensei em cria-lo pois é uma tarefa muito massante para quem esta aprendendo ingles ter que ficar abrindo o Google Translator toda vez que precisar traduzir uma frase, e como velho usuario do linux resolvi criar via linha de comando.

Ele suporta apenas a tradução entre:<br>
Inglês -> Português<br>
Português -> Inglês

### Faça suas alterações

Fique à vontade para fazer as suas modificacoes e adicionar suporte para outras linguagens.

### Funcionamento

Tendo em mente que voçe ja <a href="#setting-variable"> configurou a ferramenta para funcionar via terminal </a>
Basta apenas inserir o nome da ferramenta, e em seguida para qual lingua deseja realizar a tradução e a palavra, exemplo:

<pre>#tlt en "Bom dia, como voce esta ? " </pre>

Saida:

<pre>
Response:  Good morning, how are you ? 
</pre>

No comando acima, "en" significa "Englês" para Português é "pt"
<a href="https://tech.yandex.com/translate/doc/dg/concepts/api-overview-docpage/" target="_blank">Aqui tem um lista de Linguagens suportada pela API e suas Abreviações</a>

Qualquer dúvida é só da uma olhada no código, ou:
<code>tlt -h </code>

## APi Key

Utilizei a API do <a href="https://tech.yandex.com/translate/doc/dg/concepts/about-docpage/" target="_blank">Yandex Translate API</a>
Então, é só acessar o site criar uma conta e gerar sua Key e inserir ela no arquivo <code> tlt.js </code>.

### Configurar a ferramenta para funcionar via terminal no Linux

<i id="setting-variable"></i>
Resolvi ser mais simples possivel:<br>

Coloque a pasta que contem o script em um local que voçe não apagaria ele acidentalmente, no meu caso eu coloquei no diretório:<br>
altere o nome da pasta que contem todo o script para <code>tlt</code>
Diretório onde ficara a pasta <code>tlt</code> do projeto.
<pre>/usr</pre>

É claro, instale as dependencias do script digitando:

<pre>npm install</pre>

Em seguida crie um script bash como nome de <code>tlt</code> com o seguinte conteúdo:

<pre>
node /usr/tlt/tlt.js $1 " $2 "
</pre>

Aqui estamos dizendo que quando o script de nome <code>tlt</code> for executado ele ira executar o arquivo tlt.js com o Node, <code>$1 e $2</code> significa os argumentos recebidos do script, $1 é a lingua "pt" e $2 é a palavra a ser traduzida.

De ao arquivo <code>tlt</code> Permissão de execução:

<pre>
     chmod +x tlt
</pre>

Mova o arquivo <code>tlt</code> para o diretório <code>/bin</code>

<pre>
    sudo cp tlt /bin
</pre>

Agora está tudo certo, só rodar o comando descrito acima e tudo funcionara perfeitamente.
