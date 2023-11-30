var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT id, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// // Coloque os mesmos parâmetros aqui. Vá para a var instrucao
// function cadastrar(nome, email, senha, dt_nascimento, genero, estado, cidade, bairro, rua, numero) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, dt_nascimento, genero, estado, cidade, bairro, rua, numero);
    
//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucao = `
//         INSERT INTO usuario (nome, email, senha, dt_nascimento, genero) VALUES ('${nome}', '${email}', '${senha}', '${dt_nascimento}', '${genero}');
//     `;

//     var instrucaoEndereco = `INSERT INTO endereco (estado, cidade, bairro, rua, numero,fkUsuarioEndereco) VALUES ('${estado}','${cidade}','${bairro}','${rua}','${numero}',LAST_INSERT_ID())`;


//     console.log("Executando a instrução SQL: \n" + instrucao);
//     console.log("Executando a instrução SQL: \n" + instrucaoEndereco);
//     return database.executar(instrucao, instrucaoEndereco);
// }



// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, dt_nascimento, genero, estado, cidade, bairro, rua, numero) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, dt_nascimento, genero, estado, cidade, bairro, rua, numero);
    
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, dt_nascimento, genero) 
        VALUES ('${nome}', '${email}', '${senha}', '${dt_nascimento}', '${genero}');
    `;

    return database.executar(instrucao)

        .then((resultado) => {
            var idUsuarioInserido = resultado.insertId;

            var instrucaoEndereco = `
                INSERT INTO endereco (estado, cidade, bairro, rua, numero, fkUsuarioEndereco) 
                VALUES ('${estado}', '${cidade}', '${bairro}', '${rua}', '${numero}', '${idUsuarioInserido}');
            `;

            return database.executar(instrucaoEndereco);
        })
        .catch((erro) => {
            console.error(`Erro ao cadastrar usuário: ${erro}`);
            throw erro; // Propagar o erro para quem chamou a função
        });

   
}

module.exports = {
    cadastrar
};




module.exports = {
    autenticar,
    cadastrar,
};