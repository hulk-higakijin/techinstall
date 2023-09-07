import { z } from 'zod';

export const youtubeSchema = z.object({
	id: z.string().min(1),
	title: z.string().min(1),
	thumbnailUrl: z.string().url(),
	channelId: z.string().min(1),
});
