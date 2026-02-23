/**
 * Hidden static form for Netlify build-time detection.
 * Netlify scans the built HTML for forms with data-netlify="true".
 * Because Next.js renders forms on the client, this static form ensures
 * Netlify detects and registers the form during the build.
 * It is visually hidden and never shown to users.
 */
export function NetlifyFormFallback() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="hidden"
      aria-hidden="true"
      tabIndex={-1}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <textarea name="message" required />
    </form>
  );
}
