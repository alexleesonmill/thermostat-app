class Thermostat {
    constructor() {
        this.DEFAULT_TEMP = 20;
        this.MINTEMP = 10;
        this.temperature = 20;
        this.powerSavingMode = true;
        this.MAX_TEMP_PSM_ON = 25;
        this.MAX_TEMP_PSM_OFF = 32;
        this.MED_ENERGY_USAGE_LIMIT = 18;
        this.HIGH_ENERGY_USAGE_LIMIT = 25;
    }

    isMinTemp(){
        return this.temperature === this.MINTEMP;
    }

    isMaxTemp(){
        if (this.isPowerSavingModeOn() === false) {
            return this.temperature === this.MAX_TEMP_PSM_OFF;
        }
        return this.temperature === this.MAX_TEMP_PSM_ON;
    }

    getCurrentTemperature(){
        return this.temperature;
    }

    up(){
        if (this.isMaxTemp()) {
            return;
        }
        this.temperature++;
    }

    down(){
        if (this.isMinTemp()) {
            return;
        }
        this.temperature--;
    }

    isPowerSavingModeOn(){
        return this.powerSavingMode === true;
    }

    switchPowerSavingModeOff(){
        this.powerSavingMode = false;
    }

    switchPowerSavingModeOn(){
        this.powerSavingMode = true;
    }

    resetTemperature(){
        this.temperature = this.DEFAULT_TEMP;
    }

    energyUsage(){
        if (this.temperature < this.MED_ENERGY_USAGE_LIMIT) {
            return 'low-usage'
        }
        if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
            return 'medium-usage'
        }
        return 'high-usage'
    };
}