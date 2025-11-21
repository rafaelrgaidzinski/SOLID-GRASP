class PaymentService {
  constructor(gateway) {
    this.gateway = gateway;
  }
  pay(amount) {
    this.gateway.process(amount);
  }
}

class Cart {
  constructor(paymentService) {
    this.paymentService = paymentService;
  }
  pay(amount) {
    this.paymentService.pay(amount); // só fala com PaymentService
  }
}