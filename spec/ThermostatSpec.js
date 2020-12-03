'use strict';

describe('Thermostat', function () {
    var thermostat

    beforeEach(function () {
        thermostat = new Thermostat();
    });

    it('starts at 20 degrees', function () {
        expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('increases the temp with up()', function (){
        thermostat.up();
        expect(thermostat.getCurrentTemperature()).toEqual(21);
    })

    it('decreases the temp with down()', function (){
        thermostat.down();
        expect(thermostat.getCurrentTemperature()).toEqual(19);
    })

    it('has a min temp of 10', function (){
        for (var i = 0; i < 11; i++) {
            thermostat.down();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('has power save on by default', function (){
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
    })

    it('can switch power save mode off', function (){
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false)
    })

    it('can switch power save mode back on', function (){
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false)
        thermostat.switchPowerSavingModeOn();
        expect(thermostat.isPowerSavingModeOn()).toBe(true)
    })

    describe('when power saving mode is on', function (){
        it('has a max temp of 25 degrees', function (){
            for (var i = 0; i < 6; i++) {
                thermostat.up();
            }
            expect(thermostat.getCurrentTemperature()).toEqual(25);
        })
    })

    describe('when power save mode is off', function (){
        it('has a max temp of 32 degrees', function () {
            thermostat.switchPowerSavingModeOff();
            for (var i = 0; i < 13; i++) {
                thermostat.up();
            }
            expect(thermostat.getCurrentTemperature()).toEqual(32);
        })
    })

    it('can be reset to 20 degress', function () {
        for (var i = 0; i < 6; i++) {
            thermostat.up();
        }
        thermostat.resetTemperature();
        expect(thermostat.getCurrentTemperature()).toEqual(20)
    })

    describe('displaying usage levels', function () {
        describe('when the temp is below 18', function () {
            it('is considered low usage', function () {
                for (var i = 0; i < 3; i++) {
                    thermostat.down();
                }
                expect(thermostat.energyUsage()).toEqual('low-usage');
            });
        });
        describe('when it is between 18 and 25', function () {
            it('is considered medium usage', function () {
                expect(thermostat.energyUsage()).toEqual('medium-usage');
            });
        });
        describe('when the temp is above 25', function () {
            it('is considered high usage', function () {
                for (var i = 0; i < 7; i++) {
                    thermostat.up();
                }
                expect(thermostat.energyUsage()).toEqual('high-usage');
            });
        });
    })
});