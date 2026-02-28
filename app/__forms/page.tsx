/**
 * Static form detection page for Netlify Forms.
 * Netlify scans this page at build time to register the form.
 * Users never see this page - it's only for form submissions.
 */
export default function FormsPage() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          hidden
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message" />
          <input type="text" name="bot-field" />
        </form>
      </body>
    </html>
  );
}
