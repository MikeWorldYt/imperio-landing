// Old API fetch
export async function getAllMedia(limit = 20) {
    const res = await fetch(`https://picsum.photos/v2/list?limit=${limit}`);
    const data = await res.json();
    return data
    .slice(10). // note: skip first 10, delete later
    map((item: any) => ({
        id: item.id,
        src: `https://picsum.photos/id/${item.id}/600/600`,
        alt: item.author,
    }));
}

// Internal API
type MediaItem = {
  id: string;
  src: string;
  alt: string;
};

const MEDIA_STORE: Record<string, MediaItem[]> = {
  default: [
    { id: "1", src: "https://picsum.photos/id/1/600/600", alt: "Default Image 1" },
    { id: "2", src: "https://picsum.photos/id/2/600/600", alt: "Default Image 2" },
    { id: "3", src: "https://picsum.photos/id/3/600", alt: "Default Image 2" }
    // ...
  ],
  "pool-remodeling": [
    { id: "10", src: "https://picsum.photos/id/10/600/600", alt: "Pool Remodeling 1" },
    { id: "11", src: "https://picsum.photos/id/11/600/600", alt: "Pool Remodeling 2" },
    { id: "12", src: "https://picsum.photos/id/12/600/600", alt: "Pool Remodeling 3" },
    // ...
  ],
  "replastering": [
    { id: "20", src: "https://picsum.photos/id/20/600/600", alt: "Replastering 1" },
    { id: "21", src: "https://picsum.photos/id/26/600/600", alt: "Replastering 2" },
    // ...
  ],
};

export function getMediaCategories(): string[] {
  return Object.keys(MEDIA_STORE);
}

export function getMediaByFilter(filter?: string): MediaItem[] {
  return MEDIA_STORE[filter as keyof typeof MEDIA_STORE] || MEDIA_STORE.default;
}