//====W2D2:Classes Homework =======

//======= ============= Creating classes ==============================
// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances
//===================================================================

// class cat {
//     //I'm using the constructor method 
//     constructor(nameparam,moodparam,colorparam,foodparam){
//         //the keys for each new object
//         this.name = nameparam;
//         this.mood = moodparam;
//         this.color = colorparam;
//         this.food = foodparam;
//     }
//     // This is the three methods in my constructor
//         bathing(){
//         this.Bathing = true
//         console.log(this.name + " is bathing")
//     }
//         playing(){
//         this.playing = true
//         console.log(this.name + " is playing")
//     }
//         eating(){
//         this.eating = true
//         console.log(this.name + " is eating")
//     }
// }
//             //this is my two instances and their repective properties
//             let cat1 = new cat( "cat1","lazy","brown","Dry Cat Food")
//             console.log(cat1)
//                 //this is each method being invoked for both instances 
//                  cat1.bathing()
//                  cat1.playing()
//                  cat1.eating()

//             let cat2 = new cat("cat2","happy","gray","Wet Cat Food")
//             console.log(cat2)
//                 //this is each method being invoked for both instances 
//                  cat2.bathing()
//                  cat2.playing()
//                  cat2.eating()


//console.log(Animal)

// ========================================== Constructors ==============================================
// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate
//=======================================================================================================

class Pirate{

    constructor(titleparam,bountyparam,weaponparam,){
        this.title = titleparam;
        this.bounty = bountyparam;
        this.weapon = weaponparam;
            sailing ();{
                this.sailing = true
                console.log(this.title + " is sailing")
            }
            pilaging ();{
                this.pilaging = true
                console.log(this.title + " is pilaging")
            }
            conquesting ();{
                this.conquesting = true
                console.log(this.title + " is conquesting")
            }
    
                
              
         
        }

  
                  


}

const jollyRoger =  [ 
    { pirate1: "Monkey D Luffy" },
    { pirate2: "Roanoa Zoro" }, 
    { pirate3: "Vinsmoke Sanji" } 
];
        

    const blackPeral = [ 
    { pirate4: "Gol D Roger" },
    { pirate5: "Silvers Rayleigh" }, 
    { pirate6: "Shanks" } 
];

function listPeople(listParam) {
    listParam.forEach((x) => {
        console.log(x)
    })
}

listPeople(jollyRoger)
listPeople(blackPeral)

// for (let i=0; i < newShip1.length; i++) {
//     console.log(`This ${.title} has three members `);



//console.log(newShip1[i]);