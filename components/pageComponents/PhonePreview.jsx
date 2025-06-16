import React from 'react'

export const PhonePreview = ({ logo, businessName, }) => {
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

            {/* Native-style Header */}
            <div className="theme-card border-b px-4 py-3 text-center">
            {logo ? (
                <img 
                src={logo} 
                alt="Business logo"
                className="max-h-12 max-w-24 object-contain mx-auto mb-1"
                />
            ) : (
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-1">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                </div>
            )}
            <h3 className="theme-text-primary text-base font-semibold">
                {businessName || 'Your Business Name'}
            </h3>
            </div>

            {/* Payment Body */}
            <div className="theme-container flex flex-col justify-between p-4 min-h-[450px]">

            <div>
                <label className="block theme-text-secondary text-sm font-medium mb-2">
                Amount
                </label>
                <input
                type="text"
                value="$25.00"
                readOnly
                className="theme-input w-full px-4 py-3 rounded-lg text-center text-2xl font-bold border"
                />
            </div>

            <div className="mt-6">
                <button className="theme-button w-full py-3 px-4 rounded-lg text-white font-medium">
                Pay Now
                </button>
            </div>

            </div>

            {/* Fake Bottom Nav */}
            <div className="h-12 bg-white border-t flex items-center justify-center text-gray-400 text-sm">
            Powered by Paynari
            </div>

        </div>
        </div>
    </div>
  )
}
