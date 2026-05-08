import { useState } from 'react';

const labelCls = 'font-inter text-[11px] tracking-[0.18em] text-gold uppercase';
const underlineBase = 'w-full bg-transparent text-ivory font-inter text-[15px] focus:outline-none transition-colors duration-300 py-2 border-0 border-b';
const ulStyle = (err?: boolean) => ({ borderBottom: `1px solid ${err ? '#f87171' : 'rgba(198,169,107,0.35)'}`, borderRadius: 0 });

function Field({ label, error, children }: { label: string; error?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className={labelCls}>{label}</span>
      {children}
    </div>
  );
}

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
    ...fieldStyle,
    border: `1px solid ${errors[k] ? '#f87171' : 'rgba(198,169,107,0.18)'}`,
  });

  return (
    <section id="contact" className="section section--blue section--divider">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">CONTACT</span>
          <h2 className="section-h2">Let's talk about your property.</h2>
          <p className="section-sub">Whether you have one property or ten, we'll give you an honest assessment of what it could earn under each of our three strategies.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">
          <div className="p-8 lg:p-10"
            style={{ background: 'rgba(20,28,46,0.55)', border: '1px solid rgba(198,169,107,0.15)', borderRadius: 16 }}>
            {sent ? (
              <div className="text-gold font-inter text-[18px] text-center py-12">
                Thank you — we'll be in touch within 48 hours.
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <Field label="Full Name" error={errors.name}>
                  <input className={underlineBase} style={ulStyle(errors.name)}
                    value={form.name} onChange={(e) => update('name', e.target.value)} />
                </Field>
                <Field label="Email Address" error={errors.email}>
                  <input type="email" className={underlineBase} style={ulStyle(errors.email)}
                    value={form.email} onChange={(e) => update('email', e.target.value)} />
                </Field>
                <Field label="Phone Number" error={errors.phone}>
                  <input type="tel" className={underlineBase} style={ulStyle(errors.phone)}
                    value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                </Field>
                <Field label="Property Location">
                  <input className={underlineBase} style={ulStyle()}
                    placeholder="e.g. Birmingham B1, Manchester M1"
                    value={form.location} onChange={(e) => update('location', e.target.value)} />
                </Field>
                <Field label="Your Situation">
                  <select value={form.setup} onChange={(e) => update('setup', e.target.value)}
                    className={underlineBase} style={ulStyle()}>
                    <option value="" style={{ background: '#0B1426' }}>Select your situation</option>
                    <option style={{ background: '#0B1426' }}>Standard AST Tenancy</option>
                    <option style={{ background: '#0B1426' }}>Currently Vacant</option>
                    <option style={{ background: '#0B1426' }}>Already in SA</option>
                    <option style={{ background: '#0B1426' }}>Looking to Flip/Invest</option>
                    <option style={{ background: '#0B1426' }}>Other</option>
                  </select>
                </Field>
                <Field label="Message">
                  <textarea rows={4}
                    className={'w-full bg-transparent text-ivory font-inter text-[15px] focus:outline-none py-2 resize-none border-0 border-b'}
                    style={ulStyle()}
                    placeholder="Tell us about your property or investment goals..."
                    value={form.message} onChange={(e) => update('message', e.target.value)} />
                </Field>
                <div onClick={submit} role="button" tabIndex={0}
                  className="w-full bg-gold text-midnight font-inter text-[15px] font-semibold text-center cursor-pointer transition hover:brightness-110 flex items-center justify-center mt-2"
                  style={{ height: 56, borderRadius: 8 }}>
                  Send My Enquiry
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            {[
              { Icon: Mail, label: 'EMAIL', value: 'hello@abodooproperties.co.uk' },
              { Icon: Phone, label: 'PHONE', value: '+44 (0) 121 000 0000' },
              { Icon: Msg, label: 'WHATSAPP', value: <a href="https://wa.me/441210000000" className="hover:underline">Chat with us</a> },
              { Icon: Pin, label: 'ADDRESS', value: 'Birmingham, United Kingdom' },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-4"
                style={{
                  background: 'rgba(20,28,46,0.55)',
                  border: '1px solid rgba(198,169,107,0.10)',
                  borderRadius: 12,
                  padding: '18px 22px',
                }}>
                <div className="flex items-center justify-center shrink-0"
                  style={{ width: 44, height: 44, border: '1px solid rgba(198,169,107,0.35)', borderRadius: 8 }}>
                  <r.Icon />
                </div>
                <div className="min-w-0">
                  <div className="font-inter text-[10px] tracking-widest text-gold" style={{ marginBottom: 4 }}>{r.label}</div>
                  <div className="font-inter text-[15px] text-ivory truncate">{r.value}</div>
                </div>
              </div>
            ))}
            <div className="flex flex-col items-center justify-center gap-3 mt-2"
              style={{ background: 'rgba(20,28,46,0.55)', border: '1px solid rgba(198,169,107,0.10)', borderRadius: 12, height: 200 }}>
              <BigPin />
              <div className="font-inter text-[13px]" style={{ color: 'rgba(248,246,242,0.5)' }}>Birmingham, UK</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
