// lib/storage.js
'use client';

import { apiGet, apiPost } from './api';  // thin wrappers around fetch

const STORAGE_KEYS = {
  currentUser: 'payment-pwa-current-user',
};

// ——————————————————————————————————————————————
// Session (still in localStorage)
// ——————————————————————————————————————————————
export function getCurrentUser() {
  if (typeof window === 'undefined') return null;
  const userData = localStorage.getItem(STORAGE_KEYS.currentUser);
  return userData ? JSON.parse(userData) : null;
}

export function setCurrentUser(user) {
  if (typeof window === 'undefined') return;
  if (user) {
    localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEYS.currentUser);
  }
}

// ——————————————————————————————————————————————
// User management via MongoDB API
// ——————————————————————————————————————————————
export async function createUser(email, role, momoNumber) {
  // no password hashing for MVP
  const { error, user } = await apiPost('/api/users', { email, role, momoNumber });
  if (error) throw new Error(error); console.log(error)
  return user;
}

export async function getAllUsers() {
  return await apiGet('/api/users');
}

export async function authenticateUser(email, password) {
 const users = await getAllUsers();
 const user = users.find(u => u.email === email);
  return user || null; 
}

// (you can write an authenticateUser that calls a login API once you add it, 
// or just fetch all users and find one client‑side for MVP.)

// ——————————————————————————————————————————————
// Shell management via MongoDB API
// ——————————————————————————————————————————————
export async function createShell(shell) {
  // shell = { businessId, businessName, logo, theme, slug, momoNumber }
  const { error, shell: created } = await apiPost('/api/shell', shell);
  if (error) throw new Error(error);
  return created;
}

export async function getAllShells() {
  return await apiGet('/api/shell');
}

export async function getShellsByBusinessId(businessId) {
  const shells = await getAllShells();
  return shells.filter(s => s.businessId === businessId);
}

export async function getShellBySlug(slug) {
  const shells = await getAllShells();
  return shells.find(s => s.slug === slug) || null;
}

export async function getShellById(id) {
  const shells = await getAllShells();
  return shells.find(s => s.id === id) || null;
}

export async function updateShell(id, updates) {
  const { error, shell: updated } = await apiPost('/api/shells', { id, updates }, 'PUT');
  if (error) throw new Error(error);
  return updated;
}

// ——————————————————————————————————————————————
// Utility
// ——————————————————————————————————————————————
export async function generateSlug(businessName) {
  const base = businessName
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')       // spaces → dashes
    .replace(/[^a-z0-9\-]/g, '')// remove invalid chars
    .replace(/\-+/g, '-');      // collapse dashes

    const shells = await getAllShells();

    let counter = 1;
    let slug = base;


    while (shells.some(s => s.slug === slug)) {
      slug = `${base}-${counter++}`;
    }
    return slug;
}



// ——————————————————————————————————————————————
// Delete a shell via API
// ——————————————————————————————————————————————
export async function deleteShell(id) {
  const { error } = await apiPost('/api/shell', { id }, 'DELETE');
  console.log(error, id);
  if (error) throw new Error(error);
  return true;
}