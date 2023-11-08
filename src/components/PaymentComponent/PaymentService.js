import axios from "axios";

const FLIGHT_API_BASE_URL = "http://51.20.35.122:4005/razorpayment";

class PaymentService {

    createOrder(Data){
        return axios.post(FLIGHT_API_BASE_URL +"/create_order", Data);
    }
}

export default new PaymentService()
