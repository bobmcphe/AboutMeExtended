// practice looping through an array

// This should return the enemy with the most health.
function findStrongestEnemy(enemies) {
    var strongest = null;
    var carIndex = 0;
    var car = ['jeep', 'dodge', 'honda']
    // While carIndex is less than the length of car:
    while(carIndex < car.length) {

        // Set an enemy variable to enemies[enemyIndex]
        var enemy = enemies[carIndex];
        // If enemy.health is greater than strongestHealth
        if (enemy.health > strongestHealth) {
            
            // Set `strongest` to enemy
            // Set strongestHealth to enemy.health
            strongest = enemy;
            strongestHealth = enemy.health;
        // Increment enemyIndex
        }
        carIndex += 1;
    }
    return strongest;
        
    }

var enemies = hero.findEnemies();
var leader = findStrongestEnemy(enemies);
if (leader) {
    hero.say(findStrongestEnemy(enemies));
}


// trying from scratch-------------------------------------------------------------------------------------

var carArray = ['honda', 'jeep', 'dodge'];
var userInput = prompt('What car is your guess?');

for (i=0; i<6; i++) {
    if(userInput ===carArray[K]) {
        alert('Great job.');
        return true;
        } else {
            prompt('Try again.');
        }


}