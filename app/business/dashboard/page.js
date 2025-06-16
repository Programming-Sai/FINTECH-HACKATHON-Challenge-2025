'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, getShellsByBusinessId, setCurrentUser, deleteShell } from '@/lib/storage';
import { THEMES } from '@/lib/themes';
import Link from 'next/link';

export default function BusinessDashboard() {
  const [user, setUser] = useState(null);
  const [shells, setShells] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser || currentUser.role !== 'business') {
      router.push('/auth');
      return;
    }

    setUser(currentUser);
    const userShells = getShellsByBusinessId(currentUser.id);
    setShells(userShells);
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    setCurrentUser(null);
    router.push('/auth');
  };

  const copyPaymentLink = (slug) => {
    const link = `${window.location.origin}/pay/${slug}`;
    navigator.clipboard.writeText(link);
    
    // Show simple feedback
    const button = document.activeElement;
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.style.background = '#10B981';
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '';
    }, 2000);
  };

  useEffect(() => {
    localStorage.setItem("shells", JSON.stringify(shells));
  }, [shells]);





  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Paynari</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline text-sm text-gray-600">Welcome, {(user?.email ?? '').split('@')[0] || 'Guest'}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title & Create Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Shells</h2>
            <p className="text-gray-600">Create and manage your branded payment experiences</p>
          </div>
          <button
            onClick={() => router.push('/business/create')}
            className="mt-4 sm:mt-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            + Create New Shell
          </button>
        </div>

        {/* Shells Grid */}
        {shells.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No payment shells yet</h3>
            <p className="text-gray-600 mb-6">Create your first payment shell to start accepting payments</p>
            <button
              onClick={() => router.push('/business/create')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Create Your First Shell
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shells.map((shell) => (
              <div key={shell.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                {/* Theme Preview */}
                <div 
                  className="h-32 p-4 flex items-center justify-center"
                  style={{ background: THEMES[shell.theme]?.preview || THEMES['light-blue'].preview }}
                >
                  {shell.logo ? (
                    <img 
                      src={shell.logo} 
                      alt={shell.businessName}
                      className="max-h-16 max-w-32 object-contain bg-white/90 rounded-lg p-2"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{shell.businessName}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-gray-600">Theme:</span>
                    <span className="text-sm font-medium text-gray-900">{THEMES[shell.theme]?.name}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">
                    Created {new Date(shell.createdAt).toLocaleDateString()}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 flex-wrap">
                    <button
                      onClick={() => router.push(`/business/edit/${shell.id}`)}
                      className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => copyPaymentLink(shell.slug)}
                      className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                    >
                      Share
                    </button>
                    <Link
                      href={`/pay/${shell.slug}`}
                      target="_blank"
                      style={{ background: THEMES[shell.theme]?.preview || THEMES['light-blue'].preview, textAlign:'center' }}
                      className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => {if (window.confirm(`Are you sure you want to delete "${shell.businessName}"? This cannot be undone.`)){const updatedShells = shells.filter(s => s.id !== shell.id);setShells(updatedShells); deleteShell(shell.id); }}}
                      className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}