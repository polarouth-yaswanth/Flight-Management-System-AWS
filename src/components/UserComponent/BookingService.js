import axios from 'axios';

const FLIGHT_API_BASE_URL = "http://34.222.20.89:4005/user";

class BookingService{
    passengerBooking(passengerData){
        return axios.post(FLIGHT_API_BASE_URL+"/adduser",passengerData)
    }
}
export default new BookingService();