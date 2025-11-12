/**
 * Utility functions for handling paths with the base URL
 */

/**
 * Get the base URL from the environment
 * This uses the 'base' setting from astro.config.mjs
 */
export const BASE_URL = import.meta.env.BASE_URL;

/**
 * Create a path with the base URL prepended
 * @param path - The path to append to the base URL (should start with /)
 * @returns The complete path with base URL
 */
export function withBase(path: string): string {
  // Remove trailing slash from base and leading slash from path to avoid double slashes
  const base = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
