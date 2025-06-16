'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getCurrentUser, getShellById, updateShell } from '@/lib/storage';
import { THEMES, loadTheme } from '@/lib/themes';

export default function EditShell() {
  const [user, setUser] = useState(null);
  const [shell, setShell] = useState(null);
  const [businessName, setBusinessName] = useState('');
  const [logo, setLogo] = useState('');
  const [theme, setTheme] = useState('light-blue');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'business') {
      router.push('/auth');
      return;
    }
    setUser(currentUser);

    const shellData = getShellById(params.id);
    if (!shellData || shellData.businessId !== currentUser.id) {
      router.push('/business/dashboard');
      return;
    }

    setShell(shellData);
    setBusinessName(shellData.businessName);
    setLogo(shellData.logo || '');
    setTheme(shellData.theme);
  }, [router, params.id]);

  useEffect(() => {
    if (theme) {
      loadTheme(theme);
    }
  }, [theme]);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setLogo(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      updateShell(shell.id, {
        businessName,
        logo,
        theme,
      });

      router.push('/business/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user || !shell) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => router.push('/business/dashboard')}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dashboard
            </button>
            <h1 className="text-xl font-bold text-gray-900">Edit Payment Shell</h1>
            <div></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Shell Configuration</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  id="businessName"
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Enter your business name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-2">
                  Logo Upload
                </label>
                <input
                  id="logo"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                {logo && (
                  <div className="mt-3">
                    <img 
                      src={logo} 
                      alt="Logo preview" 
                      className="max-h-20 max-w-40 object-contain bg-gray-50 rounded-lg p-2 border"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Theme Selection
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(THEMES).map(([key, themeData]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setTheme(key)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        theme === key
                          ? 'border-blue-500 ring-2 ring-blue-200'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div 
                        className="w-full h-12 rounded-md mb-2"
                        style={{ background: themeData.preview }}
                      ></div>
                      <div className="text-sm font-medium text-gray-900">{themeData.name}</div>
                      <div className="text-xs text-gray-600">{themeData.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || !businessName}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              >
                {isLoading ? 'Updating Shell...' : 'Update Payment Shell'}
              </button>
            </form>
          </div>

          {/* Live Preview */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Live Preview</h2>
            
            {/* Phone Frame */}
            <div className="mx-auto max-w-xs">
              <div className="bg-black rounded-3xl p-2">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Preview Content */}
                  <div className="theme-container min-h-[400px] flex flex-col">
                    {/* Header */}
                    <div className="theme-card border-0 rounded-none p-4 text-center">
                      {logo ? (
                        <img 
                          src={logo} 
                          alt="Business logo"
                          className="max-h-12 max-w-24 object-contain mx-auto mb-2"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      )}
                      <h3 className="theme-text-primary text-lg font-bold">
                        {businessName || 'Your Business Name'}
                      </h3>
                    </div>

                    {/* Payment Form */}
                    <div className="flex-1 p-4 space-y-4">
                      <div>
                        <label className="block theme-text-secondary text-sm font-medium mb-2">
                          Amount
                        </label>
                        <input
                          type="text"
                          value="$25.00"
                          readOnly
                          className="theme-input w-full px-3 py-2 rounded text-center text-xl font-bold"
                        />
                      </div>

                      <button className="theme-button w-full py-3 px-4 rounded-lg text-white font-medium">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}