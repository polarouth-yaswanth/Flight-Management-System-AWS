import axios from "axios";

const FLIGHT_BASE_REST_API_URL = "http://51.20.35.122:4005/admin";


const FLIGHT_BASE_REST_API_URL2 = "http://51.20.35.122:4005";

class FlightService {

    getFlight() {
        return axios.get(FLIGHT_BASE_REST_API_URL+"/flightsavailable");
    }
    addFlight(Flight) {
        return axios.post(FLIGHT_BASE_REST_API_URL+"/addflight", Flight);

    }
    deletFlight(id){
        return axios.delete(FLIGHT_BASE_REST_API_URL+"/deleteflight/"+id);
       
    }
    getFlightById(id){
        return axios.get(FLIGHT_BASE_REST_API_URL+"/flight/"+id);
    }
    addVacancy(Seats){
        return axios.post(FLIGHT_BASE_REST_API_URL2+"/addvacancy",Seats);
    }
}

export default new FlightService()
