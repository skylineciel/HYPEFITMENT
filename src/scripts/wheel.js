export default class Wheel {
    constructor(tireWidth, tireProfile, tireDiameter, RimWidth, RimOffset) {
            this.tireWidth = tireWidth;
            this.tireProfile = tireProfile;
            this.tireDiameter = tireDiameter;
            this.RimWidth = RimWidth;
            this.RimOffset = RimOffset;
        }
    
    incTireWidth () {
        this.tireWidth += 5;
    }

    decTireWidth () {
        this.tireWidth -= 5;
    }

    incTireProfile () {
        this.tireProfile += 5;
    }

    decTireProfile () {
        this.tireProfile -= 5;
    }

    incTireDiameter () {
        this.tireDiameter += 1;
    }

    decTireDiameter () {
        this.tireDiameter -= 1;
    }

    incRimWidth () {
        this.RimWidth += 0.5;
    }

    decRimWidth () {
        this.RimWidth -= 0.5;
    }
    
    incRimOffset () {
        this.RimOffset += 1;
    }

    decRimOffset () {
        this.RimOffset -= 1;
    }
}




