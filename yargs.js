const opt = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en la consola la tabla de multilicar', opt)
    .command('crear', 'Crea archivo de la tabla de multilicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}