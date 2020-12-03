
$(document).ready(function() {
    let thermostat = new Thermostat();
    updateTemperature();

    $('#temperature-up').click(function() {
        thermostat.up();
        updateTemperature();
    });

    $('#temperature-down').click(function() {
        thermostat.down();
        updateTemperature();
    });

    $('#temperature-reset').click(function() {
        thermostat.resetTemperature();
        updateTemperature();
    });

    $('#powersaving-on').click(function() {
        thermostat.switchPowerSavingModeOn();
        $('#power-saving-status').text('on')
        updateTemperature();
    })

    $('#powersaving-off').click(function() {
        thermostat.switchPowerSavingModeOff();
        $('#power-saving-status').text('off')
        updateTemperature();
    })

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.energyUsage());
    }

    $('#city').change(function() {
        var city = $('#city').val();
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
            $('#current-weather').text(data.main.temp)
        })
    })

});