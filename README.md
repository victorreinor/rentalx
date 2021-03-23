### SOLID
S => SRP - Single Responsability Principle (Princípio da Responsabilidade Única);

O => OCP - Open-Closed Principle (Princípio aberto/fechado);

L => LSP - Liskov Substituion Principle (Princípio de Substituição de Liskov);

I => ISP - Interface Segregation Principle (Princípio de Segregação de Interface);

D => DIP - Dependency Inversion Principle (Princípio de Inversão de Dependência);

### Comandos Docker

`docker ps`

Lista todos os containers que estão dispóniveis (rodando).

`docker ps -a`

Lista todos os containers existente na máquina.

`docker rm id-docker || name-container`

Remove um container específico, aceita tanto o id do docker ou name do container.
Para que seja removido um container ele deverá ser pausado.

`docker start id-docker || name-container`

Inicia um container.

`docker stop id-docker || name-container`

Para um container.

`docker exec -it id-container || name-container /bin/bash`

Acessa o container e abre o terminal.

`docker logs name-container`

Exibe os logs do container.

`docker logs name-container -d`

Exibe os logs e fica observando os logs, toda vez que for feito alguma alteração que mostra um feedback ele será exibido.

### Comandos Docker Compose
Para rodar os comandos do docker compose é necessário entrar dentro da pasta que esta seu arquivo **docker-compose.yml**

`docker-compose up -d`

Inicia o container e deixa em background.

`docker-compose stop`

Para o container.

`docker-compose down`

Remove o container e exclui tudo que foi criado dentro do container.