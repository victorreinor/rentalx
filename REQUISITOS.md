**RF** => Requisitos funcionais
**RNF** => Requisitos não funcionais
**RN** => Regra de negócio

# Cadastro de carro

**RF**
- Deve ser possível cadastrar um novo carro;
- Deve ser possível listar todas as categorias;

**RN**
- Não deve ser possível cadastrar um carro com uma placa já existente;
- Não deve ser possível alterar a placa de um carro já cadastrado;
- O carro deve ser cadastrado, por padrão, como disponibilidade;
- Não deve ser po => Requisitos não funcionais;
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**
- Deve ser possível listar todos os carros disponíveis;
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria;
- Deve ser possível listar todos os carros disponíveis pelo nome da marca;
- Deve ser possível listar todos os carros disponíveis pelo nome do carro;

**RN**
- O usuário não precisa estar logado no sistema;

# Cadastro de especificação no carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro;
- Deve ser possível listar todas as especificações;
- Deve ser possível listar todos os carros;

**RN**
- Não deve ser possível cadastrar uma especificação para um carro não ca4dastrado;
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro;
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagem do carro

**RF**
- Deve ser possível cadastrar a imagem do carro;
- Deve ser possível listar todos os carros;

**RNF**
-Utilizar o multer para upload dos arquivos;

**RN**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro;
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**
- Deve ser possivel cadastrar um aluguel;

**RNF**


**RN**
- O aluguel deve ter duração mínima de 24 horas;
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário;
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro;
- O usuário deve estar logado na aplicação;
- Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível

# Devolução de carro

**RF**
Deve ser possível realizar a devolução de um carro

**RN**
- Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa;
- Ao realizar a devolução, o carro deverá ser liberado para outro aluguel;
- Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel;
- Ao realizar a devolução, deverá ser calculado o total do aluguel;
- Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcinal aos dias de atraso;
- Caso haja multa, deverá ser somado ao total de aluguel;
- - O usuário não precisa estar logado no sistema.

# Listagem de alugueis para usuários

**RF**
Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**
O usuário deve estar logado na aplicação