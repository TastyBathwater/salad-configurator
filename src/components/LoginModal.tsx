import React, { useState } from 'react';
import Modal from './Modal';

type LoginModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onLogin?: (email: string, password: string) => void;
};

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onLogin) {
            onLogin(email, password);
        }
        // Optionally clear form and close
        setEmail('');
        setPassword('');
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors mt-6"
                    >
                        Log In
                    </button>
                </form>

                {/* Optional: Sign up link */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    Don't have an account?{' '}
                    <button 
                        onClick={() => {
                            // Handle sign up navigation
                            console.log('Sign up clicked');
                        }}
                        className="text-blue-500 hover:text-blue-600 font-medium"
                    >
                        Sign up
                    </button>
                </p>
            </div>
        </Modal>
    );
};

export default LoginModal;