import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 md:p-12">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Refund & Cancellation Policy
        </h1>

        {/* Introduction */}
        <p className="text-gray-600 text-lg leading-relaxed text-center">
          We strive for complete customer satisfaction. If you are not happy with our services, we may provide a refund upon a genuine investigation.
          Please review our <b>terms & conditions</b> before making a purchase.
        </p>

        {/* Cancellation Policy */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-4">
            Cancellation Policy
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            For cancellations, please email us at <b>support@businessxstream.com</b>. 
            All refund requests must be made within <b>2 working days</b> of availing the services.
          </p>
        </div>

        {/* Refund Policy */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-green-500 pl-4">
            Refund Policy
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            We strive to offer the best services to our clients. If you are not completely satisfied with the current services 
            and meet the refund criteria, we can process a refund.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxed">
            If paid by credit card, refunds will be issued to the <b>original payment method</b>. 
            Payment gateway transactions will be refunded to the same account.
          </p>
        </div>

        {/* Final Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-700 text-lg">
            For any queries, reach out to us at <b>support@businessxstream.com</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
