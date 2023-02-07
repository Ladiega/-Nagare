import { useRef } from 'react';
import styles from './contacto.module.css'
export default function NewsLetterSignUpForm() {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    // this is where your mailchimp request is made

    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    });
  };

  return (
    <div>
    <div className={styles.form_container}>
        <h1>Newsletter</h1>
    <form onSubmit={subscribeUser}>
      <label htmlFor="email-input" className="form__label">
        Your Email
      </label>

      <input
        type="email"
        id="email-input"
        name="email"
        placeholder="Your Email"
        ref={inputRef}
        required
        autoCapitalize="off"
        autoCorrect="off"
      />

      <button type="submit" value="" name="subscribe">
        Subscribe
      </button>
    </form>
    </div>
    </div>
  );
}