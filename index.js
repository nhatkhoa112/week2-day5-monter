const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const scoreElement = document.querySelector('#scoreElement');
const submitBtn = document.querySelector('#submitBtn');
const modalElement = document.querySelector('#modalElement');
const username = document.querySelector('#username');
const bigScoreOver = document.querySelector('#bigScoreOver');
const modalElement1 =document.querySelector('#modalElement1');
const restartGameBtn = document.querySelector('#restartGameBtn');
const exitGameBtn = document.getElementById('exitGameBtn');
const user = document.querySelector("#user");
const username121 = document.querySelector('#username121');
const information = document.querySelector('#information');
canvas.width = innerWidth;
canvas.height = innerHeight;

// Make player.

class Player {
    constructor(x, y, radius, color){
        this.x  = x; 
        this.y  = y;
        this.radius = radius;
        this.color = color;
    }
    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false );
        c.fillStyle = this.color;
        c.fill();
    }
}

const x = canvas.width / 2;
const y = canvas.height / 2;


let player = new Player(x, y, 15, 'white')
player.draw();


// Shoot projectiles

class Projectile {
    constructor(x, y, radius, color, velocity){
        this.x  = x; 
        this.y  = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;

    }
    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false );
        c.fillStyle = this.color;
        c.fill();
    }

    update(){
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}



let projectiles = [];
let enemies = []
let particles = []
let score =0; 


function init (){
    player = new Player(x, y, 15, 'white')
    projectiles = [];
    enemies = []
    particles = []
    score =0; 
    scoreElement.innerHTML = score;
    bigScoreOver.innerHTML = score;

}

function animate(){
    let animationId = requestAnimationFrame(animate);
    c.fillStyle = 'rgba(0, 0, 0, 0.1)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.draw();
    particles.forEach((particle, index) =>{
        if(particle.alpha <0){
            particles.splice(index, 1);
        } else {
            particle.update();
        }
    })
    projectiles.forEach((projectile, index) => {
        projectile.update();
        // Remove from edges screen
        if(
            projectile.x + projectile.radius < 0||
            projectile.x - projectile.radius > canvas.width||
            projectile.y + projectile.radius< 0 || 
            projectile.y - projectile.radius > canvas.height
            ){
            setTimeout(() => {
                projectiles.splice(index, 1)
            }, 0)
        }
    })
    enemies.forEach((enemy, index)=> {
        enemy.update()

        // End game
        const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y) 
        const endGame =dist - enemy.radius -player.radius < 1
        if(endGame){
            cancelAnimationFrame(animationId);
            modalElement1.style.display = "flex"
            bigScoreOver.innerHTML = 'Score: '+ score + ' points';
            let name = localStorage.getItem('user');
            if(name){
                username121.innerHTML = "Username: " + name 
            } else{
                username121.innerHTML= "Username: " + "anonymous"
            }
;

        }
        //when projectile touch enemy
        projectiles.forEach((projectile, projectileIndex) => {
            const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)       
            if(dist - enemy.radius - projectile.radius < 1){
                for(let i = 0; i< enemy.radius * 2 ; i++){
                    particles.push(new Particle(
                        projectile.x, projectile.y, Math.random() *2, enemy.color, {
                            x: (Math.random() -0.5)* (Math.random() * 8), y: (Math.random() -0.5)*(Math.random() * 8)
                        }
                    ))
                }
                if(enemy.radius -10 > 5){
                    //Increase the score: 
                    score += 100;
                    scoreElement.innerHTML = score;
                    
                    gsap.to(enemy, {
                        radius : enemy.radius - 10
                    })
                    setTimeout(() => {
                        projectiles.splice(projectileIndex, 1)
                    }, 0)
                }  else {
                    // Remove from screen altogether
                    score += 250;
                    scoreElement.innerHTML = score;
                    setTimeout(() => {
                        enemies.splice(index, 1);
                        projectiles.splice(projectileIndex, 1)
                    }, 0)
    
                }

            }
        })
        
        
    })
}

window.addEventListener('click', (e) => {
    const angle = Math.atan2(e.clientY - canvas.height/2, event.clientX - canvas.width/2);
    const velocity = {
        x: Math.cos(angle) *6,
        y: Math.sin(angle) *6
    }
    projectiles.push(
        new Projectile(canvas.width/2, canvas.height/2, 5, 'white', velocity)
    )
    

})


// Create enemy


class Enemy {
    constructor(x, y, radius, color, velocity){
        this.x  = x; 
        this.y  = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;

    }
    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false );
        c.fillStyle = this.color;
        c.fill();
    }

    update(){
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}



function spawnEnemies(){
    setInterval(() => {
        const radius = Math.random()*(30-8) + 8;
        let x;
        let y;
        if( Math.random() < 0.5){
            x = Math.random()< 0.5 ? 0 - radius : Math.random()*canvas.width;
            y = Math.random()*canvas.height;
        } else {
            x = Math.random()*canvas.width;
            y = Math.random()< 0.5 ? 0 - radius : Math.random()*canvas.height;
        }
        
        const color = `hsl(${Math.random()*360}, 50%,50%)`;
        const angle = Math.atan2(canvas.height/2 -y, canvas.width/2-x);
        const velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }
        enemies.push(new Enemy(x,y,radius, color, velocity));
    }, 1500)
}


// Make particles


const friction = 0.99;
class Particle {
    constructor(x, y, radius, color, velocity){
        this.x  = x; 
        this.y  = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1;

    }
    draw(){
        c.save();
        c.globalAlpha = this.alpha;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false );
        c.fillStyle = this.color;
        c.fill();
        c.restore();
    }

    update(){
        this.draw();
        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= 0.01; 
    }
}



submitBtn.addEventListener('click', ()=>{
    init();
    animate()
    spawnEnemies();
    modalElement.style.display = "none";
    let value = username.value;
    user.innerHTML = value || "anonymous";
    localStorage.setItem('user', value);
    information.style.display = "flex";
})

restartGameBtn.addEventListener('click', ()=>{
    init();
    animate()
    spawnEnemies();
    modalElement1.style.display = "none";
    information.style.display = "flex";
})


exitGameBtn.addEventListener('click', ()=>{
    modalElement.style.display = "flex";
    modalElement1.style.display = "none";
    username.value = '';
    information.style.display = "none";

})

// Create username: 

console.log(username121);