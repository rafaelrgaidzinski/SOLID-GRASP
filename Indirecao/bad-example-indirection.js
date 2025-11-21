class Cart {
  pay(amount) {
    // comunicação direta com Gateway de pagamento!
    paymentGateway.process(amount);
  }
}