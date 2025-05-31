
    import React, { useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { useAuth } from '@/contexts/AuthContext';
    import { useToast } from '@/components/ui/use-toast';

    const LoginPage = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [isLoading, setIsLoading] = useState(false);
      const { login } = useAuth();
      const navigate = useNavigate();
      const { toast } = useToast();
      const [showDemoHint, setShowDemoHint] = useState(false);


      const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    toast({
      variant: "destructive",
      title: "Login Failed",
      description: "Please enter both email and password.",
    });
    return;
  }

  setIsLoading(true);

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    login(data.user);
    localStorage.setItem('user', JSON.stringify(data.user));

    toast({
      title: "Login Successful",
      description: `Welcome back, ${data.user.name}!`,
    });

    navigate('/profile');

  } catch (error) {
  // ✅ Enable demo fallback if credentials match
  if (email === '1234@gmail.com' && password === '1234') {
    const demoUser = {
      name: "Demo User",
      email: "1234@gmail.com",
      role: "demo",
    };

    login(demoUser);
    localStorage.setItem('user', JSON.stringify(demoUser));

    toast({
      title: "Demo Login Successful",
      description: `Welcome, ${demoUser.name}!`,
    });

    navigate('/profile');
    return;
  }

  // ❗ Set hint flag if backend fails
  if (error.message === 'Failed to fetch') {
    setShowDemoHint(true);
  }

  toast({
  variant: "destructive",
  title: "Login Failed",
  description:
    error.message === 'Failed to fetch'
      ? "Backend not reachable. Try demo login:\n1234@gmail.com / password: 1234"
      : error.message,
});

}
finally {
    setIsLoading(false);
  }
};


      return (
        <div className="relative flex items-center justify-end min-h-screen bg-cover bg-center bg-login-bg px-4 pt-8 md:pr-24">


           <div className="absolute inset-0 bg-black/50 z-0"></div> {/* Dark overlay */}
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             className="w-full max-w-md z-10"
           >
            <Card className="bg-card/90 backdrop-blur-sm">
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-3xl font-bold text-primary">Welcome Back!</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="#" className="text-sm text-primary hover:underline">
                        Forgot Password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white" disabled={isLoading}>
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 text-center text-sm">
                <p>Don't have an account?</p>
                <Link to="/signup" className="font-medium text-primary hover:underline">
                  Sign Up
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      );
    };

    export default LoginPage;
  