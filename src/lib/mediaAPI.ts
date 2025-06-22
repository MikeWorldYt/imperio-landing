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
    { id: "000000-na-prem-lt_n001", src: "https://i.pinimg.com/1200x/d7/e1/69/d7e16972351474de00ff0bf635889e58.jpg", alt: "Pool Remodeling" },
    { id: "000000-na-nwpo-lt_n001", src: "https://i.pinimg.com/1200x/68/c2/07/68c20705a37e7fd9ab2da217e18e0ac3.jpg", alt: "New Pools" },
    // ...
  ],
  "pool-remodeling": [
    { id: "000000-na-prem-lt_n001", src: "https://i.pinimg.com/1200x/d7/e1/69/d7e16972351474de00ff0bf635889e58.jpg", alt: "Pool Remodeling" },
    // ...
  ],
  "plastering": [
    { id: "000000-na-plas_n001", src: "https://i.pinimg.com/1200x/f3/ac/49/f3ac495dc88f66d4c8dee8e0e5cb0249.jpg", alt: "Replastering" },
    { id: "000000-na-mpeb_n001", src: "https://i.pinimg.com/1200x/ab/3d/53/ab3d539f395476ff54e445bcf56a9a9d.jpg", alt: "Mini Pebble" },
    // ...
  ],
  "new-pools-and-additionals": [
    { id: "000000-na-nwpo-lt_n001", src: "https://i.pinimg.com/1200x/68/c2/07/68c20705a37e7fd9ab2da217e18e0ac3.jpg", alt: "New Pools" },
    // ...
  ],
  "waterfalls-and-fountains": [
    { id: "000000-na-wafa_n001", src: "https://i.pinimg.com/1200x/13/d5/57/13d5577b3ac61c792e550381c41708d7.jpg", alt: "Waterfalls" },
    // ...
  ],
  "pool-equipment-upgrades": [
    { id: "000000-na-equp_n001", src: "https://i.pinimg.com/1200x/69/0d/d5/690dd5df84ed8f81df654fbaaa0bd552.jpg", alt: "Equipments" },
    // ...
  ],
  "outdoor-living": [
    { id: "000000-na-outd_n001", src: "https://i.pinimg.com/1200x/39/eb/f0/39ebf0cc79dd5e8b0e66cdb758c3df25.jpg", alt: "Outdoor Living" },
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