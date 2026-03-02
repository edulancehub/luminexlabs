import { SERVICES, SERVICE_KEYS } from '@/data/services';
import ServicePage from './ServicePage';

export function generateStaticParams() {
    return SERVICE_KEYS.map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const data = SERVICES[slug];
    if (!data) return { title: 'Service — LuminexLabs' };
    return {
        title: `${data.title} — LuminexLabs`,
        description: data.subtitle
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const data = SERVICES[slug];
    if (!data) {
        return (
            <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 100 }}>
                <div className="text-center">
                    <h1 className="section-heading">Service not found</h1>
                    <p className="section-desc">The service you&apos;re looking for doesn&apos;t exist.</p>
                </div>
            </div>
        );
    }

    const relatedKeys = SERVICE_KEYS.filter(k => k !== slug).sort(() => 0.5 - Math.random()).slice(0, 3);
    const related = relatedKeys.map(k => ({ slug: k, ...SERVICES[k] }));

    return <ServicePage data={data} slug={slug} related={related} />;
}
