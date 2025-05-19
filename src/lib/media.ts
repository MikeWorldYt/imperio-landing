// src/lib/media.ts
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