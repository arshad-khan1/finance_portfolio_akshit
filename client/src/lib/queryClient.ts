// This file is kept for compatibility but is not used in the frontend-only version
// It's here to prevent import errors in existing components

// Empty QueryClient implementation for the frontend-only version
export const queryClient = {};

// Placeholder API request function for compatibility
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  console.log('API request called in frontend-only mode:', method, url);
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
