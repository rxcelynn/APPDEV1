import styles from "./SignUp.module.css";
import logo from "../../assets/logo.svg";

export default function SignUp({ onLoginClick }) {
    return (
        <div className={styles.signup}>
            {/* Left panel */}
            <section className={styles.left}>
                <h1 className={styles.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img
                    className={styles.logo}
                    src={logo}
                    alt="Design Spacee logo"
                />

                <p className={styles.link}>
                    figma.com/@designspacee
                </p>
            </section>

            {/* Right panel */}
            <section className={styles.right}>
                <form
                    className={styles.form}
                    onSubmit={(event) => event.preventDefault()}
                >
                    <h2>Create Account</h2>

                    <div className={styles.socialButtons}>
                        <button
                            type="button"
                            className={styles.socialButton}
                        >
                            Sign up with Google
                        </button>

                        <button
                            type="button"
                            className={styles.socialButton}
                        >
                            Sign up with Facebook
                        </button>
                    </div>

                    <div className={styles.divider}>
                        <span>OR</span>
                    </div>

                    <div className={styles.fields}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            aria-label="Full Name"
                            autoComplete="name"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                            autoComplete="email"
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            autoComplete="new-password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={styles.submitButton}
                    >
                        Create Account
                    </button>

                    <p className={styles.loginText}>
                        Already have an account?{" "}
                        <a
                            href="#"
                            onClick={(event) => {
                                event.preventDefault();
                                onLoginClick?.();
                            }}
                        >
                            Login
                        </a>
                    </p>
                </form>
            </section>
        </div>
    );
}