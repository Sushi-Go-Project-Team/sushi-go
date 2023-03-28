import {createClient} from '@supabase/supabase-js';
import {Auth} from '@supabase/auth-ui-react';
import {ThemeSupa} from '@supabase/auth-ui-shared';
import {useNavigate} from 'react-router-dom';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_ANON_KEY);

function Login() {
    const navigate = useNavigate();
    supabase.auth.onAuthStateChange(async (event) => {
        if (event !== "SIGNED_OUT") {
            navigate("/join");
        } else {
            navigate("/");
        }
    });
    return (
      <div className="App">
        <header className="App-header">
            <Auth 
                supabaseClient={supabase}
                appearance={{theme: ThemeSupa}}
                theme="light"
                providers={[]}
            />
        </header>
      </div>
    );
  }

export default Login;