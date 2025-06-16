// Storage utilities for managing users, shells, and transactions
'use client'
const STORAGE_KEYS = {
  currentUser: 'payment-pwa-current-user',
  users: 'payment-pwa-users',
  shells: 'payment-pwa-shells',
  transactions: 'payment-pwa-transactions',
};

// User management
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

export function createUser(email, password, role) {
  const users = getUsers();
  const existingUser = users.find(u => u.email === email);
  
  if (existingUser) {
    throw new Error('User already exists');
  }

  const newUser = {
    id: generateId(),
    email,
    role,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  setUsers(users);
  return newUser;
}

export function authenticateUser(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email);
  return user || null; // In a real app, verify password
}

function getUsers() {
  if (typeof window === 'undefined') return [];
  const usersData = localStorage.getItem(STORAGE_KEYS.users);
  return usersData ? JSON.parse(usersData) : [];
}

function setUsers(users) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
}

// Shell management
export function getShellsByBusinessId(businessId) {
  if (typeof window === 'undefined') return [];
  const shellsData = localStorage.getItem(STORAGE_KEYS.shells);
  const shells = shellsData ? JSON.parse(shellsData) : [];
  return shells.filter(shell => shell.businessId === businessId);
}

export function getShellBySlug(slug) {
  if (typeof window === 'undefined') return null;
  const shellsData = localStorage.getItem(STORAGE_KEYS.shells);
  const shells = shellsData ? JSON.parse(shellsData) : [];
  return shells.find(shell => shell.slug === slug) || null;
}

export function getShellById(id) {
  if (typeof window === 'undefined') return null;
  const shellsData = localStorage.getItem(STORAGE_KEYS.shells);
  const shells = shellsData ? JSON.parse(shellsData) : [];
  return shells.find(shell => shell.id === id) || null;
}

export function createShell(shell) {
  const shells = getAllShells();
  const newShell = {
    ...shell,
    id: generateId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  shells.push(newShell);
  setAllShells(shells);
  return newShell;
}

export function updateShell(id, updates) {
  const shells = getAllShells();
  const shellIndex = shells.findIndex(shell => shell.id === id);
  
  if (shellIndex === -1) return null;

  shells[shellIndex] = {
    ...shells[shellIndex],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  setAllShells(shells);
  return shells[shellIndex];
}

export function deleteShell(id) {
  const shells = getAllShells();
  const filteredShells = shells.filter(shell => shell.id !== id);
  setAllShells(filteredShells);
}

export function getAllShells() {
  if (typeof window === 'undefined') return [];
  const shellsData = localStorage.getItem(STORAGE_KEYS.shells);
  return shellsData ? JSON.parse(shellsData) : [];
}

function setAllShells(shells) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.shells, JSON.stringify(shells));
}

// Utility functions
function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function generateSlug(businessName) {
  const base = businessName
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')       // spaces → dashes
    .replace(/[^a-z0-9\-]/g, '')// remove invalid chars
    .replace(/\-+/g, '-');      // collapse dashes

    const shells = getAllShells();

    let counter = 1;
    let slug = base;


    while (shells.some(s => s.slug === slug)) {
      slug = `${base}-${counter++}`;
    }
    return slug;
}