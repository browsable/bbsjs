/**
 * Created by hernia on 2015-07-25.
 */
function Circuit() {
    this.plus = undefined;
    this.minus = undefined;
    this.battery = 0;
    this.led = [];
    this.serialResistor = [];
    this.parallelResistor = [];
    this.SumV =0;
    this.SumI =0;
    this.SumR =0;
    this.current = [];
}
Circuit.prototype.getSumResistor =function () {
    return "hi";
};
Circuit.prototype.turnOn = function(){
    return "hi";
};

