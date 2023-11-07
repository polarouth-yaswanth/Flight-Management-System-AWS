import axios from "axios";

const FLIGHT_API_BASE_URL = "http://34.222.20.89:4005/razorpayment";

class PaymentService {

    createOrder(Data){
        return axios.post(FLIGHT_API_BASE_URL +"/create_order", Data);
    }
}

export default new PaymentService()