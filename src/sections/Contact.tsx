import type { FormEvent } from "react";
import PageIntro from "../components/PageIntro";

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry from ${String(form.get("name") || "website visitor")}`);
    const body = encodeURIComponent(
      `Name: ${String(form.get("name") || "")}\nEmail: ${String(form.get("email") || "")}\nCompany: ${String(form.get("company") || "")}\n\n${String(form.get("message") || "")}`,
    );
    window.location.href = `mailto:gschauhan1991@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageIntro
        eyebrow="Start a conversation"
        title="Tell us what you’re working on."
        description="Share the challenge, the opportunity, or simply where you need momentum. We’ll respond with a clear next step."
        meta="Replies within 1–2 business days"
      />
      <section className="section container contact-grid">
        <div className="contact-details">
          <div className="contact-detail"><span>Email</span><a href="mailto:gschauhan1991@gmail.com">gschauhan1991@gmail.com</a></div>
          <div className="contact-detail"><span>Phone</span><a href="tel:+13102591394">+1 310 259 1394</a></div>
          <div className="contact-detail"><span>Best for</span><strong>New products, modernization, AI, and technical strategy</strong></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required /></div>
            <div className="field"><label htmlFor="email">Work email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
          </div>
          <div className="field"><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" /></div>
          <div className="field"><label htmlFor="message">What can we help you build?</label><textarea id="message" name="message" required /></div>
          <button className="button button-primary" type="submit">Open email draft <span aria-hidden="true">↗</span></button>
          <p className="form-note">Submitting opens your email client with the message ready for your review.</p>
        </form>
      </section>
    </>
  );
};

export default Contact;
