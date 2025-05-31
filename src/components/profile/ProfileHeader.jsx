import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Edit, Upload, MessageSquare, UserPlus, TrendingUp } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import EditProfileDialog from '@/components/profile/EditProfileDialog';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { useNavigate } from 'react-router-dom';

const ProfileHeader = ({ user, updateUser }) => {
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAvatarUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateUser({ ...user, avatarUrl: reader.result });
        toast({ title: "Avatar Updated", description: "Your new avatar has been set." });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = (updatedDetails) => {
    updateUser({ ...user, ...updatedDetails });
    toast({ title: "Profile Updated", description: "Your profile details have been saved." });
  };

  if (!user) return null;

  return (
    <>
      <motion.div
        className="bg-card text-card-foreground p-6 md:p-8 rounded-b-2xl shadow-xl relative overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 -z-10"></div>
        <div className="absolute -top-1/2 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>

        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-background shadow-lg ring-2 ring-primary/50">
                <AvatarImage src={user?.avatarUrl} alt={user?.name} />
                <AvatarFallback className="text-4xl">{user?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-2 right-2 bg-background/80 hover:bg-background backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                onClick={handleAvatarUploadClick}
              >
                <Upload className="w-4 h-4 text-primary" />
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleAvatarChange}
                accept="image/*"
                className="hidden"
              />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                {user?.name || 'User'}
              </h1>
              <p className="text-lg text-muted-foreground">
                {user?.role || 'Role not set'}
              </p>
              <Button
  variant="outline"
  size="sm"
  className="mt-4 shadow-sm hover:shadow-md"
  onClick={() => {
    console.log("Edit button clicked");
    setIsEditing(true);
  }}
>
  <Edit className="w-4 h-4 mr-2" /> Edit Profile
</Button>

            </div>

            <motion.div
              className="impact-card-bg p-4 md:p-6 rounded-xl shadow-lg min-w-[220px] text-center md:text-left relative overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => navigate('/impact')}
              title="View your full impact"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-xl opacity-70 animate-pulse"></div>
              <div className="flex items-center justify-center md:justify-start text-primary mb-2">
                <TrendingUp className="w-6 h-6 mr-2" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">My Impact</h3>
              </div>
              <p className="text-4xl font-bold text-primary">
                <AnimatedCounter value={65} />
              </p>
              <p className="text-xs text-muted-foreground mt-1">Interactions Contributed</p>
            </motion.div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap gap-3 justify-center md:justify-start">
            <Button className="shadow-sm hover:shadow-md">
              <MessageSquare className="w-4 h-4 mr-2" /> Write a Note
            </Button>
            <Button variant="secondary" className="shadow-sm hover:shadow-md">
              <MessageSquare className="w-4 h-4 mr-2" /> Start a Chat
            </Button>
            <Button variant="secondary" className="shadow-sm hover:shadow-md">
              <UserPlus className="w-4 h-4 mr-2" /> Invite a Friend
            </Button>
          </div>
        </div>
      </motion.div>

      <EditProfileDialog
  isOpen={isEditing}
  setIsOpen={setIsEditing}
  user={user}
  updateUser={handleSaveProfile}
/>
    </>
  );
};

export default ProfileHeader;










