// Contact.js

import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto p-5">
          <div className="bg-white p-8 rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns, feel free to reach out to us.
              We are here to assist you.
            </p>
            <p className="text-gray-700 mb-4">
              You can contact us via email at{' '}
              <a href="mailto:info@example.com" className="text-blue-500">
                info@example.com
              </a>{' '}
              or call us at <span className="font-bold">123-456-7890</span>.
            </p>
            {/* Add more contact information or a contact form */}
          </div>
        </div>
      );
};

export default Contact;