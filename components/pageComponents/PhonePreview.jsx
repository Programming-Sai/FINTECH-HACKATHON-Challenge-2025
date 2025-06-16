'use client'

import {useEffect } from 'react';


export function PhonePreview({ logo, businessName, theme }) {
  useEffect(() => {
    if (theme) {
      loadTheme(theme); // Already works for full preview
    }
  }, [theme]);
  const amount = 90;
  
  return (
    <div className="mx-auto max-w-xs">
        <div className="bg-black rounded-3xl p-2 shadow-xl">
        <div className="bg-white rounded-2xl overflow-hidden relative">
            
            {/* Fake Top Status Bar */}
            <div className="h-5 px-3 flex items-center justify-between text-xs text-gray-400 bg-white">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                <div className="w-4 h-2 border-2 border-gray-400 rounded-sm"></div>
            </div>
            </div>


            {/* Payment Body */}
            <div className="theme-container flex items-center justify-center p-4 min-h-[600px]">

            {/* Payment Form */}
            <div className="theme-card rounded-2xl overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="p-6 text-center border-b border-white/20">
              {logo ? (
                <img 
                  src={logo} 
                  alt={businessName}
                  className="max-h-12 max-w-24 object-contain mx-auto mb-3"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              )}
              <h2 className="theme-text-primary text-lg font-bold">{businessName}</h2>
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
                    value="25.00"
                    readOnly
                    className="theme-input w-full pl-10 pr-4 py-4 rounded-lg text-center text-2xl font-bold"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <button
                className="theme-button w-full py-4 px-6 rounded-lg text-white font-bold text-lg relative overflow-hidden disabled:opacity-50"
              >

                  <>
                    <span>Pay ₵25.00</span>
                    <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </>
              </button>

              <div className="text-center">
                <p className="theme-text-secondary text-xs">
                  Secure payment powered by Paynari
                </p>
              </div>
            </div>
          </div>



            </div>

        </div>
        </div>
    </div>
  )
}
