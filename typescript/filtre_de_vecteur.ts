// Créer une fonction typescript qui recoit un nombre variable de paramettre et retourne un vecteur du type correspondant au premier argument passé à la fonction
function filtre_vecteur<T>(ref: T, ...a: any): T[] {
    return a.filter(
        (i: any) => typeof(i) === typeof(ref)
    )
}
//
const pele_mele = 
    [ 
        "Salut",
        4,
        {x:42, y:42},
        {valeur:21, couleur:"Pique"},
        4,
        true,
        false,
        "Didier", 
        {x:32, y:54}, 
        "Comment",
        {value:2, couleur:"Carreau"},
        64,
        false,
        {x:54, y:12},
        23
    ];

let v1: string[];
let v2: string[];
let v3: number[];
let v4: {x:number, y:number}[];
let v5: boolean[];

/* Execution */
// Extrait un vecteur de chaine de caracteur
v1 = filtre_vecteur("test",...pele_mele);
// Extrait un vecteur de nombre
//v2 = filtre_vecteur(25,...pele_mele); // Doit produire un erreur a la compilation
// Extrait un vecteur de nombre
v3 = filtre_vecteur(25,...pele_mele);
// Extrait un vecteur d'objets
v4 = filtre_vecteur({x:1,y:2},...pele_mele); // Modifier pour avec un les objects dans V4
// Extrait un vecteur de booleens
v5 = filtre_vecteur(false,...pele_mele);

/* Resultats */
console.log(typeof v1, v1); // Vecteur de chaine de caracteur
console.log(typeof v3, v3); // Vecteur de nombre
console.log(typeof v4, v4); // Vecteur d'objects
console.log(typeof v5, v5); // Vecteur de booleen

