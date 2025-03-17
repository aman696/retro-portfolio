import { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

// Reusable Input Component
interface InputFieldProps {
  type: string;
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ 
  type, 
  id, 
  label, 
  placeholder, 
  value, 
  onChange, 
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
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border-4 border-black p-2 font-vt323 text-lg bg-yellow-100"
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
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ 
  id, 
  label, 
  placeholder, 
  value, 
  onChange, 
  required = true 
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="font-pixel block mb-2">
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border-4 border-black p-2 font-vt323 text-lg bg-yellow-100"
        rows={5}
        required={required}
      />
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg('');

    const serviceId = 'service_ui43wnq';
    const userId = 'L3LkWq2RrEa8f6Had';

    try {
      const result = await emailjs.send(
        serviceId,
        'template_xhd9dhw',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'caman1744@gmail.com'
        },
        userId
      );

      console.log(result.text);
      setResponseMsg('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error(error);
      setResponseMsg('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

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
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <InputField
            type="email"
            id="email"
            label="Email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <TextareaField
            id="message"
            label="Message"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="pixel-button w-full flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>SENDING...</span>
            ) : (
              <>
                <Send className="h-5 w-5" />
                SEND MESSAGE
              </>
            )}
          </button>

          {/* Response Message */}
          {responseMsg && (
            <div className="bg-retro-teal border-2 border-black p-3 mt-4">
              <p className="font-vt323 text-lg">{responseMsg}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
