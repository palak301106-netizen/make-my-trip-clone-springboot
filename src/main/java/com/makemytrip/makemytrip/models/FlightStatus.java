package com.makemytrip.makemytrip.models;

public class FlightStatus {

    private String flightId;
    private String status;
    private String delayReason;
    private String estimatedArrival;

    public FlightStatus() {
    }

    public FlightStatus(String flightId,
                        String status,
                        String delayReason,
                        String estimatedArrival) {

        this.flightId = flightId;
        this.status = status;
        this.delayReason = delayReason;
        this.estimatedArrival = estimatedArrival;
    }

    public String getFlightId() {
        return flightId;
    }

    public void setFlightId(String flightId) {
        this.flightId = flightId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDelayReason() {
        return delayReason;
    }

    public void setDelayReason(String delayReason) {
        this.delayReason = delayReason;
    }

    public String getEstimatedArrival() {
        return estimatedArrival;
    }

    public void setEstimatedArrival(String estimatedArrival) {
        this.estimatedArrival = estimatedArrival;
    }
}