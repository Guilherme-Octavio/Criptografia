/*

Equipe 05

Augusto 195304 1ºSI
Denis 199988 1ºSI
Hanne 097353 1ºSI
Cristian 196094 1ºSI
Andre 198246 1ºSI
Elize 196260 1ºSI
Davi 184975 3ºSI
Guilherme Paulino 052974 5ºEG
Julia 199633 1ºSI

*/


let cifraDeCesar = (codigo) => {
    let tabelaDeCifra = {
        a: 'n', b: 'o', c: 'p', d: 'q',
        e: 'r', f: 's', g: 't', h: 'u',
        i: 'v', j: 'w', k: 'x', l: 'y',
        m: 'z', n: 'a', o: 'b', p: 'c',
        q: 'd', r: 'e', s: 'f', t: 'g',
        u: 'h', v: 'i', w: 'j', x: 'k',
        y: 'l', z: 'm', ' ': ' ',
    }

    let tabelaDeCifra3 = {
        a: 'n', b: 'o', c: 'p', d: 'q',
        e: 'r', f: 's', g: 't', h: 'u',
        i: 'v', j: 'w', k: 'x', l: 'y',
        m: 'z', n: 'a', o: 'b', p: 'c',
        q: 'd', r: 'e', s: 'f', t: 'g',
        u: 'h', v: 'i', w: 'j', x: 'k',
        y: 'l', z: 'm', ' ': ' ',
        1: '4', 2: '7', 3:'5', 4: '3',
        5: '2', 6: '1', 7: '8', 8: '6',
        9: '0', 0: '9', 
    }

    codigo = codigo.toLowerCase();
    let cifrado = '';

    for (let i = 0; i < codigo.length; i++) {
        cifrado += tabelaDeCifra3[codigo[i]];
    }
    return cifrado;
}

console.log(cifraDeCesar('byn n gbqbf'));