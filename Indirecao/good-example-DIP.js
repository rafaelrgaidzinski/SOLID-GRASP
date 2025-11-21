// Interface
class PaymentGateway {
  process(amount) {}
}

class PaypalGateway extends PaymentGateway {
  process(amount) { /*...*/ }
}

class PaymentService {
  constructor(gateway) { // espera uma abstração!
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