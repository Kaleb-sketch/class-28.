class Chain{

constructor (bird,log){

var options = {
bodyA:bird,
bodyB:log,
length:20,
stiffness:0.5
}
this.chain = Constraint.create(options)
World.add(world,this.chain)

}
display(){
strokeWeight(4); 
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)


}
}