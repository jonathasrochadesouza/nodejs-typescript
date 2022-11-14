import { Schema, model, Document } from 'mongoose';

interface UserInterface extends Document {
    fistName ?: string
    lastName ?: string
    email ?: string

    fullName(): string
}

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String
}, {
    timestamps: true
})

UserSchema.methods.fullName = function(): string {
    return `${this.firstName} ${this.lastName}`;
}

export default model<UserInterface>('User', UserSchema);
