if (process.platform === 'linux') {
  // Is there a better way to target Raspberry Pi?
  var bindings = require('bindings')
  var p = bindings('pwm.node')
  var i = bindings('imu.node')
  var a = bindings('ahrs.node')
}

module.exports = {

  pwmController: function() {
    try {
      return new p.PWM();
    } catch (e) {
      return {
        setPWM: function(channel, uS) {
          // console.log('PWM Command: Channel '+channel+' set to '+uS+'uS')
        }
      }
    }
  },
  ahrsData: function() {
    try {
      return new a.AHRS();
    } catch (e) {
      return {
        getData: function() {
          return {
            ax: 0, ay: 0, az: 0, gx: 0, gy: 0, gz: 0, mx: 0, my: 0, mz: 0
          }
        }
      }
    }
  },
  imuReader: function() {
    try {
      return new i.IMU();
    } catch (e) {
      return {
        getIMU: function() {
          return {
            ax: 0, ay: 0, az: 0, gx: 0, gy: 0, gz: 0, mx: 0, my: 0, mz: 0
          }
        }
      }
    }
  }

}
