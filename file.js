//Exemplos de como se trabalhar com arquivos

var fs = require('fs')

//funçao para escrever, hello world, no arquivo data.txt
    fs.writeFile('data.txt','Hello world julio', function(err){
        if(err){
            throw err
        }
          console.log('arquivo data.txt escrito')
    })

//funçao para ler o arquivo data.txt, funçao recebe dois parametros, de erro e data que recebe a string escrita
fs.readFile('data.txt',function(err,data){
    if(err){
        throw err
    }
    console.log(data.toString('utf8'))
})

//Funçao assincrona para ler diretorio, files recebe o array de diretorios lidos
// fs.readdir('.',function(err,files){
//     if(err){
//         throw err
//     }

//     for(var file in files){ //percorre o array dos diretorios
//         console.log(files[file]) 
//     }
// })

//Funca ler de forma sincrona
fs.readdirSync('.')
.filter(function(file){ //filtrando os arquivos por .js
    return (file.endsWith('.js'))
}).forEach(function(file){
    console.log(file)
})