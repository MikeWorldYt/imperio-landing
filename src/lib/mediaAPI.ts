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
  "new-pools-and-additions": [
    { id: "000000-na-nwpo-lt_n001", src: "https://i.pinimg.com/1200x/68/c2/07/68c20705a37e7fd9ab2da217e18e0ac3.jpg", alt: "New Pools" },
    { id: "201004-addspa-covina_n001", src: "https://i.pinimg.com/1200x/83/f1/06/83f1065309a68932f3ffabfb1dd3b4db.jpg", alt: "Spa Addition" },
    { id: "201004-addspa-covina_n002", src: "https://i.pinimg.com/1200x/d4/00/be/d400bebeb7839cd3ee49b90a6a8dc946.jpg", alt: "Spa Addition" },
    { id: "201004-addspa-covina_n003", src: "https://i.pinimg.com/1200x/cf/7c/1d/cf7c1d90a5eda81e979ca07d70449599.jpg", alt: "Spa Addition" },
    { id: "201004-addspa-covina_n004", src: "https://i.pinimg.com/1200x/fe/1e/8d/fe1e8dc7c93443ad5dd310fc0aa0a9b5.jpg", alt: "Spa Addition" },
    { id: "201004-addspa-covina_n005", src: "https://i.pinimg.com/1200x/ee/c8/f3/eec8f3d5d66ec30f389f053bd7c165d2.jpg", alt: "Spa Addition" },
    { id: "201004-addspa-covina_n006", src: "https://i.pinimg.com/1200x/05/3e/4a/053e4a663c4ca54ec6185ae2d20cebad.jpg", alt: "Spa Addition" },
    { id: "201004-addspa-covina_n007", src: "https://i.pinimg.com/1200x/df/c5/91/dfc591ada21a93dead9331aaadd1c3d9.jpg", alt: "Spa Addition" },
    { id: "201004-addspa-covina_n008", src: "https://i.pinimg.com/1200x/3b/40/a3/3b40a36592d11a6631e85045a4aee4c0.jpg", alt: "Spa Addition" },
    { id: "201004-addspa-covina_n009", src: "https://i.pinimg.com/1200x/db/f2/cf/dbf2cf4745d33f6e97d63114be95ad59.jpg", alt: "Spa Addition" },
    { id: "201004-addspa-covina_n010", src: "https://i.pinimg.com/1200x/54/88/4a/54884ae348bc85590ac3516ee45a31a4.jpg", alt: "Spa Addition" },
    { id: "201004-addspa-covina_n011", src: "https://i.pinimg.com/1200x/e5/f9/d5/e5f9d5ff1799dd9d9232d6ecf12dbcb9.jpg", alt: "Spa Addition" },
    { id: "201004-addspa-covina_n012", src: "https://i.pinimg.com/1200x/b4/36/f1/b436f112f0fcadbb04b1d25b679b36e0.jpg", alt: "Spa Addition" },
    { id: "201004-addspa-covina_n013", src: "https://i.pinimg.com/1200x/19/f5/d0/19f5d0abcccd861af6ac6aa78582514b.jpg", alt: "Spa Addition" },
    { id: "201004-addspa-covina_n014", src: "https://i.pinimg.com/1200x/42/56/65/42566545c459c744f10b6950afa5464e.jpg", alt: "Spa Addition" },
    { id: "201004-addspa-covina_n015", src: "https://i.pinimg.com/1200x/9c/69/96/9c69966a9e53a75a802595b22c148603.jpg", alt: "Spa Addition" },
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