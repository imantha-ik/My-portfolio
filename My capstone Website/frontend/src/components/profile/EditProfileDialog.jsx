import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { User, Briefcase, Save } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const EditProfileDialog = ({ user, updateUser, isOpen, setIsOpen }) => {
  const [editName, setEditName] = useState('');
  const [editRole, setEditRole] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (user && isOpen) {
      setEditName(user.name || '');
      setEditRole(user.role || '');
    }
  }, [user, isOpen]);

  const handleSaveChanges = () => {
    if (!editName.trim()) {
      toast({
        variant: 'destructive',
        title: 'Validation Error',
        description: 'Name cannot be empty.',
      });
      return;
    }

    if (!editRole) {
      toast({
        variant: 'destructive',
        title: 'Validation Error',
        description: 'Please select a role.',
      });
      return;
    }

    updateUser({ name: editName, role: editRole });
    toast({ title: '✅ Profile updated successfully!' });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[480px] bg-white/90 dark:bg-[#0f172a]/80 backdrop-blur-md border border-border shadow-xl rounded-2xl px-6 py-5">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2 text-primary">
            <User className="h-6 w-6" /> Edit Your Profile
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Update your personal information below.
          </DialogDescription>
        </DialogHeader>

        <motion.div
          className="grid gap-6 py-4"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Full Name Field */}
          <motion.div
            variants={{ initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } }}
            className="space-y-1"
          >
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name
            </Label>
            <div className="flex items-center border border-input rounded-md bg-background/60">
              <User className="h-4 w-4 text-muted-foreground ml-3" />
              <Input
                id="name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="border-0 flex-1 pl-2 bg-transparent focus:ring-0"
                placeholder="Enter your full name"
              />
            </div>
          </motion.div>

          {/* Role Field */}
          <motion.div
            variants={{ initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } }}
            className="space-y-1"
          >
            <Label htmlFor="role" className="text-sm font-medium">
              Role / Occupation
            </Label>
            <div className="flex items-center border border-input rounded-md bg-background/60">
              <Briefcase className="h-4 w-4 text-muted-foreground ml-3" />
              <Select value={editRole} onValueChange={setEditRole}>
                <SelectTrigger className="border-0 flex-1 pl-2 bg-transparent focus:ring-0">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Teacher">Teacher</SelectItem>
                  <SelectItem value="Parent">Parent</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </motion.div>

        <DialogFooter className="flex justify-between pt-4">
          <DialogClose asChild>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={handleSaveChanges}
            className="bg-primary hover:bg-primary/90 text-white shadow-md"
          >
            <Save className="mr-2 h-4 w-4" /> Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;



  