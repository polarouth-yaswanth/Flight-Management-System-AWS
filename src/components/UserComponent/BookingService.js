import axios from 'axios';

const FLIGHT_API_BASE_URL = "http://51.20.35.122:4005/user";

class BookingService{
    passengerBooking(passengerData){
        return axios.post(FLIGHT_API_BASE_URL+"/adduser",passengerData)
    }
}
export default new BookingService();
