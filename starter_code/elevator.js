class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
  }
/////////////////////// ELEVATOR STARTS //////////////////////
  start() {
    var elevateMe = setInterval(update(),1000);
  }

/////////////////////// HOLD THE DOOR //////////////////////
  stop() {
    clearInterval(elevateMe);
  }
  //////////////////////////// UPDATES THE ELEVATOS KNOWABOUTS ////////////////////////
  update() {
      this.requests.forEach( req => {
        if (this.floor < req) {
            goUp();
        }
        else if(this.floor > req) {
          goDown();
        }
        else if (this.floor = request){
          
        }
      });
  log();
   }
  _passengersEnter() { }
  _passengersLeave() { }
/////////////////////// ELEVATOR GO UP //////////////////////
  floorUp() {
    if (this.floor <= 10){
      this.floor+=1;
    }
    else {
      console.log('the elevator to heaven still is not installed');
    }
   }
/////////////////////// ELEVATOR GO DOWN //////////////////////
  floorDown() {
    if (this.floor > 0) {
      this.floor-=1;
    }
    else {
      console.log ('the elevator to hell is down the hall to the left');
    }
  }
//////////////////////////////////////
  call() {
    Person.desitinationFloor.push(requests);
  }
//////////////////////////////////////
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}


module.exports = Elevator;
