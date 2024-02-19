import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const alt =
    "A cartoon rocket flying over a mountain peak, with the mountain featuring snow and a flag on top. On top of the mountain, there's a frontend developer sitting in front of their computer.";

export async function GET() {
    const imageData = await fetch(new URL('./og.png', import.meta.url)).then(
        (res) => res.arrayBuffer(),
    );
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    background: '#f6f6f6',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img width="256" height="256" src={imageData} alt={alt} />
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}