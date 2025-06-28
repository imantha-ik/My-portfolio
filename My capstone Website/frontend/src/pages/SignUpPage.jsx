
    import React, { useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; 
    import { useAuth } from '@/contexts/AuthContext';
    import { useToast } from '@/components/ui/use-toast';

    const SignUpPage = () => {
      const [fullName, setFullName] = useState('');
      const [email, setEmail] = useState('');
      const [occupation, setOccupation] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [isLoading, setIsLoading] = useState(false);
      const { signup } = useAuth();
      const navigate = useNavigate();
      const { toast } = useToast();

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (password !== confirmPassword) {
          toast({
            variant: "destructive",
            title: "Signup Failed",
            description: "Passwords do not match.",
          });
          return;
        }
      
        if (!fullName || !email || !occupation || !password) {
          toast({
            variant: "destructive",
            title: "Signup Failed",
            description: "Please fill in all fields.",
          });
          return;
        }
      
        setIsLoading(true);
      
        try {
          const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fullName,
              email,
              occupation,
              password,
            }),
          });
      
          const data = await response.json();
      
          if (!response.ok) {
            throw new Error(data.message || 'Signup failed');
          }
      
          toast({
            title: "Signup Successful",
            description: "Your account has been created.",
          });
      
          navigate('/login'); 
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Signup Failed",
            description: error.message,
          });
        } finally {
          setIsLoading(false);
        }
      };
      
      return (
        <div className="relative flex items-start justify-center min-h-screen bg-cover bg-center bg-signup-bg px-4 pt-8 pb-6 md:justify-start md:pl-20">



          <div className="absolute inset-0 bg-black/50 z-0"></div> {/* Dark overlay */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             className="w-full max-w-md z-10"
           >
            <Card className="bg-card/90 backdrop-blur-sm">
              <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-3xl font-bold text-primary">Create An Account</CardTitle>
                <CardDescription>Join Elemental AIM to start exploring</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                   <div className="space-y-2">
                     <Label htmlFor="occupation">Occupation</Label>
                     <Select onValueChange={setOccupation} value={occupation} disabled={isLoading}>
                       <SelectTrigger id="occupation">
                         <SelectValue placeholder="Select Occupation" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="Student">Student</SelectItem>
                         <SelectItem value="Teacher">Teacher</SelectItem>
                         <SelectItem value="Parent">Parent</SelectItem>
                         <SelectItem value="Other">Other</SelectItem>
                       </SelectContent>
                     </Select>
                   </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white" disabled={isLoading}>
                    {isLoading ? 'Creating Account...' : 'Sign Up'}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 text-center text-sm">
                <p>Already have an account?</p>
                <Link to="/login" className="font-medium text-primary hover:underline">
                  Sign In
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      );
    };

    export default SignUpPage;
  