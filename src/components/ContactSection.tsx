import { useState } from 'react';

const inputCls = 'w-full bg-transparent pb-3 pt-2 text-ivory font-inter text-[16px] focus:outline-none transition-colors duration-300';

const Mail = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C6A96B" strokeWidth="1.5"><rect x="2" y="4" width="16" height="12" rx="1.5" /><path d="M2 6 L10 11 L18 6" /></svg>;
const Phone = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C6A96B" strokeWidth="1.5"><path d="M4 3 H7 L8.5 7 L6.5 8.5 C7.5 11 9 12.5 11.5 13.5 L13 11.5 L17 13 V16 C17 17 16 18 15 18 C9 18 2 11 2 5 C2 4 3 3 4 3 Z" /></svg>;
const Msg = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C6A96B" strokeWidth="1.5"><path d="M3 4 H17 V14 H10 L6 17 V14 H3 Z" /></svg>;
const Pin = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C6A96B" strokeWidth="1.5"><path d="M10 2 C7 2 4.5 4.5 4.5 7.5 C4.5 11.5 10 18 10 18 S15.5 11.5 15.5 7.5 C15.5 4.5 13 2 10 2 Z" /><circle cx="10" cy="7.5" r="2" /></svg>;
const BigPin = () => <svg width="40" height="40" viewBox="0 0 20 20" fill="none" stroke="#C6A96B" strokeWidth="1.2"><path d="M10 2 C7 2 4.5 4.5 4.5 7.5 C4.5 11.5 10 18 10 18 S15.5 11.5 15.5 7.5 C15.5 4.5 13 2 10 2 Z" /><circle cx="10" cy="7.5" r="2" /></svg>;

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', setup: '', message: '' });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);

  const update = (k: string, v: string) => setForm({ ...form, [k]: v });

  const submit = () => {
    const errs: Record<string, boolean> = {};
    ['name', 'email', 'phone'].forEach((k) => { if (!form[k as keyof typeof form]) errs[k] = true; });
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  const borderFor = (k: string) => ({
    borderBottom: `1px solid ${errors[k] ? '#f87171' : 'rgba(248,246,242,0.14)'}`,
  });

  return (
    <section id="contact" className="section section--blue section--divider">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">CONTACT</span>
          <h2 className="section-h2">Let's talk about your property.</h2>
          <p className="section-sub">Whether you have one property or ten, we'll give you an honest assessment of what it could earn under each of our three strategies.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-10 lg:p-12"
            style={{ background: 'rgba(42,47,54,0.5)', border: '1px solid rgba(198,169,107,0.15)', borderRadius: 16 }}>
            {sent ? (
              <div className="text-gold font-inter text-[18px] text-center py-12">
                Thank you — we'll be in touch within 48 hours.
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <input className={inputCls} style={borderFor('name')} placeholder="Full Name"
                  value={form.name} onChange={(e) => update('name', e.target.value)} />
                <input type="email" className={inputCls} style={borderFor('email')} placeholder="Email Address"
                  value={form.email} onChange={(e) => update('email', e.target.value)} />
                <input type="tel" className={inputCls} style={borderFor('phone')} placeholder="Phone Number"
                  value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                <input className={inputCls} style={borderFor('location')}
                  placeholder="Property Location (e.g. Birmingham B1, Manchester M1)"
                  value={form.location} onChange={(e) => update('location', e.target.value)} />
                <select value={form.setup} onChange={(e) => update('setup', e.target.value)}
                  className="text-ivory font-inter text-[15px] rounded-md py-3 px-3 focus:outline-none"
                  style={{ background: '#2A2F36', border: '1px solid rgba(198,169,107,0.15)' }}>
                  <option value="">Select your situation</option>
                  <option>Standard AST Tenancy</option>
                  <option>Currently Vacant</option>
                  <option>Already in SA</option>
                  <option>Looking to Flip/Invest</option>
                  <option>Other</option>
                </select>
                <textarea rows={4} className={inputCls + ' resize-none'} style={borderFor('message')}
                  placeholder="Tell us about your property or investment goals..."
                  value={form.message} onChange={(e) => update('message', e.target.value)} />
                <div onClick={submit} role="button" tabIndex={0}
                  className="w-full bg-gold text-midnight py-4 rounded-md font-inter text-[15px] font-semibold text-center cursor-pointer transition hover:brightness-110">
                  Send My Enquiry
                </div>
              </div>
            )}
          </div>
          <div>
            {[
              { Icon: Mail, text: 'hello@abodooproperties.co.uk' },
              { Icon: Phone, text: '+44 (0) 121 000 0000' },
              { Icon: Msg, text: <a href="https://wa.me/441210000000" className="text-gold hover:underline">Chat on WhatsApp</a> },
              { Icon: Pin, text: 'Birmingham, United Kingdom' },
            ].map((r, i) => (
              <div key={i} className="flex items-start gap-3 mb-6">
                <div className="mt-1"><r.Icon /></div>
                <div className="font-inter text-[16px]" style={{ color: 'rgba(248,246,242,0.75)' }}>{r.text}</div>
              </div>
            ))}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 h-56"
              style={{ background: 'rgba(42,47,54,0.4)', border: '1px solid rgba(198,169,107,0.12)', borderRadius: 12 }}>
              <BigPin />
              <div className="font-inter text-[14px]" style={{ color: 'rgba(248,246,242,0.5)' }}>Birmingham, UK</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
