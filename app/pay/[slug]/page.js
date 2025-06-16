'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getShellBySlug } from '@/lib/storage';
import { loadTheme } from '@/lib/themes';

import {PhonePreview} from "../../../components/pageComponents/PhonePreview";




export default function PaymentPage() {
  const [shell, setShell] = useState(null);
  const [step, setStep] = useState('splash'); // splash, payment, success
  const [amount, setAmount] = useState('25.00');
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const params = useParams();

  useEffect(() => {
    const shellData = getShellBySlug(params.slug);
    if (!shellData) {
      setIsLoading(false);
      return;
    }

    setShell(shellData);
    loadTheme(shellData.theme);
    setIsLoading(false);

    // Auto-navigate from splash after 2 seconds
    const timer = setTimeout(() => {
      setStep('payment');
    }, 2000);

    return () => clearTimeout(timer);
  }, [params.slug]);

  const handlePayment = async () => {
    setIsProcessing(true);

    // Simulate vibration if available
    if ('vibrate' in navigator) {
      navigator.vibrate(100);
    }

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
    }, 2000);
  };

  const formatAmount = (value) => {
    const numericValue = value.replace(/[^0-9.]/g, '');
    const parts = numericValue.split('.');
    if (parts.length > 2) {
      return parts[0] + '.' + parts[1];
    }
    if (parts[1] && parts[1].length > 2) {
      return parts[0] + '.' + parts[1].substring(0, 2);
    }
    return numericValue;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!shell) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-2">Payment Shell Not Found</h1>
          <p className="text-gray-600">The payment link you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen theme-container flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        {/* Splash Screen */}
        {step === 'splash' && (
          <div className="theme-card rounded-2xl p-8 text-center animate-fade-in">
            <div className="mb-6">
              {shell.logo ? (
                <img 
                  src={shell.logo} 
                  alt={shell.businessName}
                  className="max-h-20 max-w-32 object-contain mx-auto bg-white/90 rounded-lg p-3"
                />
              ) : (
                <div className="w-20 h-20 bg-white/90 rounded-lg flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              )}
            </div>
            <h1 className="theme-text-primary text-2xl font-bold mb-2">{shell.businessName}</h1>
            <p className="theme-text-secondary text-sm">Secure Payment Processing</p>
            <div className="mt-6">
              <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
            </div>
          </div>
        )}

        {/* Payment Screen */}
        {step === 'payment' && (
          <div className="theme-card rounded-2xl overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="p-6 text-center border-b border-white/20">
              {shell.logo ? (
                <img 
                  src={shell.logo} 
                  alt={shell.businessName}
                  className="max-h-12 max-w-24 object-contain mx-auto mb-3"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              )}
              <h2 className="theme-text-primary text-lg font-bold">{shell.businessName}</h2>
            </div>

            {/* Payment Form */}
            <div className="p-6 space-y-6">
              <div>
                <label className="block theme-text-secondary text-sm font-medium mb-3">
                  Enter Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 theme-text-primary text-2xl font-bold">
                    ₵
                  </span>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(formatAmount(e.target.value))}
                    className="theme-input w-full pl-10 pr-4 py-4 rounded-lg text-center text-2xl font-bold"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <button
                onClick={handlePayment}
                disabled={isProcessing || !amount || parseFloat(amount) <= 0}
                className="theme-button w-full py-4 px-6 rounded-lg text-white font-bold text-lg relative overflow-hidden disabled:opacity-50"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                    Processing...
                  </div>
                ) : (
                  <>
                    <span>Pay ₵{amount || '0.00'}</span>
                    <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </>
                )}
              </button>

              <div className="text-center">
                <p className="theme-text-secondary text-xs">
                  Secure payment powered by Paynari
                </p>
              </div>
            </div>
          </div>
        )}

        {/* <PhonePreview logo={shell.logo} businessName={shell.businessName}/> */}

        {/* Success Screen */}
        {step === 'success' && (
          <div className="theme-card rounded-2xl p-8 text-center animate-zoom-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="theme-text-primary text-2xl font-bold mb-2">Payment Successful!</h1>
            <p className="theme-text-secondary text-sm mb-4">
              Your payment of <span className="font-bold">₵{amount}</span> has been processed
            </p>
            
            <div className="theme-card bg-white/10 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="theme-text-secondary">Merchant:</span>
                <span className="theme-text-primary font-medium">{shell.businessName}</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="theme-text-secondary">Amount:</span>
                <span className="theme-text-primary font-bold">₵{amount}</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="theme-text-secondary">Status:</span>
                <span className="text-green-600 font-medium">Completed</span>
              </div>
            </div>

            <button
              onClick={() => setStep('payment')}
              className="theme-button w-full py-3 px-4 rounded-lg text-white font-medium"
            >
              Make Another Payment
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
        
        .animate-zoom-in {
          animation: zoom-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}