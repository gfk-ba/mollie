# mollie
Meteor package for the Mollie payment gateway

Usage:
```
var mollieAPIKey = ''; // Fill in your (test) api key here
mollie = new Mollie.API.Client;
mollie.setApiKey(mollieAPIKey);
```

Create payment
```
mollie.payments.create({
    amount: "10.00",
    description: "Short description of payment",
    redirectUrl: Meteor.absoluteUrl() + "url/where/mollie/redirects/to",
    webhookUrl: Meteor.absoluteUrl() + "api/mollie/payment/" + paymentId,
    metadata: {
        order_id: paymentId
    }
}, Meteor.bindEnvironment(function(payment) {
    //console.log(payment);
    // do something with the payment object
    // contains the paymentUrl to redirect to for the user to start the payment
}));

```

Check for payment
```
mollie.payments.get(paymentId, Meteor.bindEnvironment(function (molliePayment) {
    if (molliePayment.status === 'paid') {
        // it has been paid
    } else {
        // not paid
        // molliePayment.status === 'open'
        // molliePayment.status === 'canceled'
        // molliePayment.status === 'error'
    }
}));

```

Make sure you are using the Meteor.bindEnvironment() wrapper for the callback functions.

See the Npm module documentation for further details: https://github.com/mollie/mollie-api-node

See the mollie API documentation for all info: https://www.mollie.com/en/docs
