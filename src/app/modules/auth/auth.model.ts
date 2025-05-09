import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import config from '../../config';

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    method: {
      type: String,
      enum: ['credentials', 'github', 'google'],
      default: 'credentials',
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    profileImage: {
      type: String, // This will store the URL of the user's profile image
      default: '',  // Default is empty string if no image is uploaded
    },
  },
  { timestamps: true },
);

// Hash the password before saving the user
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // only hash if password is new or changed

  try {
    const saltRounds = Number(config.bcrypt_salt_rounds) || 10;
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword;
    next();
  } catch (err) {
    next(err as Error);
  }
});

export const User = mongoose.model('User', UserSchema);
