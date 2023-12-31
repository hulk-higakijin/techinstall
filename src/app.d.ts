// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			auth: import("lucia-auth").AuthRequest;
		}
	}
}

/// <reference types="lucia" />
declare global {
	namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type UserAttributes = {
			username: string;
			isAdmin: boolean;
		};
	}
}

// THIS IS IMPORTANT!!!
export {};
