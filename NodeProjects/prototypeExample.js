/**
 * Created by nikki on 13-05-2016.
 */
function User(){
    this.name = '';
    this.life = 100;
    this.giveLife=function giveLife(targetPlayer){
        targetPlayer.life +=1;
        console.log(this.name+" gave 1 life to "+targetPlayer.name);
    }
}

wendy = new User();
bucky = new User();

wendy.name='wendy';
bucky.name = 'bucky';

console.log(wendy.name +" has "+wendy.life+" life");
console.log(bucky.name +" has "+bucky.life+" life");

bucky.giveLife(wendy);

console.log(wendy.name +" has "+wendy.life+" life");
console.log(bucky.name +" has "+bucky.life+" life");

//add function
User.prototype.takeLife = function takeLife(targetPlayer) {
    targetPlayer.life -=1;
    console.log(this.name+" took 1 life from "+targetPlayer.name);
}
wendy.takeLife(bucky);
console.log(wendy.name +" has "+wendy.life+" life");
console.log(bucky.name +" has "+bucky.life+" life");

//add variable
User.prototype.magic = 100;
console.log(wendy.name +" has "+wendy.magic+" magic");
console.log(bucky.name +" has "+bucky.magic+" magic");
