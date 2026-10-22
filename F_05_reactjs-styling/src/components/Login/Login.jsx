
import sidePic from '../../assets/side-pic.jpg';
import { useState } from 'react'
import styles from './Login.module.css'


function GoogleIcon() {
  return (
    <svg
      className={styles.googleIcon}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Google"
    >
      <path
        fill="#4285F4"
        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
      />
      <path
        fill="#34A853"
        d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
      />
      <path
        fill="#FBBC05"
        d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8l6.8-5.3Z"
      />
      <path
        fill="#EA4335"
        d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12Z"
      />
    </svg>
  )
}

export default function Login() {
  const [activeTab, setActiveTab] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function switchTab(tab) {
    setActiveTab(tab)
    setMessage('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    setMessage(
      activeTab === 'login'
        ? 'Login form submitted (demo only).'
        : 'Sign-up form submitted (demo only).',
    )
  }

  return (
    <main className={styles.page}>
      <section className={styles.loginCard}>
        <div className={styles.imagePanel}>
          <img
            className={styles.botanicalImage}
            src={sidePic}
            alt="Blue-gray botanical leaves"
          />
        </div>

        <div className={styles.formPanel}>
          <header className={styles.greeting}>
            <h1>Hello,</h1>
            <span>Guyss!</span>
          </header>

          <div className={styles.tabs} role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'login'}
              className={`${styles.tab} ${
                activeTab === 'login' ? styles.activeTab : ''
              }`}
              onClick={() => switchTab('login')}
            >
              Login
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'signup'}
              className={`${styles.tab} ${
                activeTab === 'signup' ? styles.activeTab : ''
              }`}
              onClick={() => switchTab('signup')}
            >
              SignUp
            </button>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label
              className={styles.visuallyHidden}
              htmlFor="email"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label
              className={styles.visuallyHidden}
              htmlFor="password"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              autoComplete={
                activeTab === 'login'
                  ? 'current-password'
                  : 'new-password'
              }
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <button className={styles.submitButton} type="submit">
              {activeTab === 'login' ? 'Login' : 'SignUp'}
            </button>

            {message && (
              <p className={styles.message} role="status">
                {message}
              </p>
            )}
          </form>

          <div className={styles.separator}>Or</div>

          <div className={styles.socialButtons}>
            <button
              type="button"
              className={styles.socialButton}
              aria-label="Continue with Google"
              onClick={() =>
                setMessage('Google sign-in is a visual demo only.')
              }
            >
              <GoogleIcon />
            </button>

            <button
            type="button"
            className={styles.socialButton}
            aria-label="Continue with Facebook"
            onClick={() =>
                setMessage('Facebook sign-in is a visual demo only.')
            }
            >
            <svg
                className={styles.facebookIcon}
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="12" fill="#1877F2" />
                <path
                fill="#FFFFFF"
                d="M13.5 20v-7h2.4l.4-2.8h-2.8V8.4c0-.8.3-1.4 1.4-1.4h1.5V4.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v1.9H7.8V13h2.5v7h3.2Z"
                />
            </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
