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
  "latest-jobs": [
    { id: "250523-g2cl-lt_n001", src: "https://i.pinimg.com/1200x/17/13/4a/17134a44f8e577a45e57608afd7a8cf7.jpg", alt: "Green to clean" },
    { id: "2", src: "https://picsum.photos/id/2/600/600", alt: "Default Image 2" },
    { id: "3", src: "https://picsum.photos/id/3/600", alt: "Default Image 2" },
    { id: "4", src: "https://picsum.photos/id/4/600/600", alt: "Default Image 4" },
    { id: "5", src: "https://picsum.photos/id/5/600/600", alt: "Default Image 5" },
    { id: "6", src: "https://picsum.photos/id/6/600/600", alt: "Default Image 6" },
    // ...
  ],
  "pool-remodeling": [
    { id: "10", src: "https://picsum.photos/id/10/600/600", alt: "Pool Remodeling 1" },
    { id: "11", src: "https://picsum.photos/id/11/600/600", alt: "Pool Remodeling 2" },
    { id: "12", src: "https://picsum.photos/id/12/600/600", alt: "Pool Remodeling 3" },
    { id: "13", src: "https://picsum.photos/id/13/600/600", alt: "Pool Remodeling 4" },
    { id: "14", src: "https://picsum.photos/id/14/600/600", alt: "Pool Remodeling 5" },
    { id: "15", src: "https://picsum.photos/id/15/600/600", alt: "Pool Remodeling 6" },
    { id: "16", src: "https://picsum.photos/id/16/600/600", alt: "Pool Remodeling 7" },
    { id: "17", src: "https://picsum.photos/id/17/600/600", alt: "Pool Remodeling 8" },
    { id: "18", src: "https://picsum.photos/id/18/600/600", alt: "Pool Remodeling 9" },
    { id: "19", src: "https://picsum.photos/id/19/600/600", alt: "Pool Remodeling 10" },
    { id: "42", src: "https://picsum.photos/id/42/600/600", alt: "Pool Remodeling 13" },
    { id: "43", src: "https://picsum.photos/id/43/600/600", alt: "Pool Remodeling 13" },
    // ...
  ],
  "plastering": [
    { id: "20", src: "https://picsum.photos/id/20/600/600", alt: "Replastering 1" },
    { id: "21", src: "https://picsum.photos/id/26/600/600", alt: "Replastering 2" },
    // ...
  ],
  "new-pools-and-additionals": [
    { id: "10", src: "https://picsum.photos/id/10/600/600", alt: "Pool Remodeling 1" },
    { id: "11", src: "https://picsum.photos/id/11/600/600", alt: "Pool Remodeling 2" },
    { id: "12", src: "https://picsum.photos/id/12/600/600", alt: "Pool Remodeling 3" },
    { id: "13", src: "https://picsum.photos/id/13/600/600", alt: "Pool Remodeling 4" },
    { id: "14", src: "https://picsum.photos/id/14/600/600", alt: "Pool Remodeling 5" },
    { id: "15", src: "https://picsum.photos/id/15/600/600", alt: "Pool Remodeling 6" },
    { id: "16", src: "https://picsum.photos/id/16/600/600", alt: "Pool Remodeling 7" },
  ],
  "waterfalls-and-fontains": [
    { id: "10", src: "https://picsum.photos/id/10/600/600", alt: "Pool Remodeling 1" },
    { id: "11", src: "https://picsum.photos/id/11/600/600", alt: "Pool Remodeling 2" },
    { id: "12", src: "https://picsum.photos/id/12/600/600", alt: "Pool Remodeling 3" },
    { id: "13", src: "https://picsum.photos/id/13/600/600", alt: "Pool Remodeling 4" },
    { id: "14", src: "https://picsum.photos/id/14/600/600", alt: "Pool Remodeling 5" },
    { id: "15", src: "https://picsum.photos/id/15/600/600", alt: "Pool Remodeling 6" },
    { id: "16", src: "https://picsum.photos/id/16/600/600", alt: "Pool Remodeling 7" },
  ],
  "pool-equipment-upgrades": [
    { id: "10", src: "https://picsum.photos/id/10/600/600", alt: "Pool Remodeling 1" },
    { id: "11", src: "https://picsum.photos/id/11/600/600", alt: "Pool Remodeling 2" },
    { id: "12", src: "https://picsum.photos/id/12/600/600", alt: "Pool Remodeling 3" },
    { id: "13", src: "https://picsum.photos/id/13/600/600", alt: "Pool Remodeling 4" },
    { id: "14", src: "https://picsum.photos/id/14/600/600", alt: "Pool Remodeling 5" },
    { id: "15", src: "https://picsum.photos/id/15/600/600", alt: "Pool Remodeling 6" },
    { id: "16", src: "https://picsum.photos/id/16/600/600", alt: "Pool Remodeling 7" },
  ],
  "outdoor-living": [
    { id: "000000-na-outd_n001", src: "https://picsum.photos/id/10/600/600", alt: "Outdoor Living" },
    // ...
  ],
  "weekly-pool-services": [
    { id: "250523-g2cl-lt_n001", src: "https://i.pinimg.com/1200x/17/13/4a/17134a44f8e577a45e57608afd7a8cf7.jpg", alt: "Green to clean" },
    // ...
  ],
};

export function getMediaCategories(): string[] {
  return Object.keys(MEDIA_STORE);
}

export function getMediaByFilter(filter?: string): MediaItem[] {
  return MEDIA_STORE[filter as keyof typeof MEDIA_STORE] || MEDIA_STORE.default;
}