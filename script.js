let students = [
    {
        name: 'Luiz',
        noteOne: 10,
        noteTwo: 9,
    },
    {
        name: 'Pedro',
        noteOne: 7,
        noteTwo: 6.7, 
    },
    {
        name: 'José',
        noteOne: 8.9,
        noteTwo: 9.3,
    },
]

function noteAvarage(noteOne, noteTwo){
    return avarege = (noteOne + noteTwo) / 2
}

function printAvarage(student){
    if(noteAvarage(student.noteOne, student.noteTwo) >= 7){
        return `A média do estudante ${student.name} foi ${avarege} e ele está aprovado no concurso!`
    }
    else{
        return `A média do estudante ${student.name} foi ${avarege} e ele está reprovado no concurso!`
    }
}

for(let student of students){
    let avaragePrint = printAvarage(student)
    alert(avaragePrint)
}