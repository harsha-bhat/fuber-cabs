var express = require('express');
var router = express.Router();

var cabs = [{
    id: 1,
    driverName: "driver 1",
    driverNumber: "0000000001",
    location: {
      lattitude: 0,
      longitude: 0
    },
    isBooked: false,
    color: "WHITE"
  },{
    id: 2,
    driverName: "driver 2",
    driverNumber: "0000000002",
    location: {
      lattitude: 10,
      longitude: 10
    },
    isBooked: false,
    color: "PINK"
  },{
    id: 3,
    driverName: "driver 3",
    driverNumber: "0000000003",
    location: {
      lattitude: 10,
      longitude: 20
    },
    isBooked: false,
    color: "PINK"
  },{
    id: 4,
    driverName: "driver 4",
    driverNumber: "0000000004",
    location: {
      lattitude: 20,
      longitude: 10
    },
    isBooked: false,
    color: "WHITE"
  },{
    id: 5,
    driverName: "driver 5",
    driverNumber: "0000000005",
    location: {
      lattitude: 20,
      longitude: 20
    },
    isBooked: false,
    color: "WHITE"
  }];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fuber' });
});

router.get('/book', function(req, res, next) {
  if (req.query.lattitude && req.query.longitude && !isNaN(req.query.lattitude) && !isNaN(req.query.longitude)) {
    var lattitude = parseInt(req.query.lattitude);
    var longitude = parseInt(req.query.longitude);
    var userLocation = {
      lattitude: lattitude,
      longitude: longitude
    };
    var color = req.query.color || null;
    var cab = getClosestCab(userLocation, color);
    if (cab) {
      cab.isBooked = true;
      res.json({
        message: "Cab booked!",
        cabID: cab.id,
        driverName: cab.driverName,
        driverNumber: cab.driverNumber,
        location: cab.location
      });
    } else {
       res.json({
         message: "No cabs available!"
       });
    }

  } else {
    res.json({
      message: "Invalid/Missing parameters"
    });
  }
});


router.get('/complete', function(req, res, next) {
  if (req.query.id && !isNaN(req.query.id) && req.query.lattitude && req.query.longitude && !isNaN(req.query.lattitude) && !isNaN(req.query.longitude)) {
    var cabID = parseInt(req.query.id);
    var lattitude = parseInt(req.query.lattitude);
    var longitude = parseInt(req.query.longitude);
    var location = {
      lattitude: lattitude,
      longitude: longitude
    };
    var userCab = null;
    cabs.forEach(function(cab) {
      if (cabID === cab.id) {
        userCab = cab;
      }
    });
    if (userCab) {
      if (userCab.isBooked) {
        userCab.isBooked = false;
        var distance = getDistance(userCab.location, location);
        userCab.location = location;
        res.json({
          message: "Ride completed!",
          distance: distance
        })
      } else {
        res.json({
          message: "Can't complete ride for a cab which is not booked!"
        });
      }
    } else {
      res.json({
        message: "Could not find cab with id " + cabID
      });
    }
  } else {
    res.json({
      message: "Invalid/Missing parameters"
    });
  }
});

router.get('/showall', function(req, res, next) {
  res.json({
    cabs: cabs
  });
});

function getDistance(location1, location2) {
  var a = location1.lattitude - location2.lattitude;
  var b = location1.longitude - location2.longitude;
  var c = Math.sqrt(a*a + b*b);
  return c;
}

function getClosestCab (location, color) {
  var closest = null;
  var closestDistance = Infinity;
  cabs.forEach(function(cab) {
    if (!cab.isBooked) {
      if (color) {
        if (color.toUpperCase() === cab.color) {
          var distance = getDistance(cab.location, location);
          if (distance < closestDistance) {
            closestDistance = distance;
            closest = cab;
          }
        }
      } else {
        var distance = getDistance(cab.location, location);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = cab;
        }
      }

    }
  });
  return closest;
}

module.exports = router;
