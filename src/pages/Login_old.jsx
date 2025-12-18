import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/scsLogo.png';

export default function About() {
    return (
        <>
            <div className="main-container">
                <section className="welcomeText">
                    <h1>Welcome to SCS Login Page!</h1>
                </section>

                <section className="login-card">
                    <img src={logo} alt="SCS Logo" className="login-logo" />
                    <form>
                        <div className="input-group">
                            <label htmlFor="username">Username: </label>
                            <input type="text" id="username" name="username" required />
                        </div>

                        <div class="input-group">
                            <label htmlFor="password">Password: </label>
                            <input type="password" id="password" name="password" required />
                        </div>

                        <button type="submit">Login</button>
                    </form>
                </section>
            </div></>
    );
}
