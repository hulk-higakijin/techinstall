import { z } from 'zod';

export const channelSchema = z.object({
	id: z.string().min(1),
	name: z.string().min(1),
	avatarUrl: z.string().url()
});
