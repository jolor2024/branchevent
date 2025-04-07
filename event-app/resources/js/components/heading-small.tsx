export default function HeadingSmall({ title, description }: { title: string; description?: string }) {
    return (
        <header className="m-0">
            <h3 className="text-base font-normal">{title}</h3>
        </header>
    );
}
