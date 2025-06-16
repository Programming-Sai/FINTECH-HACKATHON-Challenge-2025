'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, createShell, generateSlug } from '@/lib/storage';
import { THEMES, loadTheme } from '@/lib/themes';
import { PhonePreview } from '@/components/pageComponents/PhonePreview';


export default function CreateShell() {
  const [user, setUser] = useState(null);
  const [businessName, setBusinessName] = useState('');
  const [logo, setLogo] = useState('');
  const [theme, setTheme] = useState('light-blue');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'business') {
      router.push('/auth');
      return;
    }
    setUser(currentUser);
  }, [router]);

  useEffect(() => {
    // Load theme for preview
    loadTheme(theme);
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
      const slug = generateSlug(businessName);
      const shell = createShell({
        businessId: user.id,
        businessName,
        logo,
        theme,
        slug,
      });

      router.push('/business/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
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
            <h1 className="text-xl font-bold text-gray-900">Create Payment Shell</h1>
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
                {isLoading ? 'Creating Shell...' : 'Create Payment Shell'}
              </button>
            </form>
          </div>

          <PhonePreview logo={logo} businessName={businessName}/>
         
        </div>
      </div>
    </div>
  );
}