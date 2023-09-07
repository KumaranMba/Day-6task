class uberpricecalculator{
    constructor(distance, duration){
        this.distance = distance;
        this.duration = duration;
    }
    getprice(){
        var distancecost = this.distance*costPerKilometer;
        var durationcost = this.duration*costPerMinute;
        var totalprice = (basefare + distancecost + durationcost);
        return totalprice;
    }
}
 
 const basefare = 50.0;
 const costPerKilometer = 1.5 ;
 const costPerMinute = 0.2 ;

 var result = new uberpricecalculator(20.0,120.0);
 console.log(result.getprice());