import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form",
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * Static form detection page for Netlify Forms.
 * Netlify scans this page at build time to register the form.
 * Form submissions POST to this URL.
 */
export default function NetlifyFormsPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Form Submission</h1>
      <p>This page is used for form processing.</p>
      
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        
        <p hidden>
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>
        
        <p>
          <label>
            Name: <input type="text" name="name" required />
          </label>
        </p>
        
        <p>
          <label>
            Email: <input type="email" name="email" required />
          </label>
        </p>
        
        <p>
          <label>
            Message: <textarea name="message" required></textarea>
          </label>
        </p>
        
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}
