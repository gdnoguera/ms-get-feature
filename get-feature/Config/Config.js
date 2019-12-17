"use strict";

module.exports = {
    logs: process.env.LOGS || true,
    port: process.env.PORT || 3000,
    time_out: process.env.TIME_OUT || 5000
  };