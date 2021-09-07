class instrutment {
    constructor(family, playVerb, loudness) {
        this.family = family;
        this.loudness = loudness;
        this.playVerb = playVerb;
    }
    play() {
        console.log("The Instrument of the " + this.family + " Family " + this.playVerb + " at a volume of " + this.loudness + "!")
    }
}

class woodwind extends instrutment {
    constructor(loudness) {
        super("Woodwind", "blew", loudness)
    }
}

class percussion extends instrutment {
    constructor(loudness) {
        super("Percussion", "drummed", loudness)
    }
}

class string extends instrutment {
    constructor(loudness) {
        super("String", "strung", loudness)
    }
}

instruments = [];
instruments[0] = new woodwind(10);
instruments[1] = new percussion(20);
instruments[2] = new string(15);

for (i=0; i < instruments.length; i++) {
    instruments[i].play()
}