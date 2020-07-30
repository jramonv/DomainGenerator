


let pronoun = ['the','our', 'it'];
let adj = ['great', 'big', 'wonde' ];
let noun = ['jogger','racoon','ball'];
let extension = ['.com', '.net', '.us']

function generateDomain(){
 for (i=0; i<=2; i++){ for (j=0;j<=2;j++){ for (k=0;k<=2;k++){for(l=0;l<=2;l++){
    let newdomain = pronoun[i]+adj[j]+noun[k]+extension[l];

    console.log(newdomain);}}}}
}

console.log(generateDomain());