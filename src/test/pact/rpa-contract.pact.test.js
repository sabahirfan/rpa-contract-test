const { Verifier } = require('@pact-foundation/pact');
let opts = {
  providerBaseUrl: 'http://localhost:3200',
  provider: 'rpa_api',
  pactBrokerUrl: 'http://localhost:80',
  // pactBrokerUsername: process.env.PACT_USERNAME,
  // pactBrokerPassword: process.env.PACT_PASSWORD,
  publishVerificationResult: true,
  providerVersion: '1.0',
};

return new Verifier(opts).verifyProvider().then(output => {
  console.log('Pacts successfully verified!');
  console.log(output);
}).finally(() => {
  console.log('Completed verification');
});

