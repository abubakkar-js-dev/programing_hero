function ekPotlaNe(leora){
    let uniuqe = []
    for(let khor of leora){
        if(uniuqe.includes(khor) === false){
            uniuqe.push(khor);
        }
    }
    return uniuqe;
}

const biriyaniKhor = ['Sathi','Tanjila','Mamidul','Sathi','Rasel','Shuvo','Mamidul','Sathi','Shuvo','Tanjila'];

const notDobulePacket = ekPotlaNe(biriyaniKhor);
console.log(notDobulePacket);