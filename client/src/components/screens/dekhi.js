import styles from './styles.module.css';
import {Link} from 'react-router-dom';


const Register = () => {
    return (
        <div className = {styles.signup_container}>
            <div className = {styles.signup_form}>
                <div className = {styles.left}>
                    <h1>Welcome Back</h1>
                <Link to = "/LoginScreen.js">
                    <button type = 'button' className = {styles.white_btn}>
                    Sign In
                    </button>
                </Link>
                </div>



                <div className = {styles.right}>
                    <form className ={styles.form_container}>
                        <h1> Create Account</h1>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

