var async = require("async");

function divisao(a, b) {
    if (b > a)
        return new Error("erro interno no sistema")
    return a / b;
}

var tarefas01 = [
    function (callback) {
        setTimeout(function () {
            callback(null, 1);
        }, 500);
    },
    function (callback) {
        callback(null, divisao(1, 10))
    },
    function (callback) {
        callback(null, divisao(10, 5))
    }
]

var retorno = function (error, results) {
    console.log(error || results);
}

function run(entrada, saida) {
    async.series(entrada, saida);
}

run(tarefas01, retorno);
//run(tarefas02, retorno);