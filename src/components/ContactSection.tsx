import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send } from 'lucide-react';

// Reusable Input Component
interface InputFieldProps {
  type: string;
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ 
  type, 
  id, 
  label, 
  placeholder, 
  required = true 
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="font-pixel block mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id} // Ensures Formspree picks up the value
        placeholder={placeholder}
        className="w-full border-4 border-black p-2 font-vt323 text-lg text-black bg-yellow-100"
        required={required}
      />
    </div>
  );
};

// Reusable Textarea Component
interface TextareaFieldProps {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ 
  id, 
  label, 
  placeholder, 
  required = true 
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="font-pixel block mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={id} // Ensures Formspree reads this field
        placeholder={placeholder}
        className="w-full border-4 border-black p-2 font-vt323 text-lg text-black bg-yellow-100"
        rows={5}
        required={required}
      />
    </div>
  );
};

const Contact: React.FC = () => {
  // Replace "xpwpwerk" with your actual Formspree form ID.
  const [state, handleSubmit] = useForm("xpwpwerk");

  // Show a thank you message on successful submission
  if (state.succeeded) {
    return (
      <section id="contact" className="py-16 bg-retro-pink/20 dark:bg-gray-800/30">
        <div className="retro-container">
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="retro-card">
            <h3 className="font-pixel text-xl mb-4">Thank you for your message!</h3>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-retro-pink/20 dark:bg-gray-800/30">
      <div className="retro-container">
        <h2 className="section-title">GET IN TOUCH</h2>
        
        <form onSubmit={handleSubmit} className="retro-card">
          <h3 className="font-pixel text-xl mb-4">Send Message</h3>

          {/* Input Fields */}
          <InputField
            type="text"
            id="name"
            label="Name"
            placeholder="Your Name"
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
          
          <InputField
            type="email"
            id="email"
            label="Email"
            placeholder="Your Email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          
          <TextareaField
            id="message"
            label="Message"
            placeholder="Your Message"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="pixel-button w-full flex items-center justify-center gap-2"
          >
            {state.submitting ? (
              <span>SENDING...</span>
            ) : (
              <>
                <Send className="h-5 w-5" />
                SEND MESSAGE
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
