import "../styles/Login.css";
function Login() {
    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Voting System</h1>
                <p>Please sign in to continue.</p>

                <form>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;