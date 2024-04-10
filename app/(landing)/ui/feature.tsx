import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { featuresConfig } from "@/config/features";

export function FeatureCards() {
    return (
        <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuresConfig.features.map((feature) => (
                <Card key={feature.title} className="flex flex-col items-center justify-center space-y-4">
                <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>{feature.description}</CardContent>
                </Card>
            ))}
            </div>
        </div>
        </section>
    );
}