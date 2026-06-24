import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Using Web3Forms API - Free form endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '43247ea3-9035-4172-bc0f-b39a643e5ff8', // User needs to replace this
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name} - Portfolio Contact Form`,
          from_name: 'Portfolio Contact Form',
          to_email: 'steffins171@gmail.com'
        })
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try emailing directly at steffins171@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative min-h-screen flex items-center py-32 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-6xl font-bold mb-20 text-center bg-gradient-to-r from-amber-300 via-rose-400 to-purple-500 bg-clip-text text-transparent"
          style={{ fontFamily: "'Cinzel', serif" }}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-8"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-900/20 to-rose-900/20 p-8 rounded-3xl border-2 border-amber-400/30 shadow-2xl">
              <h3 className="text-3xl font-semibold mb-8 text-amber-300" style={{ fontFamily: "'Cinzel', serif" }}>
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.a
                  href="mailto:steffins171@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-amber-400 transition-colors group interactive"
                  whileHover={{ x: 15 }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500/30 to-rose-600/30 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-amber-500/50 transition-shadow border-2 border-amber-400/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400" style={{ fontFamily: "'Playfair Display', serif" }}>Email</p>
                    <p className="font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>steffins171@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+918148393271"
                  className="flex items-center gap-4 text-gray-300 hover:text-rose-400 transition-colors group interactive"
                  whileHover={{ x: 15 }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-500/30 to-purple-600/30 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-rose-500/50 transition-shadow border-2 border-rose-400/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400" style={{ fontFamily: "'Playfair Display', serif" }}>Phone</p>
                    <p className="font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>+91 8148393271</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 text-gray-300"
                  whileHover={{ x: 15 }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/30 to-amber-600/30 flex items-center justify-center border-2 border-purple-400/20">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400" style={{ fontFamily: "'Playfair Display', serif" }}>Location</p>
                    <p className="font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>Hosur - 635109, Tamil Nadu</p>
                  </div>
                </motion.div>
              </div>

              <div className="flex gap-6 mt-8">
                <motion.a
                  href="https://github.com/steffinkishore2-lang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/30 to-rose-600/30 flex items-center justify-center hover:shadow-lg hover:shadow-amber-500/60 transition-all interactive border-2 border-amber-400/30"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-7 h-7 text-amber-400" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/mariavictor-g-6142b8370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500/30 to-purple-600/30 flex items-center justify-center hover:shadow-lg hover:shadow-rose-500/60 transition-all interactive border-2 border-rose-400/30"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-7 h-7 text-rose-400" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            style={{ willChange: 'transform, opacity' }}
          >
            <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-gradient-to-br from-amber-900/20 to-purple-900/20 p-8 rounded-3xl border-2 border-rose-400/30 shadow-2xl space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Name
                </label>
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border-2 border-amber-400/20 focus:border-amber-400 focus:outline-none text-white transition-all"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  animate={{
                    boxShadow: focusedField === 'name' ? '0 0 30px rgba(251, 191, 36, 0.6)' : '0 0 0px rgba(251, 191, 36, 0)',
                  }}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Email
                </label>
                <motion.input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border-2 border-rose-400/20 focus:border-rose-400 focus:outline-none text-white transition-all"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  animate={{
                    boxShadow: focusedField === 'email' ? '0 0 30px rgba(236, 72, 153, 0.6)' : '0 0 0px rgba(236, 72, 153, 0)',
                  }}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Message
                </label>
                <motion.textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border-2 border-purple-400/20 focus:border-purple-400 focus:outline-none text-white resize-none transition-all"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  animate={{
                    boxShadow: focusedField === 'message' ? '0 0 30px rgba(168, 85, 247, 0.6)' : '0 0 0px rgba(168, 85, 247, 0)',
                  }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 rounded-xl font-semibold text-lg shadow-2xl shadow-amber-500/60 flex items-center justify-center gap-2 interactive border-2 border-amber-400/40 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={!isSubmitting ? {
                  scale: 1.05,
                  boxShadow: '0 0 60px rgba(251, 191, 36, 0.9)'
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {!isSubmitting && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                )}
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 relative z-10 animate-spin" />
                ) : (
                  <Send className="w-5 h-5 relative z-10" />
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
