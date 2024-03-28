import React from "react";
import "./Homepage";
import "./cars.css";

function GT3_RS() {
  return (
    <div className="container">
      <h1>911 GT3 RS</h1>
      <img
        src="https://www.wsupercars.com/thumbnails-wide/Porsche/2023-Porsche-911-GT3-RS-001.jpg"
        alt=""
      />
      <p>
        Engine: 4.0-liter, naturally aspirated, 525 PS (386 kW) engine Top
        speed: 296 km/h Acceleration: 0 to 100 km/h in 3.2 seconds Wheelbase:
        2.457 mm Turning circle: 10.5 m Unladen weight (DIN): 1.450 kg Unladen
        weight (EU): 1.525 kg Permissible gross weight: 1.795 kg Maximum load:
        345 kg Fuel tank capacity: 64 l Fuel type: Petrol Max power (bhp@rpm):
        518 bhp @ 8500 rpm Max torque (Nm@rpm): 465 Nm @ 6300 rpm Mileage
        (ARAI): 7.4 kmpl Driving range: 474 Km Drivetrain: RWD Transmission:
        Automatic (DCT) - 7 Gears, Paddle Shift, Sport Mode Emission standard:
        BS6 Phase 2 Other features: Idle Start/Stop, retractable hard-top,
        Servotronic steering assist, adaptive cruise control
      </p>
    </div>
  );
}

export default GT3_RS;
